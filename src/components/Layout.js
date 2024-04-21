import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import './Layout.css'
import { Outlet } from 'react-router-dom'
import UserContext from '../UserContext'

const Layout = (props) => {

  const {data,setData}=useContext(UserContext);

  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("data"))
    if(data && data.length>0){
      setData(data);
    }
    console.log(data);
    // eslint-disable-next-line
  },[])
  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(data));
  },[data])
  return (
    <div className="container1">
      <div className="box">
        {!(props.signed) && <div className="c-box1">
          <Navbar/>
        </div>}
          <div className="c-box2">
          <Outlet/>
          </div>
      </div>
    </div>
  )
}

export default Layout
