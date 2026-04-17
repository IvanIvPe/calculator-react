type Variant = "number" | "operator" | "equals" | "function";

interface ButtonProps {
  label: string;
  onClick: (label: string) => void;
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  number: "bg-zinc-700 text-white hover:bg-zinc-600",
  operator: "bg-amber-500 text-white hover:bg-amber-400",
  equals: "bg-violet-600 text-white hover:bg-violet-500",
  function: "bg-zinc-300 text-zinc-900 hover:bg-zinc-200",
};

function Button({ label, onClick, variant = "number" }: ButtonProps) {
  return (
    <button
      className={`h-16 rounded-xl text-xl font-medium ${variants[variant]}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

export default Button;
