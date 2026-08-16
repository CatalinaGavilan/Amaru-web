import "./experiencias.css";

function Experiencias() {
  return (
    <section className="experiencias" id="experiencias">
      <div className="experiencias__container">
        <header className="experiencias__header">
          <p className="experiencias__eyebrow">Un espacio para vos</p>
          <h2 className="experiencias__title">Experiencias</h2>
          <p className="experiencias__description">
            Elegí el camino que hoy resuene con vos.
          </p>
        </header>

        <div className="experiencias__grid">
          <a href="#recorridos" className="experiencias__card recorridos">
            <span className="experiencias__card-title">Recorridos</span>
            <span className="experiencias__card-action">Conocer más →</span>
          </a>

          <a href="#rito" className="experiencias__card rito">
            <span className="experiencias__card-title">Rito del Útero</span>
            <span className="experiencias__card-action">Conocer más →</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experiencias;
