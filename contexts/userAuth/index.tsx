import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import Router from "next/router";
import axios, {AxiosResponse, AxiosRequestConfig, AxiosError} from "axios";
import { User } from "../../interfaces/user";
type ContextType = {
  user?: User;
  login: (props: loginProps) => void;
  logout: () => void;
  register: (props:registerProps) => void;
};
type AuthProviderProps = {
  children: ReactNode;
};
type loginProps = {
  email: string;
  password: string;
};
type registerProps = {
  name: string;
  email: string;
  password: string;
};
export const AuthContext = createContext<ContextType | undefined>(undefined);

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const [user, setUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get<User | undefined>("http://localhost/api/user")
      .then(
        (res: AxiosResponse) => {
          console.log("ログイン済");
          console.log(res.data);
          setUser(res.data);
        },
      )
      .catch((err: AxiosError) => {
        console.log("ログインしていません", err);
      });
  };

  const login =  (data: loginProps) => {
    console.log(data);
    const { email, password } = data;
    console.log(email, password);
    axios.get("http://localhost/sanctum/csrf-cookie").then(() => {
      axios
        .post(
          "http://localhost/api/user/login",
          {
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
  const logout = () => {
    axios.get("http://localhost/sanctum/csrf-cookie").then(() => {
      axios
        .post("http://localhost/api/user/logout", { withCredentials: true })
        .then((res) => {
          setUser(undefined);
          Router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  const register = (data: registerProps) => {
    console.log(data);
    const { name, email, password } = data;
    console.log(name, email, password);
    axios
      .post("http://localhost/api/user/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        setUser(res.data.user);
        alert(
          "仮登録が完了しました。メールに添付されたリンクから本登録へと処理を実行してください。"
        );
      })
      .catch((err) => {
        console.log(err);
        alert("登録に失敗しました");
      });
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
