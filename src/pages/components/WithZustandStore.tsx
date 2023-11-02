import { useEffect } from "react";
import { useBearStore, useUserStore } from "../store";
import { useAuthStore } from "../store/auth.store";

export default function WithZustandStore() {
  const { bears, increase } = useBearStore((state) => state);

  const { getUser, userData } = useUserStore((state) => state);

  const { handleLogin, token, handleLogout } = useAuthStore((state) => state);

  useEffect(() => {
    getUser("/users");
  }, [getUser]);

  const handleClick = () => {
    handleLogin(true, "ini adalah token");
  };

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
      <hr />
      <h2>token : {token}</h2>
      <button onClick={handleClick}>Login</button>
      <button onClick={() => handleLogout()}>logout</button>
    </div>
  );
}
