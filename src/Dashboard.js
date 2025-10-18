import Dheader from "./Dheader";
import SideBar from "./SideBar";
import './Dashboard.css';

import { Outlet } from "react-router-dom";

export default function Dashboard(){
    return(
        <div>
              <Dheader/>
            <div>
              
                <div className="content-flex">
                  <SideBar />
                  <div className="dash-home" style={{width:'80%'}}>
                    <Outlet/>
                    
                  </div>
                </div>
            </div>
        </div>
    )
}