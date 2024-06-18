import React, { createContext, useState, useEffect, Children } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {



    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/apiAuth/user/details",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    if (localStorage.getItem("token")) {
      fetchUserDetails();
    }
  }, []);

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/apiAuth/login",
        credentials
      );
      localStorage.setItem("token", response.data.token);
      const userResponse = await axios.get(
        "http://localhost:3000/apiAuth/user/details",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUser(userResponse.data);
    } catch (error) {
      console.log("Login Failed", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
