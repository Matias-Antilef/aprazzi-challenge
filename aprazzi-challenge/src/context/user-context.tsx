import { UserModel } from "@/model/user-model";
import React, { ReactNode, useContext, useEffect, useState } from "react";
interface UserContextType {
  user: UserModel | null;
  createUser: (user: UserModel) => void;
  logout: () => void;
}

export const userContext = React.createContext<UserContextType | undefined>(
  undefined
);

type UserProviderProps = {
  children: ReactNode;
};

export function useUserContext() {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUserContext debe ser usado dentro de un UserProvider");
  }
  return context;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserModel | null>(null);

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    const accessToken = localStorage.getItem("accessToken");
    const displayName = localStorage.getItem("displayName");
    const photoURL = localStorage.getItem("photoURL");

    if (uid && displayName && accessToken && photoURL) {
      setUser({ uid, accessToken, displayName, photoURL });
    }
  }, []);

  function createUser({ uid, accessToken, displayName, photoURL }: UserModel) {
    setUser({ uid, accessToken, displayName, photoURL });

    localStorage.setItem("uid", uid);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("displayName", displayName);
    localStorage.setItem("photoURL", photoURL);
  }

  function logout() {
    setUser(null);
    localStorage.clear();
  }

  return (
    <userContext.Provider value={{ user, createUser, logout }}>
      {children}
    </userContext.Provider>
  );
}
