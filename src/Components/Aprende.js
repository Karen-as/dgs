import React from "react";
import DisenoGrafico from "../Assets/pick-meals-image.png";
import DisenoAudiovisual from "../Assets/choose-image.png";
import ColorTipografia from "../Assets/delivery-image.png";
import '../Components/Aprende.css'

const Aprende = () => {
  const aprendeInfoData = [
    {
      image: DisenoGrafico,
      title: "Diseño Gráfico",
      text: "Crea imágenes, marcas y composiciones que impacten.",
    },
    {
      image: DisenoAudiovisual,
      title: "Diseño Audiovisual",
      text: "Domina la edición, la animación y el storytelling visual.",
    },
    {
      image: ColorTipografia,
      title: "Color y Tipografía",
      text: "Aprende a elegir paletas y fuentes que comuniquen mejor.",
    },
  ];
  return (
    <div className="aprende-section-wrapper">
      <div className="aprende-section-top">
        <p className="primary-subheading">Aprende</p>
        <h1 className="primary-heading">Explora el mundo del diseño creativo</h1>
        <p className="primary-text">
        Descubre cursos, técnicas y conocimientos esenciales para potenciar tu talento en diseño gráfico y audiovisual. Aprende a tu ritmo, comparte experiencias y lleva tus ideas al siguiente nivel.
        </p>
      </div>
      <div className="aprende-section-bottom">
        {aprendeInfoData.map((data) => (
          <div className="aprende-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aprende;