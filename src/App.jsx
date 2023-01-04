import { useEffect, useState } from 'react';
import Header from './components/Header';
import NatacionResumeInfo from './components/NatacionResumeInfo';
import OnlyMobileSection from './components/OnlyMobileSection';
import Slider from './components/Slider';

import './styles/base.css';
import './styles/app.css';
import Form from './components/Form';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 720) return setIsMobile(true);
    setIsMobile(false);
  }, []);

  return (
    <main>
      <Header />
      <article className="main-img-container">
        <img
          src={
            isMobile
              ? 'https://imgur.com/S55Ipc2.png'
              : 'https://imgur.com/c849jat.png'
          }
          alt="woman swimming"
        />
      </article>

      <NatacionResumeInfo isMobile={isMobile} />

      {!isMobile && <h2>CONTENIDO EXCLUSIVO</h2>}

      {isMobile && <OnlyMobileSection />}

      <Slider />

      <article className="cards">
        <img src="https://imgur.com/e71xbjD.png" alt="book" />
        <img src="https://imgur.com/BvZnyYY.png" alt="360" />
        <img src="https://imgur.com/9GRWsvM.png" alt="check cards" />
        <img src="https://imgur.com/Aa7aQA8.png" alt="pencil" />

        {!isMobile && <button>MAS INFROMACIÓN</button>}
      </article>

      <h3 className="highlights-title">DESTAQUES DEL CURSO</h3>

      <section className="highlights">
        <div>
          <h3>03</h3>
          <p className="c-grey">Bases biomecánicas de la natación</p>
          <button onClick={() => console.log('More info')}>
            <img src="https://imgur.com/kqpjTVI.png" alt="arrow" />
          </button>
        </div>
        <div>
          <h3>06</h3>
          <p className="c-grey">Preparación física</p>
          <button onClick={() => console.log('More info')}>
            <img src="https://imgur.com/kqpjTVI.png" alt="arrow" />
          </button>
        </div>
        <div>
          <h3>08</h3>
          <p className="c-grey">Nutrición y sumplementos</p>
          <button onClick={() => console.log('More info')}>
            <img src="https://imgur.com/kqpjTVI.png" alt="arrow" />
          </button>
        </div>
        <div>
          <h3>11</h3>
          <p className="c-grey">Análisis de competición</p>
          <button onClick={() => console.log('More info')}>
            <img src="https://imgur.com/kqpjTVI.png" alt="arrow" />
          </button>
        </div>
      </section>
      <button className="btn bg-black">VER PROGRAMA COMPLETO</button>

      <section className="classification">
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


      <Form />

      {!isMobile && (
        <>
          <h2>LESSON PLAN</h2>

          <div>
            <ul>
              <li>
                <h1>01</h1>
                <h3>PRESENTACIÓN</h3>
                <p>
                  Mireia, nuestra campeona, te da la bienvenida al curso que te
                  llevará a la cima de la natación. Conocerás su técnica, su
                  entrenamiento y muchas cosas más de la mano de un equipo de
                  profesionales de fama internacional.
                </p>
              </li>
              <hr />
              <li>
                <h1>02</h1>
                <h3>NATACIÓN: ASPECTOS GENERALES</h3>
                <p>
                  Mireia es una luchadora. Su afán de superación y su
                  preparación tanto física como mental la han llevado a lo más
                  alto en un deporte que para ella es un estilo de vida. Conoce
                  de la mano de nuestra deportista de élite los beneficios de
                  esta disciplina.
                </p>
              </li>
              <hr />
              <li>
                <h1>03</h1>
                <h3>BASES BIOMECÁNICAS DE LA NATACIÓN</h3>
                <p>
                  Mireia es una luchadora. Su afán de superación y su
                  preparación tanto física como mental la han llevado a lo más
                  alto en un deporte que para ella es un estilo de vida. Conoce
                  de la mano de nuestra deportista de élite los beneficios de
                  esta disciplina.
                </p>
              </li>
              <hr />
              <li>
                <h1>04</h1>
                <h3>BASES BIOMECÁNICAS DE LA NATACIÓN</h3>
                <p>
                  Una perfecta ejecución de estos estilos, unida al control y a
                  la resistencia, te permitirá convertirte en un nadador
                  interdisciplinar. Mireia y su equipo te enseñarán las claves y
                  los secretos para dominarlos todos desde cero.
                </p>
              </li>
              <hr />
              <li>
                <h1>05</h1>
                <h3>VIAJRES Y SALTOS</h3>
                <p>
                  Una perfecta ejecución de estos estilos, unida al control y a
                  la resistencia, te permitirá convertirte en un nadador
                  interdisciplinar. Mireia y su equipo te enseñarán las claves y
                  los secretos para dominarlos todos desde cero.
                </p>
              </li>
              <hr />
            </ul>
            <button type="button">VER TODOS</button>
          </div>

          <h2>MÁS CURSOS</h2>

          {/* <img src="https://imgur.com/K27y6Cy.png" alt="MÁS CURSOS" /> */}

          <h2>OBTÉN MÁS INFORMACIÓN</h2>

          <div>
            <h2>COMENTARIOS DE LOS ESTUDIANTES</h2>
            <h3>98.7% DE VALORACIONES POSITIVAS</h3>
            <span> / TOTAL DE 726 VALORACIONES</span>
            <ul>
              <li>
                <figure>
                  <img src="https://imgur.com/utuygmQ.png" alt="profile" />
                  <figcaption>SAMUEL VIDAL</figcaption>
                  <span>
                    <img src="https://imgur.com/fMuWAwv.png" alt="thumbs up" />{' '}
                    - hace 2 meses
                  </span>
                </figure>
                <p>
                  Ha sido un curso muy gratificante,en el que he podido aprender
                  muchas cosas gracias a los grandes ponentes que han colaborado
                  y aportado sus conocimientos. Ahora toca ponerse manos a la
                  obra y poner en practica todo lo aprendido. Estoy muy
                  orgulloso.
                </p>
              </li>
              <hr />
              <li>
                <figure>
                  <img src="https://imgur.com/JepEto3.png" alt="profile" />
                  <figcaption>FRANCISCO JOSÉ SACEDO</figcaption>
                  <span>
                    <img src="https://imgur.com/fMuWAwv.png" alt="thumbs up" />{' '}
                    - hace 3 meses
                  </span>
                </figure>
                <p>
                  Seguir creciendo como profesional es necesario pero si lo
                  haces junto a tus ídolos se convierte en un placer. Gracias
                  por esta experiencia y espero poder comentarlo en persona con
                  sus protagonistas muy pronto.
                </p>
                <figure>
                  <img src="https://imgur.com/xaCUIe9.png" alt="verified" />
                  <figcaption>Equipo Unycos</figcaption>
                  <span> - hace 3 meses</span>
                </figure>
              </li>
              <hr />
              <li>
                <figure>
                  <img src="https://imgur.com/FT0DPEG.png" alt="profile" />
                  <figcaption>ANA MILENE GÓMEZ</figcaption>
                  <span>
                    <img src="https://imgur.com/fMuWAwv.png" alt="thumbs up" />{' '}
                    - hace 3 meses
                  </span>
                </figure>
                <p>Profundizar en el entrenamiento y proceso de enseñanza</p>
                <figure>
                  <img src="https://imgur.com/xaCUIe9.png" alt="verified" />
                  <figcaption>Equipo Unycos</figcaption>
                  <span> - hace 3 meses</span>
                </figure>
              </li>
              <hr />
            </ul>

            <button type="button">VER MÁS</button>
          </div>

          <h2>ARTÍCULOS RELACIONADOS</h2>

          <article>
            <div>
              <h3>CONSEJOS PARA NADADORES PRINCIPIANTES</h3>
              {/* date */}
              <p>22.06.2019</p>
            </div>

            <div>
              <h3>CONSEJOS PARA NADADORES PRINCIPIANTES</h3>
              {/* date */}
              <p>22.06.2019</p>
            </div>

            <div>
              <h3>¿Nadar es un buen método para adelgazar?</h3>
              {/* date */}
              <p>22.06.2019</p>
            </div>

            <div>
              <h3>
                Recomendaciones para lograr que un niño venza el miedo al agua
              </h3>
              {/* date */}
              <p>22.06.2019</p>
            </div>

            <div>
              <h3>Consejos para mejorar la técnica del estilo crol</h3>
              {/* date */}
              <p>22.06.2019</p>
            </div>

            <div>
              <h3>Como venzer el miedo al agua</h3>
              {/* date */}
              <p>22.06.2018</p>
            </div>

            <button type="butotn">LER MÁS EN NUESTRO BLOG</button>
          </article>

          <article>
            {/* backgroud image */}
            {/* <article className="main-img-container">
        <img src="https://imgur.com/jYXOoX2.png" alt="studio" />
        </article> */}
            <h2>APRENDE COM LOS MEJORES</h2>
            <h3>DETRÁS DE CADA ÉXITO, HAY UNA HISTÓRIA.</h3>
            <h3>CONOCE EN NUESTRO BLOG.</h3>
          </article>

          <footer>
            <img src="https://imgur.com/VHl5C3y.png" alt="unycos" />
            <div>
              <img src="https://imgur.com/E9uAFoz.png" alt="facebook" />
              <img src="https://imgur.com/h17xrVU.png" alt="instagram" />
              <img src="https://imgur.com/oMIC6R6.png" alt="twitter" />
              <img src="https://imgur.com/F1QgoMc.png" alt="youtube" />
            </div>
            <hr />
            <div>
              <p>Terminos y condiciones</p>
              <p>Política de privacidad</p>
              <p>Aviso legal</p>
            </div>

            <div>
              <p>USD ($)</p>
              <span> / EUR (€)</span>
            </div>
          </footer>
        </>
      )}
    </main>
  );
}
