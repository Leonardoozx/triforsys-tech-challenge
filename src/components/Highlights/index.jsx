import styles from './highlights.module.css';

export default function Highlights({ isMobile }) {
  return (
    <>
      <h3 className={styles.highlights_title}>DESTAQUES DEL CURSO</h3>

      <section className={styles.highlights}>
        <div>
          <h3>03</h3>
          <p className="c-grey">Bases biomecánicas de la natación</p>
          <button onClick={() => alert('more info')}>
            <img src="https://imgur.com/kqpjTVI.png" alt="arrow" />
          </button>
        </div>
        <div>
          <h3>06</h3>
          <p className="c-grey">Preparación física</p>
          <button onClick={() => alert('more info')}>
            <img src="https://imgur.com/kqpjTVI.png" alt="arrow" />
          </button>
        </div>
        <div>
          <h3>08</h3>
          <p className="c-grey">Nutrición y sumplementos</p>
          <button onClick={() => alert('more info')}>
            <img src="https://imgur.com/kqpjTVI.png" alt="arrow" />
          </button>
        </div>
        <div>
          <h3>11</h3>
          <p className="c-grey">Análisis de competición</p>
          <button onClick={() => alert('more info')}>
            <img src="https://imgur.com/kqpjTVI.png" alt="arrow" />
          </button>
        </div>
      </section>
      {isMobile && (
        <button
          className="btn btn-bg-black"
          onClick={() => alert('see all the program')}
        >
          VER PROGRAMA COMPLETO
        </button>
      )}
    </>
  );
}
