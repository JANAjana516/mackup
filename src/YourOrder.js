import React from "react";
import Layout from "./Layout";

import o from "./image/back.jpg";
import './Dashboard.css';
import { useEffect, useState } from 'react';

import axios from 'axios';

const YourOrder = () => {

    const [users,setUsers] =useState([]);
    const [effectdel,setedl]=useState(0);
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/order/show')
        .then(res =>res.json())
        .then(data =>setUsers(data));
    },[effectdel]);

   async function del(i){
      try{
        const res=await axios.delete(`http://127.0.0.1:8000/api/order/delete/${i}`);
      if( res.status===200){
        setedl( (j)=> {
            return j + 1;
        });}
    
      }
      catch
      {
        console.log('update');
      }
  
    }

    const showUsers = users.map((u,index) =>(
        <tr key={index}>    
            <td>{index+1}</td> 
            <td>{u.nameProduct}</td>
            <td>{u.cost}</td>
                 <td>Done</td>
            

            
            <td>                    
                
                
                      <i className="fa-solid fa-trash" 
                      onClick={()=>del(u.id)}
                     style={{color:"palevioletred" ,fontSize:"20px" ,padding:"5px"}}>

                     </i> 
            </td>

            

        </tr>  ));


  return (
    <Layout>
           <div style={{padding:'20px', fontSize:'15px'}}>
            <table>
                <thead>
                    <tr>
                    <th></th>
                    <th>NameProduct</th>
                    <th>How Math</th>
                    <th>State</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                        {showUsers}
                </tbody>
            </table>
       
          </div>
    </Layout>
  );
};

export default YourOrder;
