import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// Create context and firebase auth
export const authContext = createContext();
const auth = getAuth(app);

export default function UserContext({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //Email and Password register system
  const emailAndPasswordSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Update user profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //Email and Password logIn system

  const emailAndPasswordSignIn = (eamil, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, eamil, password);
  };

  //Google Login system
  const googleSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //Google Login system
  const githubSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // SignOut
  const userSignOut = () => {
    setLoading(true);
    signOut(auth);
  };

  //Set User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // if (currentUser) {
      setUser(currentUser);
      setLoading(false);
      // }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    emailAndPasswordSignUp,
    googleSignIn,
    userSignOut,
    emailAndPasswordSignIn,
    githubSignIn,
    loading,
    updateUserProfile,
  };

  return (
    <authContext.Provider value={userInfo}>{children}</authContext.Provider>
  );
}
