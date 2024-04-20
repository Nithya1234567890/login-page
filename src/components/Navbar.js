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
        <li style={{backgroundColor: (loc.pathname==='' || loc.pathname==='/')?"transparent":"rgb(51 51 51 / 34%)"}}>
            <Link to='' className={`${(loc.pathname==='' || loc.pathname==='/')?"text-white":""}`}>SignUp</Link>
        </li>
        <li style={{backgroundColor: (loc.pathname==='/login/')?"transparent":"rgb(51 51 51 / 34%)"}}>
            <Link to='login/' className={`${(loc.pathname==='/login/')?"text-white":""}`}>Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
