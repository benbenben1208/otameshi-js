import '../styles/globals.css'
import Auth from "../components/Auth";
import Layout from "../components/Layout";
import { AuthProvider } from "../contexts/userAuth/index";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  axios.defaults.withCredentials = true;
  return  (
    <AuthProvider>
      <Layout title="login">
      <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );

}

export default MyApp
