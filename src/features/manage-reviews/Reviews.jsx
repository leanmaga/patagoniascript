"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/core/i18n/context/LanguageContext";

export const Reviews = () => {
  const { t, locale } = useLanguage();
  const dateLocale = locale === "en" ? "en-US" : "es-AR";
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    handle: "",
    rating: 0,
    message: "",
  });
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });

  const minSwipeDistance = 50;

  // Cargar reseñas al montar el componente
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch("/api/reviews");
      const data = await response.json();
      if (data.success) {
        setReviews(data.data);
      }
    } catch (error) {
      console.error("Error cargando reseñas:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Si es el campo handle, limpiar el @ inicial si lo escriben
    if (name === "handle") {
      const cleanValue = value.replace(/^@+/, ""); // Remover @ del inicio
      setFormData((prev) => ({
        ...prev,
        [name]: cleanValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Función para abrir Instagram
  const openInstagram = (handle) => {
    if (!handle) return;
    const cleanHandle = handle.replace(/^@+/, ""); // Limpiar @ si existe
    window.open(`https://instagram.com/${cleanHandle}`, "_blank");
  };

  const handleRatingClick = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.rating) {
      showNotification(t("feedback.fillRequired"), "error");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // ✅ Agregar inmediatamente la nueva reseña al estado
        const newReview = {
          ...data.data,
          _id: data.data._id || `temp-${Date.now()}`,
          createdAt: new Date().toISOString(),
        };

        setReviews((prev) => [newReview, ...prev]);
        setActiveIndex(0); // Mostrar la nueva reseña

        showNotification(t("feedback.success"), "success");
        setFormData({ name: "", handle: "", rating: 0, message: "" });
        setShowForm(false);
      } else {
        showNotification(data.error, "error");
      }
    } catch (error) {
      showNotification(t("feedback.errorSend"), "error");
    } finally {
      setSubmitting(false);
    }
  };

  // Calcular promedio de calificaciones
  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1);
  };

  const averageRating = calculateAverageRating();

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" });
    }, 5000);
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/leandromagallanes/", "_blank");
  };

  // Funciones de navegación para el slider
  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Funciones para manejar el swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(false);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    if (touchStart && Math.abs(touchStart - e.targetTouches[0].clientX) > 10) {
      setIsDragging(true);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setTimeout(() => setIsDragging(false), 100);
  };

  // Navegación con teclado
  useEffect(() => {
    if (reviews.length <= 1) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [reviews.length]);

  const getCardStyle = (index) => {
    if (reviews.length <= 1) return {};

    const position = index - activeIndex;

    if (position === 0) {
      return {
        transform: "translateX(0%) scale(1) rotateY(0deg)",
        zIndex: 20,
        opacity: 1,
      };
    } else if (
      position === -1 ||
      (position === reviews.length - 1 && activeIndex === 0)
    ) {
      return {
        transform: "translateX(-60%) scale(0.8) rotateY(25deg)",
        zIndex: 10,
        opacity: 0.7,
      };
    } else if (
      position === 1 ||
      (position === -(reviews.length - 1) && activeIndex === reviews.length - 1)
    ) {
      return {
        transform: "translateX(60%) scale(0.8) rotateY(-25deg)",
        zIndex: 10,
        opacity: 0.7,
      };
    } else {
      return {
        transform: "translateX(0%) scale(0.6)",
        zIndex: 1,
        opacity: 0,
      };
    }
  };

  const StarRating = ({
    rating,
    interactive = false,
    onRatingClick = null,
  }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={
            interactive && onRatingClick ? () => onRatingClick(star) : undefined
          }
          className={`text-xl md:text-2xl transition-all duration-200 ${
            interactive
              ? "hover:text-yellow-300 cursor-pointer hover:scale-110 active:scale-95"
              : "cursor-default"
          } ${star <= rating ? "text-yellow-400" : "text-gray-500"}`}
          disabled={!interactive}
          style={{
            filter:
              interactive && star <= rating
                ? "drop-shadow(0 0 4px rgba(250, 204, 21, 0.6))"
                : "none",
          }}
        >
          {star <= rating ? "★" : "☆"}
        </button>
      ))}
    </div>
  );

  return (
    <section className="relative overflow-hidden py-20 px-4">
      {/* Notificación */}
      {notification.show && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
            notification.type === "success"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {notification.message}
        </div>
      )}

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              {t("feedback.label")}
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              {t("feedback.title1")}
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {t("feedback.title2")}
            </span>
          </h2>

          {/* Promedio de calificaciones */}
          {reviews.length > 0 && (
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-slate-800/60 to-slate-900/80 backdrop-blur-xl border border-cyan-400/30 rounded-xl px-4 py-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-lg ${
                        star <= Math.round(averageRating)
                          ? "text-yellow-400"
                          : "text-gray-500"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-white font-bold text-lg">
                  {averageRating}
                </span>
                <span className="text-gray-400 text-sm">
                  ({reviews.length}{" "}
                  {reviews.length !== 1
                    ? t("feedback.reviewPlural")
                    : t("feedback.reviewSingular")}
                  )
                </span>
              </div>
            </div>
          )}

          {/* Botón para agregar reseña */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
          >
            {showForm ? t("feedback.cancel") : t("feedback.leaveReview")}
          </button>
        </div>

        {/* Formulario de reseña */}
        {showForm && (
          <div className="mb-12 bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {t("feedback.shareTitle")}
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cyan-400 font-medium mb-2">
                    {t("feedback.nameLabel")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder={t("feedback.namePh")}
                    maxLength="50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-cyan-400 font-medium mb-2">
                    {t("feedback.igLabel")}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-base">
                      @
                    </span>
                    <input
                      type="text"
                      name="handle"
                      value={formData.handle}
                      onChange={handleInputChange}
                      className="w-full pl-8 pr-4 py-3 bg-slate-700/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="tuusuario"
                      maxLength="30"
                    />
                  </div>
                  <p className="text-gray-500 text-xs mt-1">
                    {t("feedback.igHint")}
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-cyan-400 font-medium mb-3">
                  {t("feedback.ratingLabel")}
                </label>
                <div className="mb-2">
                  <StarRating
                    rating={formData.rating}
                    interactive={true}
                    onRatingClick={handleRatingClick}
                  />
                </div>
                <p className="text-gray-400 text-sm">
                  {formData.rating > 0
                    ? t("feedback.ratingLine", {
                        n: formData.rating,
                        word:
                          formData.rating > 1
                            ? t("feedback.starsWord")
                            : t("feedback.starWord"),
                      })
                    : t("feedback.ratingPick")}
                </p>
              </div>

              <div>
                <label className="block text-cyan-400 font-medium mb-2">
                  {t("feedback.msgLabel")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder={t("feedback.msgPh")}
                  maxLength="500"
                />
                <p className="text-gray-400 text-xs mt-1">
                  {t("feedback.chars", { n: formData.message.length })}
                </p>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting || !formData.name || !formData.rating}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {submitting ? t("feedback.submitting") : t("feedback.submit")}
              </button>
            </div>
          </div>
        )}

        {/* Lista de reseñas */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
            <p className="text-gray-400 mt-4">{t("feedback.loading")}</p>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">{t("feedback.empty")}</p>
          </div>
        ) : reviews.length === 1 ? (
          // Mostrar una sola reseña sin slider
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl" />
              <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 text-4xl md:text-6xl text-cyan-400/20 font-serif">
                "
              </div>
              <div className="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-4 text-4xl md:text-6xl text-cyan-400/20 font-serif">
                "
              </div>

              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-400/30">
                  <span className="text-cyan-400 font-bold text-base md:text-lg">
                    {reviews[0].name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl text-white">
                    {reviews[0].name}
                  </h4>
                  {reviews[0].handle && (
                    <button
                      onClick={() => openInstagram(reviews[0].handle)}
                      className="text-cyan-300 text-sm hover:text-cyan-200 transition-colors flex items-center gap-1 group"
                    >
                      @{reviews[0].handle}
                      <svg
                        className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4 md:mb-6">
                <StarRating rating={reviews[0].rating} />
                <span className="text-gray-300 text-sm ml-2">
                  {reviews[0].rating}.0 / 5.0
                </span>
              </div>

              {reviews[0].message && (
                <blockquote className="text-gray-300 leading-relaxed text-sm md:text-lg relative z-10 mb-4">
                  {reviews[0].message}
                </blockquote>
              )}

              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>
                  {new Date(reviews[0].createdAt).toLocaleDateString(
                    dateLocale,
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </span>
              </div>
            </div>
          </div>
        ) : (
          // Slider 3D para múltiples reseñas
          <div className="relative">
            <div
              className="relative w-full max-w-4xl mx-auto mb-8 select-none"
              style={{
                perspective: "1200px",
                height: "500px",
              }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Botones de navegación - Solo en desktop */}
              <button
                onClick={goToPrevious}
                className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-30 
                           bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-sm
                           text-white p-2 rounded-full shadow-lg
                           transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100
                           hidden xl:flex items-center justify-center"
                aria-label={t("feedback.prevReview")}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-30
                           bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-sm
                           text-white p-2 rounded-full shadow-lg
                           transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100
                           hidden xl:flex items-center justify-center"
                aria-label={t("feedback.nextReview")}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Tarjetas de reseñas */}
              {reviews.map((review, index) => {
                const isActive = index === activeIndex;
                const cardStyle = getCardStyle(index);

                return (
                  <div
                    key={review._id}
                    className="absolute top-1/2 left-1/2 cursor-pointer"
                    style={{
                      ...cardStyle,
                      width: "380px",
                      height: "450px",
                      marginLeft: "-190px",
                      marginTop: "-225px",
                      transformOrigin: "center center",
                      transformStyle: "preserve-3d",
                      transition:
                        "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      pointerEvents: isDragging ? "none" : "auto",
                    }}
                    onClick={() =>
                      !isActive && !isDragging && setActiveIndex(index)
                    }
                  >
                    <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 shadow-2xl flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl" />
                      <div className="absolute -top-2 -left-2 text-3xl text-cyan-400/20 font-serif">
                        "
                      </div>
                      <div className="absolute -bottom-4 -right-2 text-3xl text-cyan-400/20 font-serif">
                        "
                      </div>

                      <div className="flex items-center gap-3 mb-4 relative z-10">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-400/30">
                          <span className="text-cyan-400 font-bold text-base">
                            {review.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-white">
                            {review.name}
                          </h4>
                          {review.handle && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                openInstagram(review.handle);
                              }}
                              className="text-cyan-300 text-sm hover:text-cyan-200 transition-colors flex items-center gap-1 group"
                            >
                              @{review.handle}
                              <svg
                                className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mb-4">
                        <StarRating rating={review.rating} />
                        <span className="text-gray-300 text-sm ml-2">
                          {review.rating}.0 / 5.0
                        </span>
                      </div>

                      {review.message && (
                        <blockquote className="text-gray-300 leading-relaxed text-sm relative z-10 flex-1 mb-4 overflow-y-auto">
                          {review.message}
                        </blockquote>
                      )}

                      <div className="text-xs text-gray-500 relative z-10">
                        <span>
                          {new Date(review.createdAt).toLocaleDateString(
                            dateLocale,
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Indicadores de navegación */}
            <div className="text-center">
              {/* Indicador de swipe - Solo en móvil/tablet */}
              <div className="mb-4 block xl:hidden">
                <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                  <span className="animate-pulse">👈</span>
                  {t("feedback.swipeReviews")}
                  <span className="animate-pulse">👉</span>
                </p>
              </div>

              {/* Indicador de teclado - Solo en desktop */}
              <div className="mb-4 hidden xl:block">
                <p className="text-gray-500 text-xs">
                  {t("feedback.keyboardReviews")}
                </p>
              </div>

              {/* Puntos indicadores */}
              <div className="flex justify-center gap-3">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      w-3 h-3 rounded-full transition-all duration-300
                      ${
                        index === activeIndex
                          ? "bg-cyan-400 scale-125"
                          : "bg-gray-600 hover:bg-gray-400"
                      }
                    `}
                    aria-label={t("feedback.goReview", { n: index + 1 })}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA LinkedIn */}
        <div className="text-center mt-12 md:mt-16">
          <button
            onClick={openLinkedIn}
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 flex items-center gap-2 md:gap-3 mx-auto text-sm md:text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="hidden sm:inline">
              {t("feedback.linkedInLong")}
            </span>
            <span className="sm:hidden">{t("feedback.linkedInShort")}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
