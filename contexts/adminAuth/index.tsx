import {
    createContext,
    ReactNode,
    useEffect,
    useState,
  } from "react";
  import Router from "next/router";
  import axios, {AxiosResponse, AxiosRequestConfig, AxiosError} from "axios";
  import { Admin } from "../../interfaces/admin";
  type AdminContextType = {
   admin?: Admin;
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
  export const AdminContext = createContext<AdminContextType | undefined>(undefined);

  export const AdminProvider = (props: AuthProviderProps) => {
    const { children } = props;
    const [admin, setAdmin] = useState<Admin | undefined>(undefined);
    useEffect(() => {
      getAdminUser();
    }, []);

    const getAdminUser =  () => {
       axios
        .get<Admin | undefined>("http://localhost/api/admin")
        .then(
          (res: AxiosResponse) => {
            console.log("ログイン済");
            console.log(res.data);
            setAdmin(res.data);
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
            "http://localhost/api/admin/login",
            {
              email,
              password,
            },
            { withCredentials: true }
          )
          .then((res) => {
            setAdmin(res.data.user);
            Router.push("/admin");
          })
          .catch((err) => {
            console.log(err);
          });
      });
    };
    const logout = () => {
      axios.get("http://localhost/sanctum/csrf-cookie").then(() => {
        axios
          .post("http://localhostapi/admin/logout", { withCredentials: true })
          .then((res) => {
            setAdmin(undefined);
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
        .post("http://localhost/api/admin/login", {
          name,
          email,
          password,
        })
        .then((res) => {
          console.log(res);
          setAdmin(res.data.user);
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
      <AdminContext.Provider value={{ admin, login, logout, register }}>
        {children}
      </AdminContext.Provider>
    );
  };
