import React from "react";
import Layout from "./Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import j from "./image/banat.jpg";
import './Contact.css'

const Contact = () => {
  return (
    <Layout>
   
    <div class="review" id="Review">
	<h1>Worker <span>Review</span></h1>
	<div class="review_box">
	 
		<div class="review_card">
			<div class="review_profile">
				<img src={j} alt="..."/>
			</div>
			<div class="review_text">
				 <h2 class="name">
				   Jana Al-Daboos
				 </h2>

				 
				 <p>
          FrontEnd Devlopment by React  &&
          BackEnd (Laravel Api)
				 </p>
         <i id="icons" class="fa-brands fa-facebook-f"></i>
        <p>Jana Al Daboos</p> 
        <i id="icons" class="fa-brands fa-instagram"></i>
        <p>Jana Al Daboos</p>
        <i id="icons" class="fa-brands fa-twitter"></i>
        <p> not fount</p>
        <i id="icons" class="fa-brands fa-linkedin-in"></i>
        <p>linkedin/jana/@125</p>
			</div>
		</div>
    <div class="review_card">
			<div class="review_profile">
				<img src={j} alt="..."/>
			</div>
			<div class="review_text">
				 <h2 class="name">
				   Hala Ahmad
				 </h2>
				
				 <p>
          Book Design &&
          BackEnd (Laravel Api)
				 </p>
         <i id="icons" class="fa-brands fa-facebook-f"></i>
        <p> Hala Ahmad</p> 
        <i id="icons" class="fa-brands fa-instagram"></i>
        <p> Hala Ahmad</p>
        <i id="icons" class="fa-brands fa-twitter"></i>
        <p>  Hala Ahmad</p>
        <i id="icons" class="fa-brands fa-linkedin-in"></i>
        <p>linkedin/ Hala Ahmad/@125</p>
			</div>
		</div>
    <div class="review_card">
			<div class="review_profile">
				<img src={j} alt="..."/>
			</div>
			<div class="review_text">
				 <h2 class="name">
				   Doaa Qatzeh
				 </h2>
	
				 <p>
          Book Design
				 </p>
         <i id="icons" class="fa-brands fa-facebook-f"></i>
        <p>Doaa Qatzeh</p> 
        <i id="icons" class="fa-brands fa-instagram"></i>
        <p>Doaa Qatzeh</p>
        <i id="icons" class="fa-brands fa-twitter"></i>
        <p> not fount</p>
        <i id="icons" class="fa-brands fa-linkedin-in"></i>
        <p>linkedin/Doaa Qatzeh/@125</p>
			</div>
		</div>
    <div class="review_card">
			<div class="review_profile">
				<img src={j} alt="..."/>
			</div>
			<div class="review_text">
				 <h2 class="name">
				   Raghad Abd-Al Mawla
				 </h2>
		
				 <p>
          File Design
				 </p>
         <i id="icons" class="fa-brands fa-facebook-f"></i>
        <p>Raghad Abd-Al Mawla</p> 
        <i id="icons" class="fa-brands fa-instagram"></i>
        <p>Raghad Abd-Al Mawla</p>
        <i id="icons" class="fa-brands fa-twitter"></i>
        <p> Raghad Abd-Al Mawla</p>
        <i id="icons" class="fa-brands fa-linkedin-in"></i>
        <p>linkedin/Raghad Abd-Al Mawla/@125</p>
			</div>
		</div>
     </div>
     </div>
    </Layout>
  );
};

export default Contact;
