import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logoDesktop from '../../assets/svg/logo-desktop.svg'; // Import the logo image
import logoMobile from '../../assets/svg/logo-mobile.svg'; // Import the logo image
import wizardImg from '../../assets/imgs/he-witch.png'; // Import the wizard image
import backgroundImg from '../../assets/imgs/background.jpg'; // Import the background image
import { useResponsive } from '../../responsive';
import './Header.css';
import { useTranslation } from 'react-i18next';
import LanguageSwitcherInput from '../../input/LanguageSwitcherInput';
import CountdownTimer from './CountdownTimer';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';

const Header = () => {
  const { isMobile } = useResponsive();
  const [menuOpen, setMenuOpen] = useState(false);

  const { t } = useTranslation();

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close the menu after clicking a link on mobile
  };

  return (
    <header className="header" style={{ height: isMobile ? '608px' : '988px' }}>
      {/* Background Section */}
      <div
        className="curved-section"
        style={{ backgroundImage: `url(${backgroundImg})`, height: isMobile ? '608px' : '988px' }}
      ></div>

      {/* Header Bar */}
      <div className="header-bar">
        <motion.img
          src={isMobile ? logoMobile : logoDesktop}
          alt="Logo"
          className="logo"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />

        {isMobile ? (
          <div className="mobile-menu">
            <motion.div
              className="hamburger-icon"
              onClick={() => setMenuOpen(!menuOpen)}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="hamburger"></span>
              <span className="hamburger"></span>
              <span className="hamburger"></span>
            </motion.div>
          </div>
        ) : (
          <motion.nav
            className="nav-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ul>
              <li><a href="#about-us" onClick={(e) => smoothScroll(e, '#about-us')}>{t('aboutUs.navBar')}</a></li>
              <li><a href="#games" onClick={(e) => smoothScroll(e, '#games')}>{t('games.navBar')}</a></li>
              <li><a href="#partners" onClick={(e) => smoothScroll(e, '#partners')}>{t('partners.navBar')}</a></li>
              <li><a href="#contact-us" onClick={(e) => smoothScroll(e, '#contact-us')}>{t('contactUs')}</a></li>
              <li><LanguageSwitcherInput /></li>
            </ul>
          </motion.nav>
        )}

        {isMobile && menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mobile-nav-buttons">
              <LanguageSwitcherInput />
              <div className="close-icon" onClick={() => setMenuOpen(false)}>
                <IoCloseSharp size={30} />
              </div>
            </div>
            <ul>
              <li><a href="#about-us" onClick={(e) => smoothScroll(e, '#about-us')}>{t('aboutUs.navBar')}</a></li>
              <li><a href="#games" onClick={(e) => smoothScroll(e, '#games')}>{t('games.navBar')}</a></li>
              <li><a href="#partners" onClick={(e) => smoothScroll(e, '#partners')}>{t('partners.navBar')}</a></li>
              <li><a href="#contact-us" onClick={(e) => smoothScroll(e, '#contact-us')}>{t('contactUs')}</a></li>
            </ul>
          </motion.div>
        )}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="main-content"
      >
        <h1>{isMobile ? t('weAreGettingReadyMobile') : t('weAreGettingReadyDesktop')}</h1>
        <div className="main-content-detail">
          <CountdownTimer />
          <p style={{ zIndex: 1 }}>{t('greeting')}</p>
          <div className="email-container" style={{ zIndex: 1 }}>
            <input type="email" className="email-input" placeholder={t('placeholderEmailInput')} />
            <span className="email-arrow">
              <FaArrowRightLong />
            </span>
          </div>
          <div className="shadow-background" />
        </div>
      </motion.div>

      {/* Wizard Image */}
      <div className="wizard-image-container">
        <motion.img
          src={wizardImg}
          alt="Wizard"
          className="wizard-image"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <div style={{ height: '48px' }} hidden={!isMobile} />
      </div>
    </header>
  );
};

export default Header;
