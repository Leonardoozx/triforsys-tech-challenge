import PropTypes from 'prop-types';

import styles from '../app.module.css';

export default function ExclusiveContent({ isMobile }) {
  return (
    <>
      {!isMobile && (
        <h2 className={styles.exclusive_content_title}>CONTENIDO EXCLUSIVO</h2>
      )}

      <article className={styles.cards}>
        <section>
          <div>
            <img className='cards-width' src="https://imgur.com/e71xbjD.png" alt="book" />
            <p>E-books</p>
          </div>
          <div>
            {' '}
            <img className='cards-width' src="https://imgur.com/BvZnyYY.png" alt="360" />
            <p>360° Videos</p>
          </div>
          <div>
            <img className='cards-width' src="https://imgur.com/9GRWsvM.png" alt="check cards" />
            <p>Tests</p>
          </div>
          <div>
            <img className='cards-width' src="https://imgur.com/Aa7aQA8.png" alt="pencil" />
            <p>Tareas</p>
          </div>
        </section>
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

ExclusiveContent.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
