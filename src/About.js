import { BsCart2 } from "react-icons/bs";
import i from './image/aboutt.jpg';
import './About.css';
import Layout from "./Layout";
export default function About(){
    return(
        <>
        <Layout>
           
        
           <div className="about" style={{
             backgroundImage: `url(${i})`
  
           }}>

           </div>
           <div class="containe">
    <div class="sprites">
        <div class="sprites-item">
            <div class="sprites-icon sprites-icon-1">

            </div>
             
            <div class="sprites-info">
                  <h3> Free Delivery</h3>
                  <span>Free Shipping on All Order</span>
            </div>
        </div>
        <div class="sprites-item">
            <div class="sprites-icon sprites-icon-5">

            </div>
            
            <div class="sprites-info">
                  <h3> Free Delivery</h3>
                  <span>Free Shipping on All Order</span>
            </div>
        </div>
        <div class="sprites-item"> 
         <div class="sprites-icon sprites-icon-2">

        </div>
        

        <div class="sprites-info">
              <h3> Free Delivery</h3>
              <span>Free Shipping on All Order</span>
        </div>
    </div>
        <div class="sprites-item">
            <div class="sprites-icon sprites-icon-3">

            </div>
           
            <div class="sprites-info">
                  <h3> Free Delivery</h3>
                  <span>Free Shipping on All Order</span>
            </div>
        </div>
        <div class="sprites-item">
            <div class="sprites-icon sprites-icon-4">

            </div>
            
            <div class="sprites-info">
                  <h3> Free Delivery</h3>
                  <span>Free Shipping on All Order</span>
            </div>
        </div>
    </div>
    </div>
         </Layout>
        </>
    )
}