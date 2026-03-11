import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import "./Proyect.css";

const proyectDetails = {
  1: {
    title: "ONE-PAGE",
    content: <p>Esta pagina esta dedicada a Lazo de Amor, busca brindar informacion sobre el agua de kefir y vender la misma </p>,
    imageUrl: "https://res.cloudinary.com/dkymtbe7c/image/upload/v1750343585/Website_About_Agua_De_Kefir_avxwbs.png",
    link: "https://lazode-amor-89zf.vercel.app/"
  },
  2: {
    title: "ECOMMERCE",
    content: <p>Este proyecto es una simulación de una hamburguesería online donde los usuarios pueden explorar el menú, agregar productos al carrito y realizar un pedido.</p>,
    imageUrl: "https://res.cloudinary.com/dkymtbe7c/image/upload/v1750344170/Big_Burguer_Online_Registration_Form_ikxjhu.png",
    link: "https://hamburgueseria-muga-7oc5tupuf-martinpicasarris-projects.vercel.app/index.html"
  },
  3: {
    title: "WEBSITE",
    content: <p>Presenta información sobre Ágora, tienda de ropa inventada, permite al usuario registrarse/iniciar sesion y pedir ropa de manera online</p>,
    imageUrl: "https://res.cloudinary.com/dkymtbe7c/image/upload/v1759931148/Captura_de_pantalla_2025-10-08_104426_hefpyo.png",
    link: "https://agora-quyl.vercel.app/"
  },
};

const Proyect = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [animatedCards, setAnimatedCards] = useState({});

  useEffect(() => {
    if (inView) {
      [1, 2, 3].forEach((index, i) => {
        setTimeout(() => {
          setAnimatedCards((prev) => ({ ...prev, [index]: true }));
        }, i * 500); 
      });
    }
  }, [inView]);

  return (
    <Element name="proyects" className="proyects">
      <div ref={ref} style={{ width: '100%', height: '100%' }}>
        <h2>MIS PROYECTOS</h2>
        <div className="container-card">
          {[1, 2, 3].map((index) => (
            <div
              className={`card ${animatedCards[index] ? 'animate' : ''}`}
              key={index}
            >
              <figure>
                <img
                  src={proyectDetails[index].imageUrl}
                  alt={`Imagen del proyecto ${proyectDetails[index].title}`}
                />
              </figure>
              <div className="contenido-card">
                <h3>{proyectDetails[index].title}</h3>
                {proyectDetails[index].content}
                <a
                  href={proyectDetails[index].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Proyect;