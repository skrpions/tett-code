import './App.css'
import movie from './assets/movie-home2.mp4'
import thumbnailVideo from './assets/sliders/plus.png'; // Reemplaza con la ruta real de la imagen estática
import img1 from './assets/sliders/skills.jpg'
import img2 from './assets/sliders/img-skills.jpg'
import img3 from './assets/sliders/img-citobot.png'
import img4 from './assets/sliders/img-ecco5.jpg'
import img5 from './assets/sliders/img-avigan.jpg'
import img6 from './assets/sliders/img-biclapp.jpg'
import logoImage from './assets/scorpio.png'; // Ajusta la ruta y el nombre del archivo según tu estructura

import React, { useEffect, useRef, useState } from 'react';


function App() {

  const [prev] = useState('<');
  const [next] = useState('>');
  const [runTimeOut, setRunTimeOut] = useState(null);
  const [runNextAuto, setRunNextAuto] = useState(null);
  const [timeRunning, setTimeRunning] = useState(3000); // Definir el valor inicial
  const [timeAutoNext, setTimeAutoNext] = useState(7000);


  const content = [
    {
      feature: "PERFIL",
      title: "NESTOR MARTÍNEZ",
      subtitle: "",
      description: "",
      media: <video src={movie} autoPlay muted loop />,
    },
    {
      feature: "",
      title: "SKILLS",
      subtitle: "",
      description: "",
      media: <img src={img1} alt="Image 1" />,
    },
    {
      feature: "PROYECTO",
      title: "SKILLS INVENTORY",
      subtitle: "Talento Digital",
      description: "",
      media: <img src={img2} alt="Image 2" />,
    },
    {
      feature: "PROYECTO",
      title: "CITOBOT",
      subtitle: "Salud Digital",
      description: "",
      media: <img src={img3} alt="Image 3" />,
    },
    {
      feature: "PROYECTO",
      title: "ECCO",
      subtitle: "Entrenamiento Online",
      description: "",
      media: <img src={img4} alt="Image 4" />,
    },
    {
      feature: "PROYECTO",
      title: "AVIGAN CLOUD",
      subtitle: "Ganadería Digital",
      description: "",
      media: <img src={img5} alt="Image 5" />,
    },
    {
      feature: "PROYECTO",
      title: "BICLAPP",
      subtitle: "Seguridad Digital",
      description: "",
      media: <img src={img6} alt="Image 5" />,
    },
  ];

  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    // Acceso al DOM en useEffect
    if (
      carouselRef.current &&
      sliderRef.current &&
      thumbnailBorderRef.current &&
      timeRef.current
    ) {
      const carouselDom = carouselRef.current;
      const sliderDom = sliderRef.current;
      const thumbnailBorderDom = thumbnailBorderRef.current;
      const timeDom = timeRef.current;

      // Configurar variables de tiempo
      let timeAutoNext = 7000;

      setRunTimeOut(
        setTimeout(() => {
          carouselDom.classList.remove('next');
          carouselDom.classList.remove('prev');
        }, timeRunning)
      );

      setRunNextAuto(
        setTimeout(() => {
          nextClick();
        }, timeAutoNext)
      );

      // Por ejemplo, añadir el primer elemento de los thumbnails al final
      thumbnailBorderDom.appendChild(thumbnailBorderDom.children[0]);
    }
  }, []); // El segundo argumento [] garantiza que useEffect se ejecute solo una vez después del montaje inicial

  const nextClick = () => {
    showSlider('next');
  };

  const prevClick = () => {
    showSlider('prev');
  };

  const showSlider = (type) => {
    if (
      carouselRef.current &&
      sliderRef.current &&
      thumbnailBorderRef.current
    ) {
      const carouselDom = carouselRef.current;
      const sliderDom = sliderRef.current;
      const thumbnailBorderDom = thumbnailBorderRef.current;

      let SliderItemsDom = Array.from(sliderDom.children);
      let thumbnailItemsDom = Array.from(thumbnailBorderDom.children);

      if (type === 'next') {
        sliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        sliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }

      clearTimeout(runTimeOut);
      setRunTimeOut(
        setTimeout(() => {
          carouselDom.classList.remove('next');
          carouselDom.classList.remove('prev');
        }, timeRunning)
      );

      clearTimeout(runNextAuto);
      setRunNextAuto(
        setTimeout(() => {
          nextClick();
        }, timeAutoNext)
      );
    }
  };


  return (
    <>
      <header>
        <nav>
          {/* <a href="">Inicio</a>
          <a href="">Contactos</a>
          <a href="">Información</a> */}
          <div className="logo-container">
            <img src={logoImage} alt="Logo de Mi Aplicación" className="logo-image" />
          </div>
        </nav>
      </header>

      <div ref={carouselRef} className="carousel">
        <div ref={sliderRef} className="list">
          {content.map((item, index) => (
            <div key={index} className="item">
              {item.media}
              <div className="content">
                <div className="feature">{item.feature}</div>
                <div className="title">{item.title}</div>
                <div className="subtitle">{item.subtitle}</div>
                <div className="description">{item.description}</div>
                <div className="buttons">
                  <button>Let’s Connect</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={thumbnailBorderRef} className="thumbnail">
          {content.map((item, index) => (
            <div key={index} className="item">
              {item.feature === "PERFIL" ? (
                <>
                  {/* <video src={movie} autoPlay muted loop /> */}
                  <img src={thumbnailVideo} alt={`Thumbnail ${index + 1}`} />
                </>
              ) : (
                <img src={item.media.props.src} alt={`Thumbnail ${index + 1}`} />
              )}
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="feature">{item.feature}</div>
              </div>
            </div>
          ))}
        </div>


        <div className="arrows">
          <button onClick={prevClick}>{prev}</button>
          <button onClick={nextClick}>{next}</button>
        </div>
      </div>
    </>
  );
}

export default App