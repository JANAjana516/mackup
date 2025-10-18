import { useState } from "react";
import axios from "axios";
import Layout from "./Layout";
import './Login.css'
export default function Login(props){
   
        const [email,setEmail]=useState('');
        const [password,setPassword]=useState('');
        const [accept,setAccept]=useState(false);
        const [emailError,setemailError] =useState('');
        
     async   function s(e){ 
            let flage=true;
        e.preventDefault();
        setAccept(true);
        if( password.length <8 )
        {
            flage=false;
        }else flage=true;
    
      try{
        
            if(flage)
    
            {
               let res= await axios.post('http://127.0.0.1:8000/api/login',{
                    
                     email:email,
                     password:password,
                   
                 });
                 if(res.status ===200){
                    window.localStorage.setItem('email',email);
                    window.location.pathname="/home";
                 }
            }
          
        }  catch(error){
            setemailError(error.response.status);
        }
      }
        
       
        return(
           <>
            <Layout >
            <div className="sin">
                    
              <div className='register'>
    
                <form className="form "  onSubmit={s}>
                 
                   
                    <label htmlFor="email" >Email :</label>
                   
                   
                    <input value={email} id="email" type="email" required placeholder="Enter Email  "
                    onChange={(e) => setEmail(e.target.value)}
                    ></input>
                   
                    {accept && emailError===422 &&  <p className='error'>Email is already been taken</p>}
                   
                    <label htmlFor="password">password :</label>
                   
                    <input value={password} id="password" type="password" placeholder="Enter Password "
                    onChange={(e) => setPassword(e.target.value)}
                    ></input>
                   
                   {password.length !==0 && password.length <8 &&  <p className='error'> Password must be more than 8 char</p>}
                   
                   
                    <div className="lobtn" >
                    <button type="submit" >Login</button>
                    </div>
                    
                </form>
            </div>
            </div>
            </Layout>
            </>
        )
    }
