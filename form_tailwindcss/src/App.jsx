import { useState } from "react"

function App() {
const [email,setEmail]=useState("");
const [pass,setPass]=useState("");
const emptyValue=()=>{
  setEmail("");
  setPass("");
  /*console.log(email);
  console.log(pass);*/
  
}

  return (
    <>
      <div className='w-full bg-zinc-800 h-[100vh] flex justify-center items-center font-Roboto'>
        <div className="w-1/4  h-[45%] bg-slate-700 rounded-sm py-px flex flex-col items-center gap-6">
          <h1 className="text-4xl py-2 font-bold text-slate-100">Sign in </h1>
          <div className="w-10/12 flex flex-col justify-center items-center gap-2 border-10 border-slate-800">
            <div className="text-start w-full">
              <h1 className="font-semibold pb-1 px-0 text-slate-100">Username or email address:</h1>

              <input className="w-full bg-slate-600 py-2 font-semibold text-slate-100 px-2 rounded-sm outline-none" 
              onChange={(e)=>{setEmail(e.target.value)}}
              value={email}
              />
            </div>

            <div className="text-start w-full font-semibold ">
              <h1 className="font-semibold pb-1  text-slate-100">Password:</h1>

              <input className="w-full bg-slate-600 py-2 font-semibold text-slate-100 px-2 outline-none rounded-sm" type="password" onChange={(e)=>{setPass(e.target.value)}} value={pass}/>
            </div>
          </div>
          <button className="w-10/12 py-2 pt-2 bg-green-700 font-semibold hover:bg-green-600 ease-in duration-300 text-slate-200 text-lg text-center rounded-sm" onClick={emptyValue}>Sign_Up</button>
        </div>

      </div>
    </>
  )
}

export default App
