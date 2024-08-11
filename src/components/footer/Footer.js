import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import backgroundImg from '../../assets/imgs/background-footer.jpg';
import logoFooter from '../../assets/svg/logo-footer.svg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div id="contact-us" className="footer-container">
      <footer
        className="footer"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(0, 10, 255, 0.5) 0%, rgba(0, 0, 0, 0) 136.61%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
            url(${backgroundImg})`
        }}
      >
        <div className="footer-content">
          <FooterLeft logo={logoFooter} />
          <FooterCenter t={t} />
          <FooterRight t={t} />
        </div>
      </footer>
      <FooterBottom />
    </div>
  );
};

const FooterLeft = ({ logo }) => (
  <div className="footer-left">
    <motion.img
      src={logo}
      height={96}
      width={164}
      alt="Logo"
      className="logo"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    />
    <SocialIcons />
  </div>
);

const SocialIcons = () => (
  <div className="social-icons">
    <SocialIcon href="https://twitter.com" Icon={FaTwitter} />
    <SocialIcon href="https://facebook.com" Icon={FaFacebookF} />
    <SocialIcon href="https://linkedin.com" Icon={FaLinkedinIn} />
  </div>
);

const SocialIcon = ({ href, Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Icon />
  </a>
);

const FooterCenter = ({ t }) => (
  <div className="footer-center">
    <h3>{t('footer.address.title')}</h3>
    <Address t={t} />
    <PhoneNumber t={t} />
  </div>
);

const Address = ({ t }) => (
  <div style={{ display: "flex", gap: "12px" }}>
    <FaMapMarkerAlt size={24} />
    <div>
      <p>{t('footer.address.address1')}</p>
      <p>{t('footer.address.address2')}</p>
    </div>
  </div>
);

const PhoneNumber = ({ t }) => (
  <div style={{ display: "flex", gap: "12px" }}>
    <FaPhoneAlt size={24} />
    <p>{t('footer.phoneNumber')}</p>
  </div>
);

const FooterRight = ({ t }) => (
  <div className="footer-right">
    <h3>{t('footer.subscribe.title')}</h3>
    <Subscribe t={t} />
  </div>
);

const Subscribe = ({ t }) => (
  <div>
    <p>{t('footer.subscribe.description')}</p>
    <div className="email-footer-container" style={{ zIndex: 1 }}>
      <input type="email" className="email-footer-input" placeholder="Enter your email" />
      <span className="email-footer-arrow">
        <FaArrowRightLong />
      </span>
    </div>
  </div>
);

const FooterBottom = () => (
  <div className="footer-bottom">
    &copy; 2017 Copyright. Policy.
  </div>
);

export default Footer;
