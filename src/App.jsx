import './App.css'
import logoImage from './assets/scorpio.png';
import Carousel from './Carousel';

function App() {


  return (
    <>
      <header>
        <nav>
          {/* <a href="">Inicio</a>
          <a href="">Contactos</a>
          <a href="">Información</a> */}
          <div className="logo-container">

            <div className="social-icons">
              <a href="URL_DE_TU_PERFIL_DE_LINKEDIN" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-camera-retro"></i> fa-camera-retro
              </a>
              <a href="URL_DE_TU_PERFIL_DE_GITHUB" target="_blank" rel="noopener noreferrer">
                G
              </a>
            </div>

            <img src={logoImage} className="logo-image" />
          </div>
        </nav>
      </header>

      <Carousel />
    </>
  );
}

export default App