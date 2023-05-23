import React, { useState } from 'react'
import image from "../../img/logo.png"
import '../styles/Entry.css'
import axios from "axios";

export function SigninScreen() {

  const [errors, setErrors] = useState(false)
  const [errMessage, setErrMessage] = useState("")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")
  const [phone, setPhone] = useState("")
  const [occupation, setOccupation] = useState("")


  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value)

  }

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value)
  }

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value)
  }

  const occupationChangeHandler = (e) => {
    setOccupation(e.target.value)
  }

  const addProfile = () => {

    const newProf = {
      email: email,
      password: password,
      username: userName,
      phone: phone,
      occupation: occupation
    }
  }

  const registerUser = (e) => {
    if (password === "") {
      setErrors(true);
      setErrMessage("Password is required");
      console.log("Password is required")
      
      return;
    }
    if (email=="") {

      console.log("email vacio")
    }
    else
    {
      e.preventDefault()
    axios.post("http://localhost:4000/signin", {//cuando se vaya a prod hay que cambiar esta ruta para las funciones lambda?
      email: email,
      password: password,
      userName: userName,
      phone: phone,
      occupation: occupation
    })
      .then(response => {
        console.log(` Response: ${response}`)
        if (response.data.err) {
          setErrors(true)
          setErrMessage(response.data.message)
        }
        {/*else {
        console.log("navigate")
            navigate(from,{replace:true})
      }*/}
        setEmail("")
        setPassword("")
        setUserName("")
        setPhone("")
        setOccupation("")

      })
      .catch(error => {
        console.log(error)
      })
    }

    // authCtx.login()
    // navigate(from,{replace:true})
  }

  return (

    <div id='back'>
      <form id='box'>

        <img id='img' src={image} />

        <div class="form-outline mb-4">
        <label class="form-label" for="form2Example1">Email Address</label>

          <input type="email" 
          id="form2Example1 email" 
          class="form-control" value={email} onChange={emailChangeHandler} placeholder="name@example.com" />

        </div>

        <div class="form-outline mb-4">
        <label class="form-label" for="form2Example2">Password</label>
          <input type="password" 
          id="form2Example2 password" 
          class="form-control" value={password} onChange={passwordChangeHandler} placeholder="Password" />
        </div>

        <div class="form-outline mb-4">
          <label class="form-label"
            for="form2Example1">
            Username
          </label>

          <input
            type="email"
            id="form2Example1 username"
            class="form-control"
            value={userName}
            onChange={userNameChangeHandler}
            placeholder="Username" />
         
        </div>

        <div class="form-outline mb-4">
        <label class="form-label" for="form2Example1">Phone Number</label>
          <input type="email" id="form2Example1 language" class="form-control" value={phone} onChange={phoneChangeHandler} placeholder="+52 55 0912 3456" />
        </div>

        <div class="form-outline mb-4">
        <label class="form-label" for="form2Example1">Occupation</label>

          <input type="email" id="form2Example1 currency" class="form-control" value={occupation} onChange={occupationChangeHandler} placeholder="Student, entreprenuer..." />
        </div>

        <button 
        type="button" 
        class="btn btn-dark btn-block mb-4 text-center" 

        onClick={registerUser}>Sign up</button>
        

      </form>
    </div>
  )
}
