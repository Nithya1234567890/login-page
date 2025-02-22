import React from 'react'
import { useState, useContext } from 'react';
import UserContext from '../UserContext';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = (props) => {
    const emailpat=/^[^@]+@[^@]+\.[^@]+$/;
    const namepat=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
    // const phonepat=/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
  const {setData}=useContext(UserContext);
  const [name1,setName1]=useState("");
  const [email,setEmail]=useState("");
  const [passvalue,setPassValue]=useState("");
  const [conpassvalue,setConPassValue]=useState("");

  const [nameEr,setNameEr]=useState(false);
  const [nameEr1,setNameEr1]=useState(false);
  const [ner,setNer]=useState(false);
  const [ner1,setNer1]=useState(false);
  const [per,setPer]=useState(false);
  const [cer,setcer]=useState(false);

  const handleClick=()=>{
    setNameEr(false);
    setNameEr1(false);
    setNer(false);
    setNer1(false);
    setPer(false);
    setcer(false);
    if(!namepat.test(name1)){
      setNameEr(true);
      return;
    }
    if(email===""){
      setNer1(true);
      return;
    }
    if(!emailpat.test(email)){
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


    const newData={id:Date.now(),name:email,password:passvalue}
    setData((prev)=>([...prev,newData]));
    props.handleSign();
  }
  const handleNameChange=(e)=>{
    e.preventDefault();
    setName1(e.target.value);
  }

  const handleOnChange=(e)=>{
    e.preventDefault();
    setEmail(e.target.value);
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
        <label htmlFor="name">Full Name</label>
        <input value={name1} onChange={handleNameChange} type="text" id='name' placeholder='Your Name'/>
        {nameEr && <p>*Please enter Correct Name</p>}
        {nameEr1 && <p>*This field is required</p>}
        </div>
        <div className="box2">
        <label htmlFor="email">Email</label>
        <input value={email} onChange={handleOnChange} type="email" id='email' placeholder='Your Email'/>
        {ner && <p>*Please enter Correct Email</p>}
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
