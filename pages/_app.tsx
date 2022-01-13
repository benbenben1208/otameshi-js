import '../styles/globals.css'
import {AppProps} from 'next/app'
import Layout from "../components/Layout";
import { AuthProvider } from "../contexts/userAuth/index";
import axios from "axios";
import Pusher from "pusher-js"
import { useEffect} from 'react';
function MyApp({ Component, pageProps }:AppProps) {
  axios.defaults.withCredentials = true;
//   useEffect (() => {
//     const head = document.getElementsByTagName("head")[0];
//     const scriptUrl = document.createElement("script");
//     scriptUrl.src = "https://js.pusher.com/7.0.3/pusher.min.js";
//     head.appendChild(scriptUrl);
//   }, []);

//   // Pusher.logToConsole = true;

// var pusher = new Pusher({
//   appId: "1330370",
//   key: "744d30d1ffbbcc8dbf5c",
//   secret: "d549fd5eb1780aa53854",
//   cluster: "ap3",
//   forceTLS: false,
//   encrypted: true
// });
// var channel = pusher.subscribe('message-sended-channel');
// channel.bind('MessageSended', (data) => {
//   alert(JSON.stringify(data));
// });


// pusher.trigger("message-sended-channel", "message-sended", { message: "hello world" });
  return  (
    <AuthProvider>
      <Layout title="login">
      <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );

}

export default MyApp
