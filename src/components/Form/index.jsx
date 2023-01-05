import styles from './form.module.css';
import useGenericState from '../../hooks/useGenericState';

export default function Form() {
  const INITIAL_STATE = {
    name: '',
    correoEletronico: '',
    pais: '',
    telefono: '',
    useCondition: false,
    receiveInfoEmail: false,
  };
  const [genericState, setGenericState] = useGenericState(INITIAL_STATE);
  const cleanTheFormStates = () => {
    const allGenericStateKeys = Object.keys(genericState);
    allGenericStateKeys.forEach((key) => {
      if (key !== 'useCondition' && key !== 'receiveInfoEmail') {
        return setGenericState({ target: { name: key, value: '' } });
      }
      setGenericState({ target: { name: key, value: false } });
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (genericState.useCondition === false) {
      alert('Tienes que aceptar las condiciones de uso y protección de datos.');
      return;
    }

    if (
      Object.values(genericState)
        // filtering for only having strings in the array, and the str.trim() method don't throw an error for trying to .trim a boolean
        .filter((str) => typeof str === 'string')

        // remove all the inputs fields space and verify if there is something writen in it
        .some((value) => value.trim() === '')
    ) {
      alert('Tienes que llenar todos los campos!');
      return;
    }
    alert('Enviado!');
    cleanTheFormStates();
    console.log(genericState);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h3>OBTÉN MÁS INFORMACIÓN</h3>

      <input
        value={genericState.name}
        onChange={setGenericState}
        name="name"
        type="text"
        placeholder="NOME COMPLETO"
      />
      <input
        value={genericState.correoEletronico}
        onChange={setGenericState}
        type="text"
        name="correoEletronico"
        placeholder="CORREO ELECTRONÓNICO"
      />
      <input
        value={genericState.pais}
        onChange={setGenericState}
        type="text"
        name="pais"
        placeholder="PAÍS/CÓDIGO PAÍS"
      />
      <input
        value={genericState.telefono}
        onChange={setGenericState}
        type="text"
        placeholder="TELÉFONO"
        name="telefono"
      />

      <div className={styles.label_container}>
        <label htmlFor="use-condition">
          <input
            onChange={setGenericState}
            name="useCondition"
            checked={genericState.useCondition}
            type="checkbox"
            id="use-condition"
          />
          <p>
            <span className="c-grey">Acepto las</span> condiciones de uso{' '}
            <span className="c-grey">y</span> protección de datos.
          </p>
        </label>

        <label htmlFor="receive-info-email">
          <input
            checked={genericState.receiveInfoEmail}
            onChange={setGenericState}
            name="receiveInfoEmail"
            type="checkbox"
            id="receive-info-email"
          />
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
