import React from "react";

const Header=({handleDarkMode})=>{
    return(
        <div className="header">
            <h1>To-Do-List</h1>
            <button onClick={()=>handleDarkMode((prev)=>!prev)} className="save">Toggle List</button>


        </div>
    )
}

export default Header