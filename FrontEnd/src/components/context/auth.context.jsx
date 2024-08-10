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
  // ...
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};
