import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const myMiddlewares: any = (f: any) =>
  devtools(persist(f, { name: "auth-store" }));

interface AuthState {
  isAuth: boolean;
  token: string | null;
  handleLogin: (isAuth: boolean, token: string | null) => void;
  handleLogout: () => void;
}

export const useAuthStore = create<AuthState>()(
  myMiddlewares((set: any) => ({
    isAuth: false,
    token: "",
    handleLogin: async (isAuth: boolean, token: string | null) =>
      set({ isAuth, token }),
    handleLogout: async () => set({ isAuth: false, token: "" }),
  }))
);
