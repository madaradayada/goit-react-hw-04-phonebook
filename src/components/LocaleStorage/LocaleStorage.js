import { useState, useEffect } from 'react';

export const useLocaleStorage = value => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? value
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
