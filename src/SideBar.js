import {  NavLink } from "react-router-dom";
import './Dashboard.css';
import './all.min.css'

export default  function SideBar(){
    return(
        <div className="side">
           <NavLink to='/dashboard/users' className="item"
           activeClassName="active"
           >
           
              <i className="fa-solid fa-users-line " 
                  
                     style={{color:"white" ,fontSize:"20px" ,padding:"5px",marginRight:"30px"}}>

                     </i> 
            Users
            </NavLink>
           <NavLink to='/dashboard/user/create' className="item"   activeClassName="active">
                    <i className="fa-solid fa-user-plus" 
                  
                  style={{color:"white" ,fontSize:"20px" ,padding:"5px",marginRight:"30px"}}>

                  </i> 
            New User
           </NavLink>

           <NavLink to='/dashboard/products' className="item"   activeClassName="active">
                <i className="fa-brands fa-product-hunt" 
                  
                  style={{color:"white" ,fontSize:"20px" ,padding:"5px",marginRight:"30px"}}>

                  </i> 
            Products
           </NavLink>

           <NavLink to='/dashboard/product/create' className="item"   activeClassName="active">
           <i className="fa-solid fa-plus" 
                  
                  style={{color:"white" ,fontSize:"20px" ,padding:"5px",marginRight:"10px"}}>

                  </i> 
             New Product
           </NavLink>
        </div>
    )
}