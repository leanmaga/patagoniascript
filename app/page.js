"use client";
import { useEffect, useRef, useState } from "react";
import { Nav, ContactForm, Footer } from "../components";
import {
  Hero,
  About,
  Feedback,
  GetStarted,
  Insights,
  WhatsNew,
  World,
  Explore,
} from "../sections";

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
      }
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

      <Hero />

      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>

      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>

      <World />

      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <div className="relative">
        <ContactForm />
      </div>

      {/* Footer con referencia */}
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
