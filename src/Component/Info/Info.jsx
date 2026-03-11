import "./Info.css";
import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';

function Info() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [visibleLines, setVisibleLines] = useState(0); 
    const fullTextLines = [
        "Me llamo Martín Picasarri, soy un desarrollador front-end con varios años de experiencia en el campo, durante este tiempo, he disfrutado transformando ideas y diseños en experiencias web interactivas y atractivas.",
        "Mi pasión por el desarrollo web se centra en la constante mejora y el aprendizaje continuo.",
        "Siempre busco nuevas tecnologías, herramientas y mejores prácticas para optimizar mi código y crear soluciones más eficientes y escalables."
    ];

    useEffect(() => {
        const currentRef = sectionRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        setVisibleLines(0); 
                        observer.unobserve(entry.target); 
                    } else {
                        setIsVisible(false);
                        setVisibleLines(0);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    useEffect(() => {
        let interval;
        if (isVisible && visibleLines < fullTextLines.length) {
            interval = setInterval(() => {
                setVisibleLines((prevLines) => prevLines + 1);
            }, 500); 
        }

        return () => clearInterval(interval);
    }, [isVisible, visibleLines, fullTextLines.length]);

    return (
        <Element name="info" className="sobre-mi">
            <div ref={sectionRef}>
                <h2>SOBRE MI</h2>
                <div className="info">
                    <div className="infouno">
                        <img
                            src="https://res.cloudinary.com/dkymtbe7c/image/upload/v1773241098/pcccc_xmf1jg.png"
                            alt="mi-foto"
                            className={isVisible ? "animate-in" : ""}
                        />
                    </div>

                    <div className="infodos">
                        <h2>¡Hola!</h2>
                        {fullTextLines.map((line, index) => (
                            <p
                                key={index}
                                className={`line-animation ${index < visibleLines ? 'visible' : ''}`}
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Info;