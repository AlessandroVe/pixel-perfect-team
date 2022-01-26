import "./checkBox.css"
import PropTypes from 'prop-types'

const CheckBox = (props) => {

    const handlerOnClick = (e) => {
        if (props.checkboxCallback !== undefined) {
            props.checkboxCallback(props.label)
        }
    }

    return (
        <>
            <input
                type="checkbox"
                className={`checkbox-focus ${props.className}`}
                onClick={handlerOnClick}
                checked={props.checked}
            ></input>
            <label>{props.label}</label>
        </>

    )
}

CheckBox.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    checkboxCallback: PropTypes.func,
    checked: PropTypes.bool
}

CheckBox.defaultProps = {
    label: "checkbox"
}

export default CheckBox