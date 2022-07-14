import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Nav(){

    const [toggle,setToggle]=React.useState(true);

    const checkToggle =()=>{
        return(toggle? "-100%":"0")
    }

    let style ={
        right: checkToggle()
    }

    return(
        <nav>
            <a href="#" className={"logo"}>Logo</a>
            <div className="link-wrapper">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Products</a>
            </div>
            <div className="drop-down" onClick={()=>setToggle(!toggle)}>
                <FontAwesomeIcon icon={"bars"}/>
            </div>
            <div className="side-bar" style={style}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Products</a>
            </div>
        </nav>
    )
}

export default Nav;