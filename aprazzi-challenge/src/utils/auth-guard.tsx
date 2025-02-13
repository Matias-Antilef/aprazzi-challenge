import { auth } from "@/firebase/firebase";
import { IonRouterOutlet } from "@ionic/react";
import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return null; // or a loading indicator
  }

  return isAuthenticated ? <>{children}</> : <IonRouterOutlet />;
}
