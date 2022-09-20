import { useState } from "preact/hooks";
// import preactLogo from "./assets/preact.svg";
// import "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="max-w-lg mx-auto">
      <div className="w-20">
        <span>{count}</span>
        <p>Burger • $1.49</p>
        <div className="relative flex gap-2">
          <button
            className={`text-sm medium uppercase w-[38px] h-8 bg-red-500 text-white rounded-lg transition-all ${
              count === 0 ? "scale-50" : ""
            }`}
            onClick={() => setCount(Math.max(0, count - 1))}
          >
            -
          </button>
          <button
            className={`text-sm medium uppercase absolute transition-all right-0 w-full h-8 bg-orange-500 text-white rounded-lg ${
              count > 0 ? "w-[38px]" : ""
            }`}
            onClick={() => setCount(count + 1)}
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
}
