import React, { createContext, useContext, useState } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);

  return (
    <authContext.Provider
      value={{
        isLoginForm,
        setIsLoginForm,
        formData,
        setFormData,
        users,
        setUsers,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
