import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebae.init";
import Loading from "../pages/Loading";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    signIn,
    setUser,
    logOut,
    loading,
    setLoading,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
