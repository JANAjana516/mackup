import Layout from "./Layout"
import a from "./image/1.png";
import b from "./image/parf.jpg";
import c from "./image/2.png";
import d from "./image/e5.jpg";
import e from "./image/fond.jpeg";
import f from "./image/shado.jpg";
import m from "./image/maskara.jpeg"
import "./Product.css";
import { Link} from 'react-router-dom';
export default function ProductMenu(){
    return(
        <>
        <Layout>
        <div className="gallary" id="Gallary">
        <h1>Our<span>Product</span></h1>
        <div className="gallary_image_box">
           <div className="gallary_image">
               <img src={e}/>
              
               <Link to="/menu" className="gallary_btn"> Show</Link>
           </div>
           <div className="gallary_image">
               <img src={c}/>
              
               <Link to="/shampomenu" className="gallary_btn"> Show</Link>
           </div>

           <div class="gallary_image">
               <img src={a}/>
             
               <Link to="/rouag" className="gallary_btn">Show</Link>
           </div>
           <div className="gallary_image">
               <img src={b}/>
              
               <Link to="/parfum" className="gallary_btn">Show</Link>
           </div>

           <div class="gallary_image">
               <img src={m}/>
             
               <Link to="/meascara" className="gallary_btn">Show</Link>
           </div>
           <div className="gallary_image">
               <img src={d}/>
              
               <Link to="/eyeliner" className="gallary_btn"> Show</Link>
           </div>
           <div className="gallary_image">
               <img src={f}/>
              
               <Link to="/shadow" className="gallary_btn"> Show</Link>
           </div>
        
           

        </div>
   </div> 
   </Layout>
        </>
    )
}