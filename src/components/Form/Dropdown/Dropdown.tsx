import React, { useState } from "react";
import "./index.css"


interface Props{
    list:string[],
    change:any
}
const Dropdown:React.FC<Props> = ({list,change}) => {

    return(
        <div>
            <select onChange={(e) => {
                change(e)
            }} className="dropdown font-heading border-2 focus:border-blue-400 text-[black]">
                {list.map((item,index) => {
                    return <option key={index} className="text-[black]">{item}</option>
                })}
            </select>

        </div>

  
    )
}

export default Dropdown;