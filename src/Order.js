import Layout from "./Layout";
import img from "./image/4.png";
import './Order.css';
import axios from "axios";
import { useEffect, useState } from 'react';
export default function Order (){


	const [nameCustomer,setnameCustomer]=useState('');
    const [emailCustomer,setemailCustomer]=useState('');
    const [numberCustomer,setnumberCustomer]=useState('');
    const [nameProduct,setnameProduct]=useState('');
    const [accept,setAccept]=useState(false);
    const [cost,setcost] =useState('');
    
    const [address,setaddress] =useState('');
    
 async   function s(e){ 
        let flage=true;
    e.preventDefault();
    setAccept(true);
    if(nameProduct ==="" || address==="" ||  emailCustomer === "" )
    {
        flage=false;
    }else flage=true;

  try{
               let res= await axios.post('http://127.0.0.1:8000/api/order/create',{
                nameCustomer:nameCustomer,
                emailCustomer:emailCustomer,
                numberCustomer:numberCustomer,
                nameProduct:nameProduct,
                cost:cost,
                address:address,

                
             });
        }
      
     catch(error){
        console.log("error in api");
    }
  }



    return(
        <>
        <Layout>
          <div className="order" id="Order">

<h1><span>Order</span> Now
</h1>
<div className="order_main">
   <div className="order_image">
      <img src={img} />
   </div>
   <form action="#" onSubmit={s}>
           <div className="input">
            <p>Name</p>
            <input type="text" value={nameCustomer} placeholder="you name" onChange={(e) => setnameCustomer(e.target.value) }/>
           </div>

           <div className="input">
            <p>Email</p>
            <input type="email" value={emailCustomer} placeholder="you email" onChange={(e) => setemailCustomer(e.target.value)} />
           </div>

           <div className="input">
            <p>Number</p>
            <input value={numberCustomer}  placeholder="you number"  onChange={(e) => setnumberCustomer(e.target.value)}/>
           </div>

           <div className="input">
            <p>How Much</p>
            <input type="number" value={cost} placeholder="how many order" onChange={(e) => setcost(e.target.value)} />
           </div>

           <div className="input">
            <p>You Order</p>
            <input  placeholder="product name" value={nameProduct} onChange={(e) => setnameProduct(e.target.value)} />
           </div>

           <div className="input">
            <p>Address</p> 
            <input  placeholder="you address" value={address} onChange={(e) => setaddress(e.target.value)}/>
           </div>
           {/* <a href="#" class="order_btn">Order Now</a> */}
           <button type="submit" className="btn">Order Now</button>
   </form>
</div>
</div>
</Layout>
        </>
    )
}