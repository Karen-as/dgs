import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./AprendePag.css";
import roomImage from "../Assets/room.jpg";

// Nueva sección de recursos
const recursos = [
  {
    titulo: "Diseño Gráfico",
    descripcion: "Explora herramientas y principios para potenciar tu diseño visual.",
    link: "https://tulink1.com"
  },
  {
    titulo: "Diseño Audiovisual",
    descripcion: "Conoce recursos clave para producción de video y contenido multimedia.",
    link: "https://tulink2.com"
  },
  {
    titulo: "Tipografía y Color",
    descripcion: "Aprende a combinar fuentes y paletas que comuniquen con impacto.",
    link: "https://tulink3.com"
  }
];

const AprendePag = () => {
  return (
    <>
      <Navbar />
      <div className="interior-section">
        <div className="text-content">
          <h2>Explora, Aprende y Diseña</h2>
          <p>
            Bienvenido a la sección Aprende. Aquí encontrarás recursos esenciales
            para potenciar tu creatividad. Navega por nuestras categorías y lleva
            tus ideas al siguiente nivel.
          </p>
          <div className="features">
            <ul>
              <li>Aprede de Diseño Gráfico</li>
              <li>Descubre la producción Audiovisula</li>
              <li>Comprende la tipografía y el color</li>
            </ul>
          </div>
        </div>
        <div className="image-content">
          <div className="image-box">
            <img src={roomImage} alt="Recurso visual" />
          </div>
        </div>
      </div>

      {/* Nueva sección con fondo amarillo y tarjetas */}
      <section className="seccion-recursos">
        {recursos.map((item, index) => (
          <div
            key={index}
            className={`recurso-bloque ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            
            <div className="recurso-info">
              <h2>Diseño Gráfico</h2>
              <p>{item.descripcion}</p>
            </div>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="recurso-card"
            >
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
            </a>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default AprendePag;
