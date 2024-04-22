import React from 'react'
import { useState, useContext } from 'react';
import UserContext from '../UserContext';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = (props) => {
    const namepat=/^[A-Za-z\s.]+$/;
  const {setData}=useContext(UserContext);
  const [value,setValue]=useState("");
  const [passvalue,setPassValue]=useState("");
  const [conpassvalue,setConPassValue]=useState("");

  const [ner,setNer]=useState(false);
  const [ner1,setNer1]=useState(false);
  const [per,setPer]=useState(false);
  const [cer,setcer]=useState(false);

  const handleClick=()=>{
    setNer(false);
    setPer(false);
    setcer(false);
    if(value===""){
      setNer1(true);
      return;
    }
    if(!namepat.test(value)){
      setNer(true);
      return;
    }
    if(passvalue.length<4){
      setPer(true);
      return;
    }
    if(conpassvalue!==passvalue){
      setcer(true);
      return; 
    }


    const newData={id:Date.now(),name:value,password:passvalue}
    setData((prev)=>([...prev,newData]));
    props.handleSign();
  }

  const handleOnChange=(e)=>{
    e.preventDefault();
    setValue(e.target.value);
  }
  const handlePassChange=(e)=>{
    e.preventDefault();
    setPassValue(e.target.value);
  }
  const handleConPassChange=(e)=>{
    e.preventDefault();
    setConPassValue(e.target.value);
  }


  return (
    <>
    <h1 style={{fontSize:"3em"}}>Sign Up</h1>
        <div className="box2">
        <label htmlFor="name">UserName</label>
        <input value={value} onChange={handleOnChange} type="text" id='name' placeholder='Your Name'/>
        {ner && <p>*Please enter Correct Name</p>}
        {ner1 && <p>*This field is required</p>}
        </div>
       <div className="box2">
       <label htmlFor="pass">PassWord</label>
        <input type="password" id='pass' value={passvalue} onChange={handlePassChange} placeholder='Your Password'/>
        {per && <p>*Password must have atleast 4 characters</p>}
       </div>
        <div className="box2">
        <label htmlFor="pass1">Confirm PassWord</label>
        <input type="password" value={conpassvalue} onChange={handleConPassChange} id='pass1' placeholder='Confirm Password'/>
        {cer && <p>*Password didn't match</p>}
        </div>
        <div className="box2" style={{alignItems:"center",margin:"30px"}}>
        <button onClick={handleClick}>Sign Up</button>
        <div className='path' style={{marginTop:"20px"}}>Already have an Account? <Link to='/login-page/login/'>Login here</Link></div>
        </div>
    </>
  )
}

export default SignUp
