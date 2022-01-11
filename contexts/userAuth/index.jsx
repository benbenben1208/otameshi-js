import { createContext, useEffect, useState } from "react";
import Router from "next/router";
import axios from "axios";
export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    getUser();
  }, []);

  const getUser =  async () => {
    axios.get('http://localhost/api/user').then((res) => {
      console.log("ログイン済");
      console.log(res.data);
      setUser(res.data);
     },
     { withCredentials: true }
     ).catch((err) => {
        console.log("ログインしていません", err);
     });
  };

  const login = async (data) => {
    console.log(data);
    const { email, password } = data;
    console.log(email, password);
    axios.get("http://localhost/sanctum/csrf-cookie").then(() => {
      axios
        .post("http://localhost/api/user/login", {
          email,
          password,
        },
        { withCredentials: true }
        )
        .then((res) => {
          setUser(res.data.user);
          Router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};