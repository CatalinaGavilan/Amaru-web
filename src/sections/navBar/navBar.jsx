import "./navBar.css";


function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">

        <a href="#inicio" className="navbar__logo">
          Amaru
        </a>

        <nav className="navbar__links">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#Experiencias">Experiencias</a>
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