import React, { Component } from 'react'
import "./forgotPassword.css"

import Input from '../../components/classComponent/Input/Input'
import Button from '../../components/funcComponent/Button/Button'

import loginUtils from "../../utils/login"



class ForgotPassword extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            checkPassword: '',
            flagRequest: {
                email: false,
                password: false,
                checkPassword: false  
            }
        }
    }

    componentDidUpdate() {
        console.log(this.state)
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
    // function that verifies the input
    verifyChangePassword = () => {
        let email = true;
        let password = true;
        let checkPassword = true;

        if (loginUtils.validateEmail(this.state.email)) {
            email = false
        }
        if (loginUtils.validatePassword(this.state.password)) {
            password = false
        }
        if (this.state.password === this.state.checkPassword) {
            checkPassword = false
        }

        this.setState({
            flagRequest: {
                email: email,
                password: password,
                checkPassword: checkPassword,
            }
        })

        if (
            email === false &&
            password === false &&
            checkPassword === false
        ) {
            this.changePassword()
        }
    }

    //Function that change your password
    changePassword = () => {

    }

    render() {
        return (
            <div className='container-main-forgot'>
                <div className='forgot-container'>
                    <h1 className='forgot-title'>Change Password</h1>
                    <div className="input-forgot-container">
                        <div className="input-row">
                            <label>Email</label>
                            <Input
                                placeholder="email"
                                callback={this.setEmail}
                                isInvalid={this.state.flagRequest.email}
                            />
                        </div>
                        <div className="input-row">
                            <label>Password</label>
                            <Input
                                placeholder="password"
                                type="password"
                                callback={this.setPassword}
                                isInvalid={this.state.flagRequest.password}
                            />
                        </div>
                        <div className="input-row">
                            <label>Confirm Password</label>
                            <Input
                                placeholder="confirm password"
                                type="password"
                                callback={this.setCheckPassword}
                                isInvalid={this.state.flagRequest.checkPassword}
                            />
                        </div>
                        <Button
                            callback={this.verifyChangePassword}
                            label="Cambia Password"
                        />
                    </div>
                </div>

            </div>
        )

    }

}
export default ForgotPassword;