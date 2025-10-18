// import {useState} from 'react';
// import './Login.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';




// export default function NewProduct(){

//   const [name,setName]=useState('');
//   const [detal,setDetal]=useState('');
//   const [price,setPrice]=useState();
//   const [accept,setAccept]=useState(false);
//   const [imga,setImga]=useState('');
//   const [category,setCategory]=useState('');
  
  
// async function s(e){ 
//   console.log("mi");
//   e.preventDefault();
//   setAccept(true);
// try
// {
//   const formData=new FormData();
//   formData.append('name',name);
//   formData.append('detal',detal);
//   formData.append('price',price);
//   formData.append('imga',imga);
//   formData.append('category',category);
//           let res= await axios.post('http://127.0.0.1:8000/api/product/create',
//                formData, 
              
//           );
//                   console.log(res);
//            if(res.status ===200)
//            {
//             console.log("200");
//            }
//            else
//           {
//             console.log("status error");
//           }
//    }
    
//    catch(error){
//        console.log(error);
//        setAccept(true);
      
//   }
// }

   
//     return(
//         <>
    
//         <div >
        
//           <div style={{width:"90%" , marginLeft:"20PX"}} className='register'>
          
//             <form   className="form " onSubmit={s}   encType='multipart/form-data' >
//               <label htmlFor="name">Name :</label>
//                <input value={name} id="name" type="text" 
//                required placeholder="Enter Name Product.. "
//                 onChange={(e) => setName(e.target.value)}
//                 ></input>
               
               

//                 <label htmlFor="detal" >Descrption :</label>
//                 <input value={detal} id="detal" type="text" 
//                 required placeholder="Enter Descrption The Product... "
//                 onChange={(e) => setDetal(e.target.value)}
//                 ></input>
               
                
//                <label htmlFor="imga">Image :</label>
//                 <input   id="imga" type="file" 
//                 onChange={(e) => setImga(e.target.files.item(0))}
//                 ></input> 


//                 <label htmlFor="category">Category :</label>
//                 <input value={category} id="category" type="text" 
//                 onChange={(e) => setCategory(e.target.value)}
//                 ></input> 
                
//                 <label htmlFor="price">Price :</label>
//                 <input value={price} id="price" type="number" 
//                 onChange={(e) => setPrice(e.target.value)}
//                 ></input> 
                
               
              
               
               
//                 <div style={{textAlign:"center"}}>
//                 <Link to="/dashboard/products">  <button type="submit"  >
//                   Create Product</button></Link>
//                 </div>
                
//             </form>
//         </div>
//         </div>
//         </>
//     )
// }



import './Register.css';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function NewProduct(props) {


    
   const [name,setName]=useState('');
   const [detal,setDetal]=useState('');
   const [price,setPrice]=useState();
   const [accept,setAccept]=useState(false);
   const [imga,setImga]=useState('');
   const [category,setCategory]=useState('');


 async   function s(e){ 
        let flage=true;
    e.preventDefault();
    setAccept(true);

  try{
  const formData=new FormData();
  formData.append('name',name);
  formData.append('detal',detal);
  formData.append('price',price);
  formData.append('imga',imga);
  formData.append('category',category);
          let res= await axios.post('http://127.0.0.1:8000/api/product/create',
               formData, 
              
          );
       console.log(res);
            if(res.status ===200)
            {
             
               window.location.pathname="/dashboard/products";
            }
            else
            window.location.pathname="/dashboard/products";

        }
      
     catch(error){
      console.log(error);
    }
  }
	return (
       <>
	   
	
            <div >
    
                   <div style={{width:"90%" , marginLeft:"20PX"}} className='register'>
                  
                   <form   className="form " onSubmit={s}   encType='multipart/form-data' >
                       <label htmlFor="name">Name :</label>
                      <input value={name} id="name" type="text" 
                       required placeholder="Enter Name Product.. "
                        onChange={(e) => setName(e.target.value)}
                        ></input>
                       
                       
        
                        <label htmlFor="detal" >Descrption :</label>
                        <input value={detal} id="detal" type="text" 
                        required placeholder="Enter Descrption The Product... "
                        onChange={(e) => setDetal(e.target.value)}
                        ></input>
                       
                        
                       <label htmlFor="imga">Image :</label>
                        <input   id="imga" type="file" 
                        onChange={(e) => setImga(e.target.files.item(0))}
                        ></input> 
        
        
                        <label htmlFor="category">Category :</label>
                        <input value={category} id="category" type="text" 
                        onChange={(e) => setCategory(e.target.value)}
                        ></input> 
                        
                        <label htmlFor="price">Price :</label>
                        <input value={price} id="price" type="number" 
                        onChange={(e) => setPrice(e.target.value)}
                        ></input> 
                        
                       
                      
                       
                       
                        <div style={{textAlign:"center"}}>
                   <button type="submit"  >
                          Create Product</button>
                  
                        </div>
                        
                    </form>
                </div>
                </div>
		</>
)
	}