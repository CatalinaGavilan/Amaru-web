import "./inicio.css"
import logoAmaru from '../../assets/images/amaru-logoSolo.jpeg';

function Inicio() {
  return (
    <section className="inicio" id="inicio">
      <div className="inicio__content">

        <img 
          src={logoAmaru} 
          alt="Logo Amaru" 
          className="w-32 h-auto mx-auto mb-4" 
        />

        <link rel="icon" type="image/jpeg" href="/public/amaru-logo.jpeg" />
        <h1 className="inicio__title">
          AMARU DEL ALMA
        </h1>
        
        <p className="inicio__eyebrow">
          Experiencias ♥︎ Rituales ♥︎ Constelaciones
        </p>

        <p className="inicio__description">
          Las respuestas siempre estuvieron en tu interior. <br />
          Nosotros sólo te acompañamos a recordarlas.
        </p>

        <a href="#sobre-mi" className="inicio__button">
          Conocé Amaru
        </a>
      </div>
    </section>
  );
}

export default Inicio;