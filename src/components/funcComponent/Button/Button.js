import React from 'react'
import "./button.css";

const Button = (props) => {

    return (
        <div className="button-container" style={{}} >
            <div
                className='buttonHome'
                onClick={props.callback}
            >
                {props.label}

            </div>

        </div>
    );
}


Button.defaultProps = {
    label: 'defaultLabel',
    callback: () => alert('callback')
}

export default Button

