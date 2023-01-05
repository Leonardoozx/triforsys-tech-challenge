import styles from '../styles/footer.module.css';

export default function Footer({ isMobile }) {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.title}>ÚNETE A LA COMUNIDAD</h3>
      <div className={styles.cards_container}>
        <a
          href="https://www.facebook.com/somosUnycos/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="cards-width"
            src="https://imgur.com/E9uAFoz.png"
            alt="facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/unycos_com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="cards-width"
            src="https://imgur.com/h17xrVU.png"
            alt="instagram"
          />
        </a>
        <a
          href="https://twitter.com/unycos_com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="cards-width"
            alt="twitter"
            src="https://imgur.com/oMIC6R6.png"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCVZBWcLu24xdANe9zpPn2FQ"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="cards-width"
            src="https://imgur.com/F1QgoMc.png"
            alt="youtube"
          />
        </a>
        {!isMobile && <hr />}
      </div>
      <div className={styles.whatsapp_container}>
        <h3>¿Dudas? Contáctanos por whatsapp</h3>
        <a
          className="btn btn-bg-black"
          href=" https://wa.me/34653467360"
          target="_blank"
        >
          +34 653 46 73 60
        </a>
      </div>
      <div className={styles.footer_logo_container}>
        <div className={styles.terminos_y_condiciones}>
          <p className="c-grey">Terminos y condiciones</p>
          <p className="c-grey">Política de privacidad</p>
          <p className="c-grey">Aviso legal</p>
        </div>

        <div className={styles.footer_logo}>
          <img
            className={styles.logo}
            src="https://imgur.com/VHl5C3y.png"
            alt="unycos"
          />
          <div>
            <span>USD ($)</span>
            <span className="c-grey"> / </span>
            <span>EUR (€)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
