'use client';

import { useState, useEffect } from 'react';
import { ServiceCard } from './ServiceCard';

const MIN_SWIPE_DISTANCE = 50;

export const ServiceCarousel = ({
  plans,
  onSelectPlan,
  prevCardLabel,
  nextCardLabel,
  arsLabel,
  viewPlanLabel,
  swipeHintLabel,
  keyboardHintLabel,
  goToPlanLabel,
}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const goToNext = () => setActiveIndex((prev) => (prev + 1) % plans.length);
  const goToPrevious = () =>
    setActiveIndex((prev) => (prev - 1 + plans.length) % plans.length);

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
    if (distance > MIN_SWIPE_DISTANCE) goToNext();
    else if (distance < -MIN_SWIPE_DISTANCE) goToPrevious();
    setTimeout(() => setIsDragging(false), 100);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      else if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [plans.length]);

  useEffect(() => {
    setActiveIndex((i) => Math.min(i, plans.length - 1));
  }, [plans.length]);

  const getCardStyle = (index) => {
    const position = index - activeIndex;
    if (position === 0)
      return {
        transform: 'translateX(0%) scale(1) rotateY(0deg)',
        zIndex: 20,
        opacity: 1,
        pointerEvents: isDragging ? 'none' : 'auto',
      };
    if (position === -1)
      return {
        transform: 'translateX(-60%) scale(0.8) rotateY(25deg)',
        zIndex: 10,
        opacity: 0.7,
        pointerEvents: isDragging ? 'none' : 'auto',
      };
    if (position === 1)
      return {
        transform: 'translateX(60%) scale(0.8) rotateY(-25deg)',
        zIndex: 10,
        opacity: 0.7,
        pointerEvents: isDragging ? 'none' : 'auto',
      };
    return {
      transform: 'translateX(0%) scale(0.6)',
      zIndex: 1,
      opacity: 0,
      pointerEvents: 'none',
    };
  };

  return (
    <>
      <div
        className="relative w-full max-w-6xl mx-auto mb-12 select-none"
        style={{ perspective: '1200px', height: '620px' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button
          onClick={goToPrevious}
          className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-30
                     bg-patagonia-petrol/60 hover:bg-patagonia-petrol/90 backdrop-blur-sm
                     text-white p-2 rounded-full shadow-lg
                     transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100
                     hidden xl:flex items-center justify-center"
          aria-label={prevCardLabel}
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
                     bg-patagonia-petrol/60 hover:bg-patagonia-petrol/90 backdrop-blur-sm
                     text-white p-2 rounded-full shadow-lg
                     transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100
                     hidden xl:flex items-center justify-center"
          aria-label={nextCardLabel}
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

        {plans.map((pkg, index) => (
          <ServiceCard
            key={index}
            pkg={pkg}
            isActive={index === activeIndex}
            style={getCardStyle(index)}
            onClick={() =>
              !isDragging && index !== activeIndex && setActiveIndex(index)
            }
            onCtaClick={() =>
              index === activeIndex ? onSelectPlan(pkg) : setActiveIndex(index)
            }
            arsLabel={arsLabel}
            viewPlanLabel={viewPlanLabel}
          />
        ))}
      </div>

      <div className="text-center">
        <div className="mb-4 block xl:hidden">
          <p className="text-patagonia-muted text-sm flex items-center justify-center gap-2">
            <span className="animate-pulse">👈</span>
            {swipeHintLabel}
            <span className="animate-pulse">👉</span>
          </p>
        </div>
        <div className="mb-4 hidden xl:block">
          <p className="text-patagonia-muted text-xs">{keyboardHintLabel}</p>
        </div>
        <div className="flex justify-center gap-3 mb-6">
          {plans.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-patagonia-turquoise scale-125'
                  : 'bg-patagonia-muted/30 hover:bg-patagonia-muted/60'
              }`}
              aria-label={goToPlanLabel(index + 1)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
