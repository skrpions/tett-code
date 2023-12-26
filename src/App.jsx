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
            <img src={logoImage} className="logo-image" />
          </div>
        </nav>
      </header>

      <Carousel />
    </>
  );
}

export default App