import React from "react";
import Navbar from "../Components/Navbar";

import Slider from "react-slick"; // Asegúrate de tener instalada la librería: npm install react-slick slick-carousel

// Estilos necesarios para el slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HerramientasPag = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const card = (title, link) => (
    <div className="slider-card" onClick={() => window.open(link, "_blank")}>
      <div className="card-content">
        <h4>{title}</h4>
        <p>Haz clic para explorar</p>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="aprende-page">

        {/* Banner */}
        <section className="banner-aprende">
          <h1>2. Aprende</h1>
          <p>
            Accede a contenidos educativos para fortalecer tus habilidades en diferentes áreas del diseño, 
            con recursos prácticos, tutoriales y experiencias reales.
          </p>
        </section>

        {/* Subsección: Diseño Gráfico */}
        <section className="subseccion">
          <h2>2.1 Diseño Gráfico</h2>
          <p>
            Domina la composición visual, el diseño editorial, la creación de marcas y el uso de herramientas clave como Photoshop e Illustrator.
          </p>
          <Slider {...settings}>
            {card("Curso Photoshop", "https://example.com")}
            {card("Branding Básico", "https://example.com")}
            {card("Diseño Editorial", "https://example.com")}
            {card("Tipografía Avanzada", "https://example.com")}
            {card("Guía de Illustrator", "https://example.com")}
          </Slider>
        </section>

        {/* Subsección: Diseño Audiovisual */}
        <section className="subseccion">
          <h2>2.2 Diseño Audiovisual</h2>
          <p>
            Aprende a crear piezas audiovisuales con impacto. Explora edición de video, animación y narrativas visuales con herramientas como Premiere y After Effects.
          </p>
          <Slider {...settings}>
            {card("Edición con Premiere", "https://example.com")}
            {card("Animación Básica", "https://example.com")}
            {card("Narrativa Visual", "https://example.com")}
            {card("After Effects Tutorial", "https://example.com")}
            {card("Motion Graphics", "https://example.com")}
          </Slider>
        </section>

        {/* Subsección: Color y Tipografía */}
        <section className="subseccion">
          <h2>2.3 Color y Tipografía</h2>
          <p>
            Comprende cómo el color y las fuentes afectan la comunicación visual. Aprende a combinarlos estratégicamente para reforzar tus diseños.
          </p>
          <Slider {...settings}>
            {card("Teoría del Color", "https://example.com")}
            {card("Psicología del Color", "https://example.com")}
            {card("Combinación Tipográfica", "https://example.com")}
            {card("Tipografías Web", "https://example.com")}
            {card("Color en Marca", "https://example.com")}
          </Slider>
        </section>

      </div>
    </>
  );
};

export default HerramientasPag;
