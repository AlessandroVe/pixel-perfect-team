import "./registration.css"
import React, { Component } from 'react'

// funcComponents
import Input from '../../components/classComponent/Input/Input';


class Registation extends Component {

    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div className="container-main-registration">
                <div className="registration-container">
                    <h1 className='login-title'>Registration Form</h1>
                    <div className="input-registration-container">
                        <div className='input-left'>
                            <label>First Name</label>
                            <Input
                            placeholder="First Name"
                            />

                        </div>
                        <div className='input-right'>
                        <label>Last Name</label>
                            <Input
                            placeholder="Last Name"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}
export default Registation;