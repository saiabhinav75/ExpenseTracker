import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function signup() {
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  const [name,setName] = useState();
  const [error,setError] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e)=>{
    if(username && password && name){
      console.log(username, password, name)
      const response = await axios.post(`${import.meta.env.VITE_API_URL}`,{
          username:username,
          password:password,
          name:name
      })
      setError(response.data.message)
      if(response.status==200){
        localStorage.setItem('token',response.data.token)
        navigate('/Home');
      }
    }
    else{setError("Enter username/passwor/name")}
  }
  const Login = ()=>{
    navigate('/signin')
  }
  return (
    <div>
      <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='username'/>
      <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
      <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
      <input type="submit" onClick={handleSubmit} />
      <br></br>
      {error.length==0?'':<h4>{error}</h4>}
      <br></br>
      <button onClick={Login}>Already Have an account?</button>
    </div>
  )
}
