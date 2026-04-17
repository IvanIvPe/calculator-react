interface DisplayProps {
  value: string;
}

function Display({ value }: DisplayProps) {
  return (
    <div className="w-full rounded-xl bg-zinc-800 px-5 py-6 text-right font-mono text-5xl text-white truncate">
      {value}
    </div>
  );
}

export default Display;
