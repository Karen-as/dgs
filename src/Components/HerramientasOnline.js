import React from "react";
import '../Components/HerramientasOnline.css';



const herramientas = [
  { nombre: "Mockups", link: "/mockups" },
  { nombre: "Editor Imágenes", link: "/editor-imagenes" },
  { nombre: "Creador Logos", link: "/creador-logos" },
  { nombre: "Convertidor Archivos", link: "/convertidor-archivos" },
  { nombre: "Tipografía", link: "/tipografia" },
  { nombre: "Colores", link: "/colores" },
];

const HerramientasOnline = () => {
  return (
    

    <div className="herramientas-section-wrapper">
      <div className="herramientas-content">
        <div className="herramientas-cards">
          {herramientas.map((herramienta, index) => (
            <a 
              key={herramienta.nombre}
              href={herramienta.link}
              className={`herramienta-card posicion-${index}`}
            >
              <span className="herramienta-text">{herramienta.nombre}</span>
            </a>
          ))}
        </div>
        <div className="herramientas-text">
          <p className="primary-subheading">Herramientas Online</p>
          <h1 className="primary-heading">Potencia tu creatividad</h1>
          <p className="primary-text">
            Explora herramientas online diseñadas para facilitar tus proyectos de diseño. Desde crear mockups profesionales hasta editar imágenes o convertir archivos fácilmente.
          </p>
          <button className="secondary-button">
            Ver todas las herramientas
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default HerramientasOnline;
