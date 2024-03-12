import React from 'react'
import axios from 'axios'
import {useState} from 'react'

export default function Signin() {
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  const [error,setError] = useState("");
  const handleSubmit = async (e)=>{
    if(username && password && name){
      console.log(username, password, name)
      const response = await axios.post(`${import.meta.env.VITE_API_URL}`,{
          username:username,
          password:password,
      })
      setError(response.data.message)
      if(response.status==200){
        localStorage.setItem('token',response.data.token)
        navigate('/Home');
      }
    }
    else{setError("Enter username/password")}
  }
  return(
    <div>
      <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='username'/>
      <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
      <input type="submit" onClick={handleSubmit} />
      {error.length==0?'':<h4>{error}</h4>}
    </div>
  )
}
