import { useAuthStore } from "./store/auth.store";

export default function Login() {
  const { handleLogin } = useAuthStore((state) => state);
  return (
    <div>
      <h1>login</h1>
      <button onClick={() => handleLogin(true, "ey...intinya-ini-token")}>
        Login
      </button>
    </div>
  );
}
