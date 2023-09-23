'use client'

import { signIn } from "next-auth/react"


function Login() {
  return (
    <div className="h-screen flex flex-col items-start pl-96 justify-center bg-bod">
      <div className="max-w-[665px] max-h-[506px]">
        <div className="">
          <h1 className="text-9xl font-black text-tc">
            JURIX
          </h1>
          <h3 className="text-4xl mt-3 font-semibold text-tc">
            Your Legal Assitant
          </h3>
          <p className="font-sans text-2xl font-medium mt-6 text-sdb">
            Login to begin a conversation..🚀
          </p>
          <button
            onClick={() => signIn('google')}
            className="text-xl font-semibold border-tc py-1 px-2 hover:bg-hov
          rounded-lg hover:cursor-pointer border-4 mt-4 text-tc">
            LOGIN
          </button>
        </div>
      </div>

      <div className="flex space-x-28 text-4xl font-bold mt-[174px] 
       text-tc">
        <h2>| ACCESSIBLE</h2>
        <h2>| RELIABLE</h2>
        <h2>| READINESS</h2>
      </div>
    </div>
  )
}

export default Login;