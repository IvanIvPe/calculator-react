import { useState, useCallback } from 'react';

export interface UseCalculator {
  display: string;
  press: (label: string) => void;
}

export function useCalculator(): UseCalculator {
  const [display, setDisplay] = useState('0');

  const press = useCallback((label: string) => {
    console.log(label);
    setDisplay(label);
  }, []);

  return { display, press };
}
