import React from 'react'
import PropTypes from 'prop-types'
import "./button.css";

const Button = (props) => {

    const HandlerCallBackBotton = () => {
        if (props.callback !== undefined) {
            props.callback();
        }
    }

    return (
        <div className="button-container" style={{}} >
            <div
                className='buttonHome'
                onClick={HandlerCallBackBotton}
            >
                {props.label}
            </div>
        </div>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    callback: PropTypes.func,
}



Button.defaultProps = {
    label: 'defaultLabel',
    callback: () => alert('callback')
}

export default Button

