import { LockClosedIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { NextPage} from 'next'
import { useState, useContext, ChangeEvent, FormEvent } from "react";
import { AdminContext } from "../contexts/adminAuth";
import { adminAuth } from "../hooks/adminAuth";


 const adminLogin: NextPage = () => {
  const context = useContext(AdminContext);
  const router = useRouter();
  const { admin, login } = adminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if(admin){
    router.push('/admin');
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === 'email') {
      setEmail(event.target.value);
    } else if(event.target.name === 'password') {
      setPassword(event.target.value);
    }
  }
  const  loginSubmit =  (event: FormEvent) => {
    // console.log(event.target[0].value);
    // console.log(event.target[1].value);
      event.preventDefault();
      const data = {email, password};
      login(data);
  };
  return (
    <div className="flex flex-1 justify-center items-center w-screen flex-col">
    <div className="max-w-md w-full space-y-8">
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          管理者ログイン
        </h2>
      </div>
      <form  className="mt-8 space-y-6" onSubmit={ (e) => loginSubmit(e) }>

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
            ログイン
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}
export default adminLogin;
