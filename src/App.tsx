import { useRef, useState } from 'react'
import './App.css'

type DataType={
  name:string;
  email:string;
  password:string;
  signup:string;
}

function App() {
  const [data,setData]=useState<DataType|null>(null)
  const [checked, setChecked] = useState(false)

  const nameRef=useRef<HTMLInputElement|null>(null)
  const emailRef=useRef<HTMLInputElement|null>(null)
  const passwordRef=useRef<HTMLInputElement|null>(null)
  const signUpRef=useRef<HTMLInputElement|null>(null)

  function handleRegist(){
    const name=String(nameRef.current?.value)
    const email=String(emailRef.current?.value)
    const password=String(passwordRef.current?.value)
    const signup=Boolean(signUpRef.current?.checked)

    let Realsignup = signup ? "Kérek" : "Nem kérek";

    console.log(`Name: ${name}, Email: ${email}, Password: ${password}, Hírlevél: ${Realsignup}`)

    setData({name,email,password,signup:Realsignup})
    console.log(data)
  }

  function deleteButton(){
    !nameRef.current?.value=""
  }

  return (
    <>
      <form>
        <input type="text" name="name" id="" placeholder='Panna' ref={nameRef}/>
        <input type="email" name="email" id="email" placeholder='ect@gmail.com' ref={emailRef}/>
        <input type="password" name="password" id="password" placeholder='abc123' ref={passwordRef}/>
        <label htmlFor=""><input type="checkbox" name="checkBox" id="checkBox" checked={checked} ref={signUpRef} onChange={()=>{setChecked(!checked)}}/>Kérek hírlevelet!</label>
      </form>
      <div className="buttons">
        <button type="submit" onClick={handleRegist}>Send</button>
        <button type="button" onClick={deleteButton}>Reset</button>
      </div>
      <h1>Eredmény:</h1>
      <ul>
        <p>Name: <strong><i>{data?.name}</i></strong></p>
        <p>Email: <strong><i>{data?.email}</i></strong></p>
        <p>Hírlevelet: <strong><i>{data?.signup}</i></strong></p>
      </ul>
    </>
  )
}

export default App
