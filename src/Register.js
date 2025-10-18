
import './Register.css';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Test(props) {

	const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [passwordR,setPasswordR]=useState('');
    const [accept,setAccept]=useState(false);
    const [emailError,setemailError] =useState('');
    
    
 async   function s(e){ 
        let flage=true;
    e.preventDefault();
    setAccept(true);
    if(name ==="" || password.length <8 ||  passwordR !== password )
    {
        flage=false;
    }else flage=true;

  try{
               let res= await axios.post('http://127.0.0.1:8000/api/register',{
                 name:name,
                 email:email,
                 password:password,
                 password_confirmation:passwordR,
             });

            if(res.status ===200)
            {
               window.localStorage.setItem("email",email); 
               if(props.back)
               {
                window.location.pathname="/dashboard/users";
               }
               else{
                window.location.pathname="/home";
               }

           
            }

        }
      
     catch(error){
        setemailError(error.response.status);
    }
  }
	return (
       <>
	   
		<div className='APP'>
		

				 <div className="wrapper">

				 <Link to='./home'> <span class="icon-close">
						<i class="fa fa-xmark"></i>

					</span></Link>

				
					
					
				
				

					<div className="login form-box">
						<h2>Register</h2>
						<form action="#"   onSubmit={s}>

					<div className="input-box">

						<label htmlFor="name">Name :</label>
                        <input value={name} id="name" type="text" placeholder="Enter Name plaes "
			               onChange={(e) => setName(e.target.value)}
			                ></input>
							
		                { name ==="" && accept && <p className='error'>UserName is required</p>} 
                     </div>

                      
						<div className="input-box">
                             	<label htmlFor="email" >Email :</label>
                                  <input value={email} id="email" type="email" required placeholder="Enter email plaes "
			                        onChange={(e) => setEmail(e.target.value)}
			                        ></input>
			  
			                   {accept && emailError===422 &&  <p className='error'>Email is already been taken</p>}

							</div>
							<div className="input-box">
							<label htmlFor="password">password :</label>
               
			   <input value={password} id="password" type="password" placeholder="Enter password plaes "
			   onChange={(e) => setPassword(e.target.value)}
			   ></input>
			  
			  {password.length !==0 && password.length <8 &&  <p className='error'> Password must be more than 8 char</p>}
			  
			  </div>

			  <div className="input-box">
			   <label htmlFor="repeat">Repeat Password :</label>
			  
			  
			   <input value={passwordR} id="password" type="repeat" placeholder="Enter password plaes "
			   onChange={(e) => setPasswordR(e.target.value)}
			   ></input>
						   
			   {passwordR !== password && accept && <p className='error'>password dose not match</p>} 
							
     </div>
							<button type="submit" className="btn">register</button>

							
						</form>
					</div>
					
				 </div>
		
					
				
		</div>
		
		</>
)
	}