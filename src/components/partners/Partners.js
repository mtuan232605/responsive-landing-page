import React, { useState, useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Partners.css';
import { partnersList } from '../../data/data';
import { useTranslation } from 'react-i18next';

const useCarousel = (totalItems, visibleItems) => {
  const [currentIndex, setCurrentIndex] = useState(visibleItems);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }, [isTransitioning]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, [isTransitioning]);

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(totalItems);
    } else if (currentIndex === totalItems + visibleItems) {
      setCurrentIndex(visibleItems);
    }
  }, [currentIndex, totalItems, visibleItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [handleNext]);

  return {
    currentIndex,
    isTransitioning,
    handlePrev,
    handleNext,
    handleTransitionEnd,
  };
};

const Partners = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const visibleItems = isMobile ? 1 : 5;
  const totalItems = partnersList.length;
  const clonesCount = visibleItems;

  const {
    currentIndex,
    isTransitioning,
    handlePrev,
    handleNext,
    handleTransitionEnd,
  } = useCarousel(totalItems, visibleItems);

  const { t } = useTranslation();

  const getClones = () => [
    ...partnersList.slice(totalItems - clonesCount),
    ...partnersList,
    ...partnersList.slice(0, clonesCount),
  ];

  return (
    <div id='partners' className="carousel-wrapper">
      <h2 className="carousel-title">{t('partners.title')}</h2>
      <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={handlePrev} className="carousel-button left">
          <FaChevronLeft size={12} color="rgba(0, 0, 0, 0.1)" />
        </button>
        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {getClones().map((partner, index) => (
              <div key={index} className="carousel-item">
                <img
                  src={require(`../../assets/imgs/${partner.img}`)}
                  alt={partner.name}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} className="carousel-button right">
          <FaChevronRight size={12} color="rgba(0, 0, 0, 0.1)" />
        </button>
      </div>
    </div>
  );
};

export default Partners;
