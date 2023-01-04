import '../styles/form.css';

export default function Form() {
  return (
    <form>
      <h3>OBTÉN MÁS INFORMACIÓN</h3>

      <input type="text" placeholder="NOME COMPLETO" />
      <input type="text" placeholder="CORREO ELECTRONÓNICO" />
      <input type="text" placeholder="PAÍS/CÓDIGO PAÍS" />
      <input type="text" placeholder="TELÉFONO" />

      <div className="label-container">
        <label htmlFor="use-condition">
          <input type="checkbox" id="use-condition" />
          <p>
            <span className="c-grey">Acepto las</span> condiciones de uso{' '}
            <span className="c-grey">y</span> protección de datos.
          </p>
        </label>

        <label htmlFor="receive-info-email">
          <input type="checkbox" id="receive-info-email" />
          <p className="c-grey">
            Me gustaria de recibir información sobre nuevos cursos, ofertsa y
            promociones
          </p>
        </label>
      </div>

      <button type="submit" className="btn">
        ENVIAR
      </button>
    </form>
  );
}
