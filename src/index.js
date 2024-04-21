import React, { useState } from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UserProvider from './UserProvider';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout';
import { createRoot } from 'react-dom/client';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import Success from './components/Success';

const SignProvider=()=>{
   const [signed,setSigned]=useState(false);
   const router=createBrowserRouter(
     createRoutesFromElements(
       <Route path='/login-page' element={<Layout signed={signed}/>}>
         <Route path='' element={<SignUpPage signed={signed} setSigned={setSigned}/>}/>
         <Route path='login/' element={<LoginPage signed={signed} setSigned={setSigned}/>}/>
         <Route path='success/' element={<Success/>}/>
       </Route>
     )
   );
   return(
    <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router}/>
    </UserProvider>
  </React.StrictMode>
   );
};


const root =createRoot(document.getElementById('root'));
root.render(
  <SignProvider/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
