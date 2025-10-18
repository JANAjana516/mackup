import { useEffect, useState } from 'react';
import './Dashboard.css';
import axios from 'axios';


export default function Users(){
    const [users,setUsers] =useState([]);
    const [effectdel,setedl]=useState(0);
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/user/show')
        .then(res =>res.json())
        .then(data =>setUsers(data));
    },[effectdel]);

   async function del(i){
      try{
        const res=await axios.delete(`http://127.0.0.1:8000/api/user/delete/${i}`);
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
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>                    
                
                
                      <i className="fa-solid fa-trash" 
                      onClick={()=>del(u.id)}
                     style={{color:"palevioletred" ,fontSize:"20px" ,padding:"5px"}}>

                     </i> 
            </td>

        </tr>  ));
    return(
          <div style={{padding:'20px', fontSize:'15px'}}>
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>User</th>
                    <th>Email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {showUsers}
                </tbody>
            </table>
       
          </div>
    )
}