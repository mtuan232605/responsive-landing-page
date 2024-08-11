import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import vietnameseFlag from '../assets/imgs/flag-vn.png';
import englishFlag from '../assets/imgs/flag-eng.png';
import { FaCheck, FaCaretDown } from "react-icons/fa6";
import "./LanguageSwitcherInput.css";
import { useResponsive } from '../responsive';

const LanguageSwitcherInput = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useResponsive();
  const selectRef = useRef(null);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false); // Close dropdown after selection
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectRef} className={`custom-select ${isMobile ? "custom-select-mobile" : ""}`} >
      <div
        className="select-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={i18n.language === "en" ? englishFlag : vietnameseFlag} alt="flag" />
        <span className={`arrow ${isMobile ? "arrow-mobile" : ""}`}><FaCaretDown /></span>
      </div>
      {isOpen && (
        <div className={`select-options ${isMobile ? "select-options-mobile" : ""}`}>
          <div
            className={`select-option ${i18n.language === "vi" ? "active" : ""}`}
            onClick={() => changeLanguage("vi")}
          >
            {i18n.language === "vi" && <span className="tick"><FaCheck /></span>}
            <img src={vietnameseFlag} alt="Vietnamese" />
            Vietnamese
          </div>
          <div
            className={`select-option ${i18n.language === "en" ? "active" : ""}`}
            onClick={() => changeLanguage("en")}
          >
            {i18n.language === "en" && <span className="tick"><FaCheck /></span>}
            <img src={englishFlag} alt="English" />
            English
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcherInput;
