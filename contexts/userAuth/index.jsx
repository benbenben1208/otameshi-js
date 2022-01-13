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
  const register = (data) => {
    console.log(data);
    const { name, email, password } = data;
    console.log(name, email, password);
    axios
      .post("http://localhost/api/user/register", {
        name,
        email,
        password,
      }
      )
      .then((res) => {
        console.log(res);
        setUser(res.data.user);
        alert("仮登録が完了しました。メールに添付されたリンクから本登録へと処理を実行してください。");
      })
      .catch((err) => {
        console.log(err);
        alert('登録に失敗しました');
      });
  };
  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};