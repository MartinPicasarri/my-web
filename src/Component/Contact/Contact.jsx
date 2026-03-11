import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { CgMail } from 'react-icons/cg';
import { CiPhone } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [animateAreaOne, setAnimateAreaOne] = useState(false);
  const [animateAreaTwo, setAnimateAreaTwo] = useState(false);

  useEffect(() => {
    if (contactInView) {
      setTimeout(() => {
        setAnimateAreaOne(true);
      }, 200);

      setTimeout(() => {
        setAnimateAreaTwo(true);
      }, 500);
    }
  }, [contactInView]);

  const validateForm = () => {
    let newErrors = {};
    if (!name) {
      newErrors.name = 'El nombre es obligatorio.';
    }
    if (!email) {
      newErrors.email = 'El email es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El email no es válido. Debe incluir un "@".';
    }
    if (!message) {
      newErrors.message = 'El mensaje es obligatorio.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (validateForm()) {
      try {
        const response = await fetch('https://formspree.io/f/xjkrozgb', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
          setSubmitStatus('success');
          setName('');
          setEmail('');
          setMessage('');
          setErrors({});
        } else {
          setSubmitStatus('error');
          const data = await response.json();
          console.error('Error de Formspree:', data.errors);
        }
      } catch (error) {
        setSubmitStatus('error');
        console.error('Error al enviar el formulario:', error);
      }
    } else {
      console.log('El formulario tiene errores.');
    }
  };

  return (
    <Element name="contact" className="contact">
      <h1>CONTACTO</h1>
      <p>No dudes en contactarme para que charlemos sobre tus ideas, tus objetivos y cómo podemos hacer realidad la página web de tus sueños.</p>
      <div className="area" ref={contactRef}>
        <div className={`areauno ${animateAreaOne ? 'animate-left' : ''}`}>
          <h4>CONTACTO</h4>
          <ul>
            <li><CgMail />martinpicasarri</li>
            <li><CiPhone />11 6562-7315</li>
            <li><CiLocationOn />Buenos Aires, Argentina</li>
          </ul>
        </div>

        <div className={`areados ${animateAreaTwo ? 'animate-right' : ''}`}>
          <h4>MENSAJE</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              title="Por favor, incluye un '@' en la dirección de correo electrónico."
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <textarea
              name="mensaje"
              className="mensaje"
              placeholder="Deja tu consulta"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}

            <input type="submit" value="ENVIAR" className="enviar" />

            {submitStatus === 'success' && <p className="success-message">¡Mensaje enviado con éxito!</p>}
            {submitStatus === 'error' && <p className="error-message">Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.</p>}
          </form>
        </div>
      </div>
    </Element>
  );
}

export default Contact;