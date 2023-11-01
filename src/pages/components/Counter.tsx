import { useState } from "react";

export default function Counter() {
  const [Count, setCount] = useState<number>(0); // optional between null and number
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>add</button>
    </div>
  );
}
