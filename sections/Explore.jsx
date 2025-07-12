// app/sections/Explore.jsx
"use client";

import { useState, useEffect } from "react";
import styles from "../styles";
import { exploreWorlds } from "../constants";
import ProjectCarouselCard from "@/components/ProjectCarouselCard";

const Explore = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % exploreWorlds.length);
  };

  const goToPrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + exploreWorlds.length) % exploreWorlds.length
    );
  };

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

    if (isLeftSwipe) goToNext();
    else if (isRightSwipe) goToPrevious();

    setTimeout(() => setIsDragging(false), 100);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goToPrevious();
      else if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getCardStyle = (index) => {
    const position = index - activeIndex;
    if (position === 0)
      return {
        transform: "translateX(0%) scale(1) rotateY(0deg)",
        zIndex: 20,
        opacity: 1,
      };
    if (position === -1)
      return {
        transform: "translateX(-60%) scale(0.8) rotateY(25deg)",
        zIndex: 10,
        opacity: 0.7,
      };
    if (position === 1)
      return {
        transform: "translateX(60%) scale(0.8) rotateY(-25deg)",
        zIndex: 10,
        opacity: 0.7,
      };
    return { transform: "translateX(0%) scale(0.6)", zIndex: 1, opacity: 0 };
  };

  return (
    <section
      className={`${styles.paddings} relative overflow-hidden`}
      id="work"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              Nuestros Trabajos
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Explora Nuestro
            </span>
            <br className="md:block hidden" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Trabajo
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cada proyecto es una historia única. Descubre cómo transformamos
            ideas en{" "}
            <span className="text-cyan-400 font-semibold">
              experiencias digitales extraordinarias
            </span>
            que conectan con las audiencias y generan resultados.
          </p>
        </div>

        <div
          className="relative w-full max-w-6xl mx-auto mb-12 select-none"
          style={{ perspective: "1200px", height: "600px" }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={goToPrevious}
            className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-30 bg-slate-800/60 hover:bg-slate-700/80 text-white p-2 rounded-full shadow-lg hidden xl:flex"
          >
            ←
          </button>

          <button
            onClick={goToNext}
            className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-30 bg-slate-800/60 hover:bg-slate-700/80 text-white p-2 rounded-full shadow-lg hidden xl:flex"
          >
            →
          </button>

          {exploreWorlds.map((project, index) => (
            <ProjectCarouselCard
              key={project.id}
              project={project}
              isActive={index === activeIndex}
              isDragging={isDragging}
              onClick={() => !isDragging && setActiveIndex(index)}
              cardStyle={getCardStyle(index)}
            />
          ))}
        </div>

        <div className="flex justify-center gap-3">
          {exploreWorlds.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-cyan-400 scale-125"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
