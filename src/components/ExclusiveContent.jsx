import styles from '../app.module.css';

export default function ExclusiveContent({ isMobile }) {
  return (
    <>
      {!isMobile && (
        <h2 className={styles.exclusive_content_title}>CONTENIDO EXCLUSIVO</h2>
      )}

      <article className={styles.cards}>
        <div>
          <img src="https://imgur.com/e71xbjD.png" alt="book" />
          <img src="https://imgur.com/BvZnyYY.png" alt="360" />
          <img src="https://imgur.com/9GRWsvM.png" alt="check cards" />
          <img src="https://imgur.com/Aa7aQA8.png" alt="pencil" />
        </div>
        {!isMobile ? (
          <button
            onClick={() => console.log('MORE INFORMATION')}
            className="btn"
          >
            MAS INFROMACIÓN
          </button>
        ) : (
          <></>
        )}
      </article>
    </>
  );
}
