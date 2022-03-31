import { createContext, ReactNode, useState } from "react";
import { User } from "../types";

interface ProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<{
  user: User | null;
  login: (user: User | null) => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (user: User | null) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
