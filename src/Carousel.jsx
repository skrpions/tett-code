import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import movie from './assets/movie.mp4';
import thumbnailVideo from './assets/sliders/plus.png';
import img1 from './assets/sliders/skills.jpg';
import img2 from './assets/sliders/img-skills.jpg';
import img3 from './assets/sliders/img-citobot.png';
import img4 from './assets/sliders/img-ecco5.jpg';
import img5 from './assets/sliders/img-avigan.jpg';
import img6 from './assets/sliders/img-biclapp.jpg';
import img7 from './assets/sliders/img-sercor.jpg';
import img8 from './assets/sliders/img-estudio.jpg';
import img9 from './assets/sliders/img-misak.png';

const Carousel = () => {
    const [prev] = useState('<');
    const [next] = useState('>');
    const [runTimeOut, setRunTimeOut] = useState(null);
    const [runNextAuto, setRunNextAuto] = useState(null);
    const [timeRunning, setTimeRunning] = useState(3000); // Definir el valor inicial
    const [timeAutoNext, setTimeAutoNext] = useState(7000);

    const content = [
        {
            feature: "INTRO",
            title: "NESTOR MARTÍNEZ",
            subtitle: "",
            description: "",
            media: <video src={movie} autoPlay muted loop />,
        },
        {
            feature: "PERFIL",
            title: "NESTOR MARTÍNEZ",
            subtitle: "FULL STACK WEB DEVELOPER",
            description: "Experiencias de usuario perfectas para potenciar la transformación digital",
            media: <img src={img1} />,
        },
        {
            feature: "PROYECTO",
            title: "SKILLS INVENTORY",
            subtitle: "Talento",
            description: "",
            media: <img src={img2} />,
        },
        {
            feature: "PROYECTO",
            title: "CITOBOT",
            subtitle: "Salud",
            description: "",
            media: <img src={img3} />,
        },
        {
            feature: "PROYECTO",
            title: "ECCO",
            subtitle: "Deporte",
            description: "",
            media: <img src={img4} />,
        },
        {
            feature: "PROYECTO",
            title: "AVIGAN CLOUD",
            subtitle: "Ganadería",
            description: "",
            media: <img src={img5} />,
        },
        {
            feature: "PROYECTO",
            title: "BICLAPP",
            subtitle: "Seguridad",
            description: "",
            media: <img src={img6} />,
        },
        {
            feature: "PROYECTO",
            title: "SERCOR",
            subtitle: "Agricultura",
            description: "",
            media: <img src={img7} />,
        },
        {
            feature: "PROYECTO",
            title: "ESTUDIO BF",
            subtitle: "Moda",
            description: "",
            media: <img src={img8} />,
        },
        {
            feature: "PROYECTO",
            title: "MISAK UNIVERSIDAD",
            subtitle: "Educación",
            description: "",
            media: <img src={img9} />,
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

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/3105338818', '_blank');
    };


    return (
        <>
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
                                    <button type='button' onClick={handleWhatsAppClick}>Conectémonos</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div ref={thumbnailBorderRef} className="thumbnail">
                    {content.map((item, index) => (
                        <div key={index} className="item">
                            {item.feature === "INTRO" ? (
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
};

export default Carousel;