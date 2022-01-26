import './Select.css'
import PropTypes from 'prop-types';
/*fontAwesomeIcon */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
const Select = (props) => {


    const handlerSelect = (e) => {
        let string = e.target.value;
        if (props.callback !== undefined) {
            props.callback(string)
        }
    }

    return (
        <div className='container-select'>
            <label for="cars">{props.label}</label>
            <br />
            <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
            <select onInput={handlerSelect} className='business-account' name="cars">
                <option value="standard">standard</option>
                <option value="premium">premium</option>
                <option value="sponsor">sponsor</option>
            </select>
        </div>
    )
}

Select.propTypes = {
    callback: PropTypes.func,
    label: PropTypes.string,
}

Select.defaultProps = {
    label: "Select"
}

export default Select;