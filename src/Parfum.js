import a from "./image/fond/1-14.jpg"
import b from "./image/fond/13.jpeg"
import c from "./image/fond/f1.jpeg"
import d from "./image/fond/f2.jpg"
import e from "./image/fond/f4.jpg"
import f from "./image/fond/f5.jpg"
import g from "./image/fond/f6.jpg"

import {FaStar} from 'react-icons/fa';
import './Menu.css';
import { Link } from "react-router-dom"
import Layout from "./Layout"
import { Label } from "@mui/icons-material"
import { useEffect, useState } from 'react';
import axios from "axios"
export default function Parfum(){

    const [rating,setRating]=useState(null);
    const [hover,setHover]=useState(null);
    const [product,setProduct] =useState([]);
    const [effectdel,setedl]=useState(0);
    const [nameProduct,setnameProduct]=useState('');
    async function f(i ){
      
    }

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/product/show')
        .then(res =>res.json())
        .then(data =>setProduct(data));
       
    },[effectdel]);



  const showPoducts = product.map((u,index) =>(
    <>
    {u.category === 'Parfum' ?
    <div key={index} className="menu_card">
    
    <div className="menu_image">
        <img src={"http://127.0.0.1:8000/images/"+u.imga}/>
        
    </div>
    <div className="small_card">
        <i className="fa fa-heart"></i>
    </div>
    <div className="menu_info">
       <h2>{u.category}</h2>
       <p>
       {u.name}
       </p>
       <p>
       {u.detal}
       </p>
       <h3>{u.price}</h3>
   
       <div className="menu_icon" >
       {[...Array(5)].map((star,index) =>{
         const currentRating =index +1;
           return(
             <label>
                 <input className="inputmenu" type="radio" name="rating" value={currentRating}
                 onClick={()=>setRating(currentRating)}
                 />
                 
                <FaStar
                 className="star"
                  size={18}
                  color={currentRating<=(hover || rating)? "#ffc107" : "#e4e5e9"}
                  onMouseEnter={()=>setHover(currentRating)}
                  onMouseLeave={()=>setHover(null)}
                  />
             </label>
             
           );
            
       })}
     </div>
      
       <Link className="menu_btn" to="/order">Order Now</Link>
    </div>

      
</div> :"" }
</>
    ));
  

    return(
<>
<Layout>
  
        <div className="menu" id="Menu">
        <h1>Our<span>Menu</span></h1>
        <div className="menu_box">
           
           {showPoducts}
        </div>
   </div>
   </Layout>
   </>
    )
}
