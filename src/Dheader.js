import { Link } from "react-router-dom"
import './Dashboard.css';
export default function Dheader(){
    return(
        <div className="d-flex top">
            <h1>Jana-Mackup</h1>
            <Link to="/home" className="register-nav">Go To Web Site</Link>
        </div>
    )
}