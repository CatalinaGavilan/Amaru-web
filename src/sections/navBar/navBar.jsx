import "./navBar.css";
import logoAmaru from '../../assets/images/LogoAmaru1.png';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">

        <a href="#inicio" className="navbar__logo">
          <img 
            src={logoAmaru} 
            alt="Logo Amaru" 
            className="w-17 h-auto mx-auto mb-4" 
          />
        </a>

        <nav className="navbar__links">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#experiencias">Experiencias</a>
          <a href="#constelaciones">Constelaciones</a>
          <a href="#productos">Productos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <button
          className="navbar__menu-button"
          aria-label="Abrir menú"
        >
          ☰
        </button>

      </div>
    </header>
  );
}

export default Navbar;