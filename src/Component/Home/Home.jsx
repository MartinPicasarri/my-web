import "./Home.css";
import React, { Element } from 'react-scroll';
import { useState, useEffect } from 'react';

function Home () {
    const [transformStyle, setTransformStyle] = useState({});
    const [animationClass, setAnimationClass] = useState('slide');

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationClass('slide-finished');
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleMouseMove = (e) => {
        const { currentTarget: el } = e;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = (x - centerX) / centerX * 30;
        const moveY = (y - centerY) / centerY * 30;

        const rotateY = (x - centerX) / centerX * 170;
        const rotateX = (y - centerY) / centerY * -170;

        setTransformStyle({
            transform: `perspective(1000px) translateX(${moveX}px) translateY(${moveY}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
            transition: 'transform 0.05s ease-out',
            transformOrigin: 'center center'
        });
    };

    const handleMouseLeave = () => {
        setTransformStyle({
            transform: 'perspective(1000px) translateX(0) translateY(0) rotateY(0deg) rotateX(0deg)',
            transition: 'transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)'
        });
    };

    return(
        <Element name= "home" className= "presentacion">
            <div className="presentacion-info">
                <h2>Martin Picasarri</h2>
                <h3>Desarrollador</h3>
                <h4><span className="front-part">Front</span>end</h4>
            </div>
            <div
                className="img-p"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src="https://res.cloudinary.com/dkymtbe7c/image/upload/v1751296093/Martin_Picasarri-Photoroom_hrdtub.png"
                    alt="img"
                    className={animationClass}
                    style={transformStyle}
                />
            </div>
        </Element>
    );
};

export default Home;