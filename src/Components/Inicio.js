import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/Logo.png";
import { FiArrowRight } from 'react-icons/fi';
import '../Components/Inicio.css'

const Inicio = () => {
  return (
    <div className='inicio-container'>
      <Navbar />
      <div className="inicio-banner-container">
        <div className="inicio-bannerImage-container" >
            <img src={BannerBackground} alt="" /> 
        </div>
        <div className="inicio-text-section">
            <h1 className="primary-heading">
                Tu espacio para crecer como diseñador
            </h1>
            <p className="primary-text">
                Explora una plataforma creada para diseñadores como tú. Aprende de diseño con recursos de calidad, conoce experiencias reales de otros usuarios y reserva clases personalizadas con otros diseñadores.
            </p>
            <button className="secondary-button">
                Explorar Recursos <FiArrowRight />
            </button>
        </div>
        <div className="inicio-image-container">
            <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Inicio