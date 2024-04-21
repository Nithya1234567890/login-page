import React from 'react'
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';

const SignUpPage = (props) => {
    const navigate=useNavigate();

    const handleSign=()=>{
        props.setSigned(true);
        navigate('/login-page/success/');
    }
  return (
    <>
      {!(props.signed)?<SignUp handleSign={handleSign}/>:null}
    </>
  )
}

export default SignUpPage
