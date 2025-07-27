
import { RxHamburgerMenu } from "react-icons/rx";
import "../css/Maintop.css"
import SideNavbar from "../Pages/Sidevar";
import { useState } from "react";
import PageHader from "./CenterPart";
import Chat from "./Chat";
import NotificationPanel from "./NotiMassage";
import Account from "./Profile";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
const MainTopnav=()=>{
    const [SideBarActive ,setSideBarActive] = useState(false)
    const [profile ,setProfile] = useState(false);
    const [chat ,setChat] =useState(false)
    const [notifi ,setNotifi] = useState(false);
    return(
        <>
            <div style={{display:"flex",width:"100%"}}>
                <SideNavbar activeCheck = {SideBarActive}/>
                <div id={SideBarActive ? "NavBarMAinDivActive" : "NavBarMAinDiv"}>
                    <div style={{display:"flex",justifyContent:"center",gap:"40px",alignItems:"center"}}>
        
                        <div style={{display:"flex",justifyContent:"center",gap:"40px",alignItems:"center"}}>
                        <div onClick={()=>setSideBarActive(!SideBarActive)} ><RxHamburgerMenu id="Hamburger" /></div>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:"rgba(167, 167, 167, 1)"}}><input type="text" id="SearchIcon" placeholder="Search anything here...."/>
                        <span id="SearchIconeGlass"><HiMiniMagnifyingGlass style={{color:"rgba(122, 122, 122, 1)"}}/></span>
                        </div>
                    </div>
                    </div>
                    <div style={{display:"flex",gap:"20px"}}>
                        <div  onClick={()=>{setChat(!chat)}} ><img src="/massage.png" alt="" /><Chat status={chat}/></div>
                        <div onClick={()=>{setNotifi(!notifi)}}><img src="/Notifications.png" alt="" /><NotificationPanel status={notifi}/></div>
                        <div  onClick={()=>{setProfile(!profile)}}><img src="/Profile.png" alt="" /><Account status={profile}/></div>
                    </div>
                </div>
            </div>
            <PageHader status={SideBarActive}/>
            
        </>
    )
}
export default MainTopnav