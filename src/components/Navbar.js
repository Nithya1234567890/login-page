import React,{useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const loc=useLocation();
  useEffect(()=>{
    console.log(loc.pathname)
  },[loc]);
  return (
    <div className='box1'>
      <ul>
        <li style={{backgroundColor: (loc.pathname==='/login-page/' || loc.pathname==='/login-page')?"transparent":"rgb(51 51 51 / 34%)"}}>
            <Link to='' className={`${(loc.pathname==='/login-page/' || loc.pathname==='/login-page')?"text-white":""}`}>SignUp</Link>
        </li>
        <li style={{backgroundColor: (loc.pathname==='/login-page/login/')?"transparent":"rgb(51 51 51 / 34%)"}}>
            <Link to='login/' className={`${(loc.pathname==='/login-page/login/')?"text-white":""}`}>Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
