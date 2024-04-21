import React from 'react'
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const LoginPage = (props) => {
    const navigate=useNavigate();

    const handleSign=()=>{
        props.setSigned(true);
        navigate('/login-page/success/');
    }
  return (
    <>
      {!(props.signed)?<Login handleSign={handleSign}/>:null}
    </>
  )
}

export default LoginPage
