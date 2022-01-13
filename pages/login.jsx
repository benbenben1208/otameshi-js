import { LockClosedIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { exit } from "process";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/userAuth/index";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";

export default function Login() {
  const context = useContext(AuthContext);
  const router = useRouter();
  const { user, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if(user){
    router.push('/');
  }
  const handleChange = (event) => {
    if(event.target.name === 'email') {
      setEmail(event.target.value);
    } else if(event.target.name === 'password') {
      setPassword(event.target.value);
    }
  }
  const  loginSubmit =  (event) => {
      event.preventDefault();
      const data = {email, password};
      login(data);
  };
  return (
    <div className="max-w-md w-full space-y-8">
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          ログイン
        </h2>
      </div>
      <form  className="mt-8 space-y-6" onSubmit={ (data) => loginSubmit(data) }>

        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={handleChange}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="text-sm">
            <span className="cursor-pointer font-medium text-white hover:text-indigo-500">
              change mode?
            </span>
          </div>
        </div>

        <div>
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
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
