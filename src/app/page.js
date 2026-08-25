"use client";
import { useEffect, useRef, useState } from "react";
import { Nav, Footer, UnifiedBackground } from "@/core/ui/";
import { Hero, About, Insights, Leadership } from "@/features/present-agency/";
import { Reviews } from "@/features/manage-reviews/Reviews";
import { ContactForm } from "@/features/capture-lead/ContactForm";
import { PortfolioSection } from "@/features/showcase-portfolio/PortfolioSection";

const Page = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el footer es visible, oculta el nav
        setShowNavbar(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.2, // Se activa cuando el 20% del footer es visible
      },
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Usa el componente Nav con la prop show */}
      <Nav show={showNavbar} />

      {/* Hero mantiene su propio estilo */}
      <Hero />

      {/* Todas las demás secciones con fondo unificado */}
      <UnifiedBackground>
        <About />
        <div className="gradient-03 z-0" />
        <PortfolioSection />

        <Insights />
        <div className="gradient-04 z-0" />
        <Leadership />
        <div className="gradient-04 z-0" />
        <Reviews />

        <ContactForm />

        {/* Footer con referencia */}
        <div ref={footerRef}>
          <Footer />
        </div>
      </UnifiedBackground>
    </div>
  );
};

export default Page;
