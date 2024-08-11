import React from 'react';
import Countdown from 'react-countdown';
import "./CountdownTimer.css"
import { useTranslation } from 'react-i18next';

const CountdownTimer = () => {
  const { t } = useTranslation();

  const additionalTime = 30 * 24 * 60 * 60 * 1000 // 30 days
                        + 18 * 60 * 60 * 1000 // 18 hours
                        + 20 * 60 * 1000 // 20 minutes
                        + 11 * 1000; // 11 second
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="countdown">
        <div className="countdown-item">
          <span className="countdown-number">{days}</span>
          <span className="countdown-label">{t('coutndown.days')}</span>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-number">{hours}</span>
          <span className="countdown-label">{t('coutndown.hours')}</span>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-number">{minutes}</span>
          <span className="countdown-label">{t('coutndown.minutes')}</span>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-number">{seconds}</span>
          <span className="countdown-label">{t('coutndown.seconds')}</span>
        </div>
      </div>
    );
  };

  return <Countdown date={Date.now() + additionalTime} renderer={renderer} />;
};

export default CountdownTimer;
