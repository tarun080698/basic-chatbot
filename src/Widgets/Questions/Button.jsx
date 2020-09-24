import React from 'react'
import "./Button.css"

const Button = props => {

    const handleClick = () => { 
        props.action(props.goto, props.value)
    }
        return (
            <div >
                <button className="opt-btn"onClick={() => handleClick()}>{props.value}</button>
            </div>
        )
    }

export default Button
