import { useBearStore } from "../store";

export default function WithZustandStore() {
  const { bears, increase } = useBearStore((state) => state);
  return (
    <div>
      <h1>with zustand store</h1>
      <p>bears: {bears}</p>
      <button onClick={() => increase(bears + 1)}>increase bear</button>
    </div>
  );
}
