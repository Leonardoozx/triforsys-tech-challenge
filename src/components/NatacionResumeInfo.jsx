import PropTypes from 'prop-types';

import '../styles/natacionResumeInfo.css';

export default function NatacionResumeInfo({ isMobile }) {
  return (
    <section className="natacion-resumme-container">
      <div>
        <figure>
          <img
            className="cards-width"
            src="https://imgur.com/LXAdKit.png"
            alt="12 módulos"
          />
          <figcaption>12 MÓDULOS</figcaption>
        </figure>

        <figure>
          <img
            className="cards-width"
            src="https://imgur.com/djqTJbV.png"
            alt="+3.5 horas"
          />
          <figcaption>+3.5 HORAS</figcaption>
        </figure>
      </div>

      <button
        onClick={() =>
          console.log(isMobile ? 'SOLICITAR INFORMACIÓN' : 'MAS INFORMACIÓN')
        }
        type="button"
        className="btn"
      >
        {isMobile ? 'SOLICITAR INFORMACIÓN' : 'MAS INFORMACIÓN'}
      </button>

      {isMobile && <h3>APRENDE NATACIÓN CON UNA CAMPEONA OLÍMPICA</h3>}
    </section>
  );
}

NatacionResumeInfo.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
