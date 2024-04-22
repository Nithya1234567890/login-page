import React from 'react'
import { useState, useContext } from 'react';
import UserContext from '../UserContext';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = (props) => {
  const {data}=useContext(UserContext);
  const [value,setValue]=useState("");
  const [passvalue,setPassValue]=useState("");
  const [error,setError]=useState(false);

  const handleClick=()=>{
    let isMatch=false;
    data.forEach((user)=>{
      if(user.name===value && user.password===passvalue){
        isMatch=true;
      }
    })
    setError(!isMatch);
    if(isMatch){props.handleSign()}
  }
  const handleOnChange=(e)=>{
    e.preventDefault();
    setValue(e.target.value);
  }
  const handlePassChange=(e)=>{
    e.preventDefault();
    setPassValue(e.target.value);
  }

  return (
    <>
    <h1 style={{fontSize:"3em"}}>Login</h1>
        <div className="box2">
         {error && <p style={{textAlign:"center"}}>UserName or Password is Incorrect</p>}
        <label htmlFor="name">UserName</label>
        <input value={value} onChange={handleOnChange} type="text" id='name' placeholder='Your Name'/>
        </div>
       <div className="box2">
       <label htmlFor="pass">PassWord</label>
        <input type="password" id='pass' value={passvalue} onChange={handlePassChange} placeholder='Your Password'/>
       </div>
        <div className="box2" style={{alignItems:"center",margin:"30px"}}>
        <button onClick={handleClick}>Log in</button>
        <div className='path' style={{marginTop:"20px"}}>Don't have an Account? <Link to='/login-page'>SignUp here</Link></div>
        </div>
    </>
  )
}

export default Login
