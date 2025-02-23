'use client';
import React, { useState } from 'react';

const SlideBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSlideBar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleSlideBar}>Toggle</button>
            <div className={`slide-bar ${isOpen ? 'open' : 'close'}`}>
                <div className="slide-bar__content">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SlideBar;