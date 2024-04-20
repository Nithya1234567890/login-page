import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';

const SignUpPage = () => {
    const [signed,setSigned]=useState(false);
    const navigate=useNavigate();

    const handleSign=()=>{
        setSigned(true);
        navigate('/success/');
    }
  return (
    <>
      {!signed?<SignUp handleSign={handleSign}/>:null}
    </>
  )
}

export default SignUpPage
