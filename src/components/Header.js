import React from "react";

const Header=({handleDarkMode})=>{
    return(
        <div className="header">
            <h1>Notes</h1>
            <button onClick={()=>handleDarkMode((prev)=>!prev)} className="save">Toggle Node</button>


        </div>
    )
}

export default Header