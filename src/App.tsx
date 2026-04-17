import Display from "./components/Display";
import Keypad from "./components/Keypad";
import { useCalculator } from "./hooks/useCalculator";

export default function App() {
  const { display, press } = useCalculator();

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 p-4">
      <div className="w-full max-w-sm flex flex-col gap-4 rounded-2xl bg-zinc-950 p-4 shadow-xl">
        <Display value={display} />
        <Keypad onPress={press} />
      </div>
    </div>
  );
}
