import React from 'react'
import { NavLink } from 'react-router-dom'

const DonateButton = (props) =>{
    return(
        <button className="donateButton">
        
        <NavLink className = "donate_link" exact 
        to={{
            pathname : "/donate",
            state : {
                title : props.title
            }
        }}>
        Donate
        </NavLink>
     
        </button>
    )
}

export default DonateButton;