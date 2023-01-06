import styles from './studentsComments.module.css';

export default function StudentsComments() {
  return (
    <section className={styles.students_comments_section}>
      <h2>COMENTARIOS DE LOS ESTUDIANTES</h2>
      <span className={styles.c_gold}>98.7% DE VALORACIONES POSITIVAS</span>
      <span className="c-grey"> / TOTAL DE 726 VALORACIONES</span>
      <section>
        <div className={styles.comments_container}>
          <img
            className={styles.students_pics}
            src="https://imgur.com/utuygmQ.png"
            alt="profile"
          />
          <section className={styles.comments_content_container}>
            <div>
              <p>SAMUEL VIDAL</p>
              <img src="https://imgur.com/fMuWAwv.png" alt="thumbs up" />
              <span className="c-grey">- hace 2 meses</span>
            </div>
            <p>
              Ha sido un curso muy gratificante,en el que he podido aprender
              muchas cosas gracias a los grandes ponentes que han colaborado y
              aportado sus conocimientos. Ahora toca ponerse manos a la obra y
              poner en practica todo lo aprendido. Estoy muy orgulloso.
            </p>
          </section>
        </div>
        <hr />
        <div className={styles.comments_container}>
          <img
            className={styles.students_pics}
            src="https://imgur.com/JepEto3.png"
            alt="profile"
          />
          <section className={styles.comments_content_container}>
            <div>
              <p>FRANCISCO JOSÉ SACEDO</p>
              <img src="https://imgur.com/fMuWAwv.png" alt="thumbs up" />
              <span className="c-grey">- hace 3 meses</span>
            </div>
            <p>
              Seguir creciendo como profesional es necesario pero si lo haces
              junto a tus ídolos se convierte en un placer. Gracias por esta
              experiencia y espero poder comentarlo en persona con sus
              protagonistas muy pronto.
            </p>
            <hr/>
            <div>
              <img
                className={styles.verified_pic}
                src="https://imgur.com/xaCUIe9.png"
                alt="verified"
              />
              <p>Equipo Unycos</p>
              <span className="c-grey"> - hace 3 meses</span>
            </div>
          </section>
        </div>
        <hr />
        <div className={styles.comments_container}>
          <img
            className={styles.students_pics}
            src="https://imgur.com/FT0DPEG.png"
            alt="profile"
          />
          <section className={styles.comments_content_container}>
            <div>
              <p>ANA MILENE GÓMEZ</p>
              <img src="https://imgur.com/fMuWAwv.png" alt="thumbs up" />
              <span className="c-grey">- hace 3 meses</span>
            </div>
            <p>Profundizar en el entrenamiento y proceso de enseñanza</p>
            <hr/>
            <div>
              <img
                className={styles.verified_pic}
                src="https://imgur.com/xaCUIe9.png"
                alt="verified"
              />
              <p>Equipo Unycos</p>
              <span className="c-grey"> - hace 3 meses</span>
            </div>
          </section>
        </div>
        <hr />
      </section>
    </section>
  );
}
