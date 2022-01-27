import "./forgotPassword.css"
import React, { Component } from 'react'
import { Navigate } from "react-router-dom";

import Input from '../../components/classComponent/Input/Input'
import Button from '../../components/funcComponent/Button/Button'

import loginUtils from "../../utils/login"
import cryptoUtils from "../../utils/encrypt"

/*fontAwesomeIcon */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

import { withTranslation } from 'react-i18next';

class ForgotPassword extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            checkPassword: '',
            navigateToLogin : false,
            flagRequest: {
                email: false,
                password: false,
                checkPassword: false
            }
        }
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
        let existingUsersEncrypted = JSON.parse(localStorage.getItem("arrayOfUsers"));

        let usersDecripted = existingUsersEncrypted.map((item) => {
            return cryptoUtils.decryptData(item, "123")
        })

        let userIndex = null

        for (let x = 0; x < usersDecripted.length; x++) {
            if (this.state.email === usersDecripted[x].email) {
                userIndex = x
            }
        }

        usersDecripted[userIndex].password = this.state.password

        existingUsersEncrypted = usersDecripted.map((item) => {
            return cryptoUtils.encryptData(item)
        })

        localStorage.setItem("arrayOfUsers", JSON.stringify(existingUsersEncrypted))

        this.navigateToLogin()
    }

    navigateToLogin = () => {
        this.setState({
            navigateToLogin : true
        })
    }

    render() {
        return (
            <div className='container-main-forgot'>
                <div className='forgot-container'>
                    <h1 className='forgot-title'>{this.props.t("FORGOTPASSWORD.title")}</h1>
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
                            <label>{this.props.t("FORGOTPASSWORD.confirmPassword")}</label>
                            <Input
                                placeholder={this.props.t("FORGOTPASSWORD.confirmPassword")}
                                type="password"
                                callback={this.setCheckPassword}
                                isInvalid={this.state.flagRequest.checkPassword}
                            />
                        </div>
                        <Button
                            callback={this.verifyChangePassword}
                            label={this.props.t("FORGOTPASSWORD.changePassword")}
                        />
                    </div>
                    <span className="forgot-link" onClick={this.navigateToLogin}><FontAwesomeIcon size="lg" icon={faLongArrowAltLeft}></FontAwesomeIcon></span>
                </div>
                {
                    this.state.navigateToLogin && 
                    <Navigate to="/login" replace={true} />
                }

            </div>
        )

    }

}
export default withTranslation()(ForgotPassword);