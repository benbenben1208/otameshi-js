import { LockClosedIcon } from "@heroicons/react/solid";
import { useRouter} from "next/router";
import { exit } from "process";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/userAuth/index";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";

export default function Chat() {
  const context = useContext(AuthContext);
  const router = useRouter();
  const { user } = useAuth();
//   if(!user){
//    router.push('/');
//   }
if(user){
    const userId = user.id;
}

  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    setMessage(e.target.value);
  }
  const chatSend = (e) => {
      e.preventDefault();
      axios.post('http://localhost/api/user/chat/send',{
          message,
          userId
      });
  }
  return (
    <div className="max-w-md w-full space-y-8">
       <div className="rounded-md shadow-sm -space-y-px">
          <form  className="mt-8 space-y-6" onSubmit={(e) => chatSend(e) }>

        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <input
              id="email-address"
              name="message"
              type="text"
              autoComplete="message"
              value={message}
              onChange={handleChange}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"

            />
          </div>

        </div>
        <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            メッセージ送信
          </button>
        </form>
        </div>
    </div>
  );
}
