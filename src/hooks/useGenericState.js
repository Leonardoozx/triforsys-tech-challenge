import { useState } from 'react';

function useGenericState(initial_state) {
  const [genericState, setGenericState] = useState(initial_state);

  const setState = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    return setGenericState((prevState) => ({ ...prevState, [name]: value }));
  };

  return [genericState, setState];
}

export default useGenericState;
