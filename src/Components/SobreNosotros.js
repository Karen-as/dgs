import React from 'react'
import SobreNosotrosBackground from "../Assets/about-background.png";
import SobreNosotrosBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';


  
const SobreNosotros = () => {
  return (
  <div  className="about-section-container">
    <div className="about-background-image-container">
        <img src={SobreNosotrosBackground} alt="" />
    </div>
    <div className="about-section-image-container">
        <img src={SobreNosotrosBackgroundImage} alt="" />
    </div>
    <div className="about-section-text-container">
        <p className="primary-subheading" >Sobre Nosotros</p>
        <h1 className="primary-heading">
            Tituelo de la segunda seccion de la pagina de inicio 
        </h1>
        <p className="primary-text">
            texto acompañante de la segunda seccion de inicio
        </p>
        <p className="primary-text">
             segundo parrafo texto acompañante de la segunda seccion de inicio
        </p>
        <div className="about-buttons-container">
            <button className="secondary-button" >Learn more</button>
            <button className="watch-video-button"> 
                {""} 
                <BsFillPlayCircleFill /> mira el video
            </button>
        </div>
    </div> 
    </div>
  );
};

export default SobreNosotros