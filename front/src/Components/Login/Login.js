import { LockClosedIcon } from '@heroicons/react/20/solid'
import logo from '../../assets/img/logo.png'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
    <div className="w-full h-screen max-h-full bg-black">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 ">
          <div>
            <img
              className="mx-auto h-19 w-auto shadow-lg shadow-slate-600"
              src={logo}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-300">
              Entre na sua conta
            </h2>
            <p className="mt-2 text-center text-base text-gray-600">
              Ou{' '}
            <Link to='register'>  
            <a className="font-medium text-green-500 hover:text-black">
                Registre-se
              </a><
                </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6 " action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Endereço de Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-green-400 px-3 py-2 text-slate-300 placeholder-slate-400 focus:z-10 focus:border-green-700 focus:outline-none focus:ring-green-700 sm:text-sm bg-slate-900"
                  placeholder=" Endereço de Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-green-400 px-3 py-2 text-slate-300 placeholder-slate-400 focus:z-10 focus:border-green-700 focus:outline-none focus:ring-green-700 sm:text-sm bg-slate-900"
                  placeholder=" Senha"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-black hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-black group-hover:text-slate-800" aria-hidden="true" />
                </span>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}