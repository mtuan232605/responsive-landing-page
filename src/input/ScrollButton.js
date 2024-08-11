import React, { useEffect, useState } from 'react';
import './ScrollButton.css';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const ScrollButton = () => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.pageYOffset === 0);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    const handleClick = () => {
        if (isTop) {
            scrollToBottom();
        } else {
            scrollToTop();
        }
    };

    return (
        <div className="scroll-button" onClick={handleClick}>
            <span className="arrow-icon">{isTop ? <FaAngleDown size={24}/> : <FaAngleUp size={24}/>}</span>
        </div>
    );
};

export default ScrollButton;
