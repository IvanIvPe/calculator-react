import Button, { type Variant } from "./ui/Button/Button";

interface Key {
  label: string;
  variant?: Variant;
}

const keys: Key[] = [
  { label: "AC", variant: "function" },
  { label: "+/-", variant: "function" },
  { label: "%", variant: "function" },
  { label: "/", variant: "operator" },
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "*", variant: "operator" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "-", variant: "operator" },
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "+", variant: "operator" },
  { label: "0" },
  { label: "." },
  { label: "DEL", variant: "function" },
  { label: "=", variant: "equals" },
];

interface KeypadProps {
  onPress: (label: string) => void;
}

function Keypad({ onPress }: KeypadProps) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {keys.map((key) => (
        <Button
          key={key.label}
          label={key.label}
          variant={key.variant}
          onClick={onPress}
        />
      ))}
    </div>
  );
}

export default Keypad;
