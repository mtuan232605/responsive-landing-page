import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import witchImage from '../../assets/imgs/witch.png';
import calendarIcon from '../../assets/svg/calendar-icon.svg';
import worldMap from '../../assets/svg/map.svg';
import penToolIcon from '../../assets/svg/pen-tool-icon.svg';
import teamIcon from '../../assets/svg/team-icon.svg';
import { useResponsive } from '../../responsive';
import "./AboutUs.css";

const AboutUs = () => {
  const { isMobile } = useResponsive();
  const { t } = useTranslation();

  const witchAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror"
    }
  }

  return (
    <div id='about-us' className="about-us-container">
      <div className={`about-us-content ${isMobile ? 'column-layout' : 'row-layout'}`}>
        <div className="left-content">
          <h2>{t('aboutUs.title')}</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: "left" }}
          >
            {t('aboutUs.description')}
          </motion.p>
          <div className="stats">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <h1>600M+</h1>
              <p>{t('aboutUs.users')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <h1>135+</h1>
              <p>{t('aboutUs.games')}</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="right-content"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="feature">
            <div className="feature-icon">
              <img src={calendarIcon} alt='calendarIcon' />
            </div>
            <div>
              <h3>{t('aboutUs.24Hours')}</h3>
              <p>{t('aboutUs.24HoursDescription')}</p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src={penToolIcon} alt='penToolIcon' />
            </div>
            <div>
              <h3>{t('aboutUs.design')}</h3>
              <p>{t('aboutUs.designDescription')}</p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src={teamIcon} alt='teamIcon' />
            </div>
            <div>
              <h3>{t('aboutUs.team')}</h3>
              <p>{t('aboutUs.teamDescription')}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Witch Image and Map */}
      <motion.div
        className="witch-and-map-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={worldMap} alt="World Map" className="world-map" />
        <motion.img
          src={witchImage}
          alt="Witch"
          className="witch-image"
          animate={witchAnimation}
        />
      </motion.div>
    </div>
  );
};

export default AboutUs;
