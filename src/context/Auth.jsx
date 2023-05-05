import React, { createContext, useState } from "react";
import app from "../firebase/auth.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useEffect } from "react";

export const authContext = createContext(null);
const Auth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google authentication login
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github authentication login
  const githubProvider = new GithubAuthProvider();
  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  // user observer
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
          setUser(null);
          setLoading(false);
      }
    });
    return unsubscribe;
  }, []);
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  }
    // logout
    const logOut = () => {
      return auth.signOut();
    };
    const userInfo = {
      createUser,
      signIn,
      signInWithGithub,
      signInWithGoogle,
      logOut,
      user,
      loading,
      forgotPassword,
    };
  return (
    <authContext.Provider value={userInfo}>
      {children}
    </authContext.Provider>
  );
};

export default Auth;
