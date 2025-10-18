// import './Header.css';
// import { BsCart2 } from "react-icons/bs";
// import { Link ,NavLink} from 'react-router-dom';
// export default function Header(){
//   function logout(){
//     window.localStorage.removeItem('email');
//     window.location.pathname='/home';
//   }
//     return(
//    <div className='container'>
//      <nav  className='d-flex'>
//        <div  className='d-flex navbar-links-container '>
//         <NavLink to="/home" className='navv'  activeClassName="active">Home</NavLink>
       
//         <NavLink to="/product" className='navv' activeClassName="active">Products</NavLink>
//         <NavLink to="/order" className='navv' activeClassName="active">Order</NavLink>
//         <NavLink to="/about" className='navv' activeClassName="active">About</NavLink>
//         <NavLink to="/contact" className='navv' activeClassName="active">Contact</NavLink>
        
//         </div>

//         <div  className='d-flex' >
//         <BsCart2 className="navbar-cart-icon" />
//           {
//             !window.localStorage.getItem('email') ? 
//             <>
//            <Link to="/register"  style={{textAlign: "center"}} className='register-nav' activeClassName="active">
//             Register
//             </Link>
//             <Link to="/login" style={{textAlign: "center"}} className='register-nav'>
//             Login
//             </Link>
//             </>
//             :
//             <div className='register-nav' onClick={logout}>Log Out</div>
//           }
           
//         </div>
       

        
//      </nav>
//      </div>
//     )
// }


/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import './Header.css';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link ,NavLink} from 'react-router-dom';
import { Home } from "@mui/icons-material";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      // text: "Home",
      text:<NavLink to="/home" className='navv'>Home</NavLink>,
      icon: <HomeIcon  className="navbar-cart-icon"/>,
    },
    {
      text:  <NavLink to="/about" className='navv' activeClassName="active">About</NavLink>,
      icon: <InfoIcon className="navbar-cart-icon" />,
    },
    {
      text: <NavLink to="/order" className='navv' activeClassName="active">Order</NavLink>,
      icon: <CommentRoundedIcon className="navbar-cart-icon" />,
    },
    {
      
      text:<NavLink to="/contact" className='navv' activeClassName="active">Contact</NavLink>,
      icon: <PhoneRoundedIcon className="navbar-cart-icon"/>,
    },
    {
      // text: "Cart",
      
       text:<NavLink to="/product" className='navv' activeClassName="active">Products</NavLink>,
      icon: <ShoppingCartRoundedIcon className="navbar-cart-icon"/>,
    },
  ];

   function logout(){
     window.localStorage.removeItem('email');
     window.location.pathname='/home';
  }

  return (
    <nav>
     
      <div className="navbar-links-container">
             <NavLink to="/home" className='navv'  activeClassName="active">Home</NavLink>
              <NavLink to="/product" className='navv' activeClassName="active">Products</NavLink>
              <NavLink to="/order" className='navv' activeClassName="active">Order</NavLink>
              <NavLink to="/about" className='navv' activeClassName="active">About</NavLink>
              <NavLink to="/contact" className='navv' activeClassName="active">Contact</NavLink>
       
      </div>
      <div  className='d-flex' >
        <Link to="/YourOrder" style={{textAlign: "center", cursor:"pointer"}} ><BsCart2 className="navbar-cart-icon" /></Link> 
           {
             !window.localStorage.getItem('email') ? 
             <>
            <Link to="/register"  style={{textAlign: "center"}} className='register-nav' activeClassName="active">
             Register
             </Link>
            <Link to="/login" style={{textAlign: "center"}} className='register-nav'>
            Login
            </Link>
             </>
             :
             <div className='register-nav' onClick={logout}>Log Out</div>
          }
           
         </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 className="navbar-cart-icon" onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Header;
