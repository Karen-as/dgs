import React, { useState } from "react";
import "../Components/Contacto.css";
import AboutBackground from "../Assets/about-background.png"; // Asegúrate de que esta imagen esté bien importada

const Contacto = () => {
  const [formEnviado, setFormEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setFormEnviado(true);
    e.target.reset();
  };

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="Fondo de contacto" />
      </div>
      <div className="contacto-page-wrapper">
        <h1 className="primary-subheading">¿Tienes alguna sugerencia?</h1>
        <h1 className="primary-heading">Déjanos saberlo, nuestro equipo lo valorará mucho</h1>

        <form
          onSubmit={manejarEnvio}
          action="https://formspree.io/f/xjkwkzev"
          method="POST"
          className="contacto-form-container"
        >
          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje aquí..."
            rows="4"
            required
            className="contacto-textarea"
          />
          <button type="submit" className="secondary-button">Enviar</button>
        </form>

        {formEnviado && (
          <p className="mensaje-exito">¡Gracias por enviar tu mensaje!</p>
        )}
      </div>
    </div>
  );
};

export default Contacto;
