import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthentication: false,
  user: {
    email: "",
    role: "",
  },
});

export const AuthWrapper = (props) => {
  const [auth, setAuth] = useState({
    isAuthentication: false,
    user: {
      email: "",
      role: "",
    },
  });
  const [loading, setLoading] = useState(true);
  // ...
  return (
    <AuthContext.Provider value={{ auth, setAuth, loading, setLoading }}>
      {props.children}
    </AuthContext.Provider>
  );
};