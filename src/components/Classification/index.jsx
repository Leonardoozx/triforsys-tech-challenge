import styles from './classification.module.css'

export default function Classification() {
  return (
    <section className={styles.classification}>
    <div>
      <img
        className="cards-width"
        src="https://imgur.com/6rMRbGY.png"
        alt="star"
      />
      <p>
        LOS ESTUDAINTES LE DAN A UNYCOS UNA CALFICACIÓN PROMEDIO DE 4.7 DE 5
        ESTRELLAS.
      </p>
    </div>
    <p className="c-grey">
      100% de garantia de satisfacción. 30 días de garantia de devolución de
      dinero.
    </p>
  </section>

  )
}