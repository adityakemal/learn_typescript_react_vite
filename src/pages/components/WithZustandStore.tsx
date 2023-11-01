import { useEffect } from "react";
import { useBearStore, useUserStore } from "../store";

export default function WithZustandStore() {
  const { bears, increase } = useBearStore((state) => state);

  const { getUser, userData } = useUserStore((state) => state);

  useEffect(() => {
    getUser("/users");
  }, [getUser]);

  return (
    <div>
      <h1>with zustand store</h1>
      <p>bears: {bears}</p>
      <button onClick={() => increase(bears + 1)}>increase bear</button>

      <h2>list user</h2>
      {/* {JSON.stringify(userData)} */}

      {userData.map((user) => (
        <p key={user?.id}>
          {user?.name}- {user.address.geo.lat}
        </p>
      ))}
    </div>
  );
}
