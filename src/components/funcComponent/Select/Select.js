import './Select.css'
import PropTypes from 'prop-types';
/*fontAwesomeIcon */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
const Select = (props) => {


    return (
        <div className='container-select'>
            <label for="cars">{props.label}</label>
            <br />
            <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
            <select className='business-account' name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    )
}

Select.propTypes = {
    label: PropTypes.string,
}

Select.defaultProps = {
    label: "Select"
}

export default Select;