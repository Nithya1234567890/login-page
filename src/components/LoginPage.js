import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const LoginPage = () => {
    const [signed,setSigned]=useState(false);
    const navigate=useNavigate();

    const handleSign=()=>{
        setSigned(true);
        navigate('/success/');
    }
  return (
    <>
      {!signed?<Login handleSign={handleSign}/>:null}
    </>
  )
}

export default LoginPage
