import { useState, useCallback } from "react";

export interface UseCalculator {
  display: string;
  press: (label: string) => void;
}

function calc(a: number, b: number, op: string): number {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? NaN : a / b;
    default:
      return b;
  }
}

function format(n: number): string {
  if (!Number.isFinite(n)) return "Error";
  return String(+n.toPrecision(12));
}

export function useCalculator(): UseCalculator {
  const [previous, setPrevious] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [current, setCurrent] = useState("0");
  const [overwrite, setOverwrite] = useState(true);

  const display =
    previous !== null && operator !== null
      ? `${format(previous)}${operator}${overwrite ? "" : current}`
      : current;

  const press = useCallback(
    (label: string) => {
      if (current === "Error" && label !== "AC") {
        return;
      }

      if (/^[0-9]$/.test(label)) {
        setCurrent(overwrite || current === "0" ? label : current + label);
        setOverwrite(false);
        return;
      }

      if (label === ".") {
        if (overwrite) {
          setCurrent("0.");
          setOverwrite(false);
        } else if (!current.includes(".")) {
          setCurrent(current + ".");
        }
        return;
      }

      if (label === "AC") {
        setPrevious(null);
        setOperator(null);
        setCurrent("0");
        setOverwrite(true);
        return;
      }

      if (label === "DEL") {
        if (overwrite) return;
        const next = current.slice(0, -1);
        if (next === "" || next === "-") {
          setCurrent("0");
          setOverwrite(true);
        } else {
          setCurrent(next);
        }
        return;
      }

      if (label === "+/-") {
        if (current === "0") return;
        setCurrent(current.startsWith("-") ? current.slice(1) : "-" + current);
        return;
      }

      if (label === "%") {
        setCurrent(format(parseFloat(current) / 100));
        setOverwrite(false);
        return;
      }

      if (label === "+" || label === "-" || label === "*" || label === "/") {
        const value = parseFloat(current);
        if (previous !== null && operator !== null && !overwrite) {
          const r = calc(previous, value, operator);
          setPrevious(r);
          setCurrent(format(r));
        } else {
          setPrevious(value);
        }
        setOperator(label);
        setOverwrite(true);
        return;
      }

      if (label === "=") {
        if (previous !== null && operator !== null) {
          const r = calc(previous, parseFloat(current), operator);
          setPrevious(null);
          setOperator(null);
          setCurrent(format(r));
          setOverwrite(true);
        }
        return;
      }
    },
    [current, previous, operator, overwrite],
  );

  return { display, press };
}
