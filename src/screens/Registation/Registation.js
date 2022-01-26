import "./registration.css"
import React, { Component } from 'react'
import loginUtils from "../../utils/login"
// funcComponents
import Input from '../../components/classComponent/Input/Input';
import CheckBox from "../../components/funcComponent/CheckBox/CheckBox";
import Select from "../../components/funcComponent/Select/Select";
import Button from "../../components/funcComponent/Button/Button";
import { use } from "i18next";

class Registation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            genderSelector: [
                {
                    label: "male",
                    checked: false
                },
                {
                    label: "female",
                    checked: false
                },
                {
                    label: "other",
                    checked: true
                },
            ],
            flagRequest: {
                firstName: false,
                lastName: false,
                birthDate: false,
                email: false,
                phoneNumber: false,
                password: false,
                checkPassword: false,
            },
            firstName: '',
            lastName: '',
            birthDate: '',
            genderSelected: 'other',
            email: '',
            phoneNumber: '',
            password: '',
            checkPassword: "",
            select: 'standard',
        }
    }
    /*component did Update */
    componentDidUpdate() {
        console.log(this.state)
    }
    /* methods Settings */
    selectGender = (label) => {
        let array = this.state.genderSelector.map((item) => {
            if (item.label === label) {
                item.checked = true
            } else {
                item.checked = false
            }
            return item
        })
        this.setState({
            genderSelector: array,
            gender: label,
        })
    }
    setFirstName = (e) => {
        let string = e.target.value
        this.setState({
            firstName: string,
        })
    }
    setLastName = (e) => {
        let string = e.target.value
        this.setState({
            lastName: string,
        })
    }
    setBirthday = (e) => {
        let string = e.target.value
        this.setState({
            birthDate: string,
        })
    }
    setEmail = (e) => {
        let string = e.target.value
        this.setState({
            email: string,
        })
    }
    setPassword = (e) => {
        let string = e.target.value
        this.setState({
            password: string,
        })
    }
    setCheckPassword = (e) => {
        let string = e.target.value
        this.setState({
            checkPassword: string,
        })
    }
    setPhoneNumber = (e) => {
        let string = e.target.value
        this.setState({
            phoneNumber: string,
        })
    }
    setSelect = (string) => {
        console.log(string)
        this.setState({
            select: string,
        })
    }
    /*  */
    verifyRegistration = () => {
        let firstName = true;
        let lastName = true;
        let birthDate = true
        let email = true;
        let phoneNumber = true;
        let password = true;
        let checkPassword = true;

        if (loginUtils.validatePassword(this.state.firstName)) {
            firstName = false
        }
        if (loginUtils.validatePassword(this.state.lastName)) {
            lastName = false
        }
        if (loginUtils.validatePassword(this.state.birthDate)) {
            birthDate = false
        }
        if (loginUtils.validateEmail(this.state.email)) {
            email = false
        }
        if (loginUtils.validateNumberPhone(this.state.phoneNumber)) {
            phoneNumber = false
        }
        if (loginUtils.validatePassword(this.state.password)) {
            password = false
        }
        if (this.state.password === this.state.checkPassword) {
            checkPassword = false
        }
        this.setState({
            flagRequest: {
                firstName: firstName,
                lastName: lastName,
                birthDate: birthDate,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
                checkPassword: checkPassword,
            }
        })


    }




    /*  */

    render() {
        return (
            <div className="container-main-registration">
                <div className="registration-container">
                    <h1 className='login-title'>Registration Form</h1>
                    <div className="input-registration-container">
                        <div className='input-left'>
                            <div className="input-row">
                                <label>First Name</label>
                                <Input
                                    placeholder="First Name"
                                    callback={this.setFirstName}
                                    isInvalid={this.state.flagRequest.firstName}
                                />
                            </div>
                            <div className="input-row">
                                <label>Birthday</label>
                                <Input
                                    type="date"
                                    callback={this.setBirthday}
                                    isInvalid={this.state.flagRequest.birthDate}
                                />
                            </div>
                            <div className="input-row">
                                <label>Email</label>
                                <Input
                                    placeholder="Email"
                                    callback={this.setEmail}
                                    isInvalid={this.state.flagRequest.email}
                                />
                            </div>
                            <div className="input-row">
                                <label>Password</label>
                                <Input
                                    placeholder="Password"
                                    type="Password"
                                    callback={this.setPassword}
                                    isInvalid={this.state.flagRequest.password}
                                />
                            </div>


                        </div>
                        <div className='input-right'>
                            <div className="input-row">
                                <label>Last Name</label>
                                <Input
                                    placeholder="Last Name"
                                    callback={this.setLastName}
                                    isInvalid={this.state.flagRequest.lastName}
                                />
                            </div>
                            <div className="checkbox-row">
                                <label>Gender</label>
                                <div className="checkbox-item">
                                    <CheckBox
                                        className="checkbox-gender"
                                        label={this.state.genderSelector[0].label}
                                        checkboxCallback={this.selectGender}
                                        checked={this.state.genderSelector[0].checked}
                                    />
                                </div>
                                <div className="checkbox-item">
                                    <CheckBox
                                        className="checkbox-gender"
                                        label={this.state.genderSelector[1].label}
                                        checkboxCallback={this.selectGender}
                                        checked={this.state.genderSelector[1].checked}
                                    />
                                </div>
                                <div className="checkbox-item">
                                    <CheckBox
                                        className="checkbox-gender"
                                        label={this.state.genderSelector[2].label}
                                        checkboxCallback={this.selectGender}
                                        checked={this.state.genderSelector[2].checked}
                                    />
                                </div>


                            </div>
                            <div className="input-row">
                                <label>Phone Number</label>
                                <Input
                                    placeholder="Phone Number"
                                    callback={this.setPhoneNumber}
                                    isInvalid={this.state.flagRequest.phoneNumber}
                                />
                            </div>
                            <div className="input-row">
                                <label>Confirm Password</label>
                                <Input
                                    placeholder="Confirm Password"
                                    type="Password"
                                    callback={this.setCheckPassword}
                                    isInvalid={this.state.flagRequest.checkPassword}
                                />
                            </div>
                        </div>
                        <div className='input-bottom'>
                            <Select
                                callback={this.setSelect}
                            />
                        </div>
                    </div>
                    <div>
                        <Button
                            callback={this.verifyRegistration}
                        />
                    </div>

                </div>
            </div>
        )

    }

}
export default Registation;