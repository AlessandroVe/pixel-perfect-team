import "./login.css"
import React, { Component } from 'react'
import { Navigate } from "react-router-dom";

/* assets */
import computerImg from '../../assets/imgs/img1.png'
/* func Components*/
import Input from '../../components/classComponent/Input/Input'
import Button from '../../components/funcComponent/Button/Button'
/*  */
import Translator from "../../components/funcComponent/Translator/Translator"

/* utils */
import loginUtils from "../../utils/login"
import cryptoUtils from "../../utils/encrypt"

// i18n
import { withTranslation } from 'react-i18next';



class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            navigateToForgotPassword: false,
            navigateToHome: false,
            navigateToRegistation: false,
            errorFlag: false,
            wrongEmail: false,
            wrongPassword: false,
            mouseX: 0,
            mouseY: 0,
            inputEmail: "",
            inputPassword: "",
            user: null,
            wrongEmail: false,
            wrongPassword: false
        }
    }
    /*momentario*/
    componentDidMount() {
    }
    /*  */

    handleMouseMove = (e) => {
        let mouseX = (((e.pageX / 7) * -1) + 100)
        let mouseY = (((e.pageY / 7) * 1) + -60)

        this.setState({ mouseX: mouseX, mouseY: mouseY })
    }

    handleMouseLeave = () => {
        this.setState({ mouseX: 0, mouseY: 0 })
    }
    /* verify credentials */
    verifyLogin = () => {
        let email = this.state.inputEmail
        let psw = this.state.inputPassword

        let wrongEmail = false;
        let wrongPsw = false

        if (!loginUtils.validateEmail(email)) {
            wrongEmail = true
        } else {
            wrongEmail = false
        }

        if (!loginUtils.validatePassword(psw)) {
            wrongPsw = true
        } else {
            wrongPsw = false
        }

        this.setState({ wrongEmail: wrongEmail, wrongPassword: wrongPsw })

        if (loginUtils.validateEmail(email) && loginUtils.validatePassword(psw)) {
            this.doLogin()
        }
    }
    /* accesso alla home */
    doLogin = () => {
        let existingUsersEncrypted = JSON.parse(localStorage.getItem("arrayOfUsers"));


        let usersDecripted = existingUsersEncrypted.map((item) => {
            return cryptoUtils.decryptData(item, "123")
        })

        let navigateFlag = false;
        let errorFlag = true;
      
        let user = null
        for (let x = 0; x < usersDecripted.length; x++) {
            if (this.state.inputEmail === usersDecripted[x].email && this.state.inputPassword === usersDecripted[x].password) {
                navigateFlag = true
                user = usersDecripted[x];
                errorFlag = false

            }
        }
        this.setState(
            {
                navigateToHome: navigateFlag,
                errorFlag: errorFlag,
                user: user,
            }
        )
    }
    /*  */
    /* accesso screen ForgotPassword */
    navigateToForgotPassword = () => {
        this.setState(
            {
                navigateToForgotPassword: true,
            }

        )
    }
    /* accesso screen registation */
    navigateToRegistation = () => {
        this.setState(
            {
                navigateToRegistation: true,
            }

        )
    }

    /* setting login's password and email */
    getMail = (e) => {
        this.setState({ inputEmail: e.target.value })
    }
    getPassword = (e) => {
        this.setState({ inputPassword: e.target.value })
    }


    render() {

        return (
            <div className="container-main-login">

                <div className="login-container">
                    <div className="login-left">
                        <div className="image-wrapper"
                            onMouseMove={this.handleMouseMove}
                            onMouseLeave={this.handleMouseLeave}
                        >
                            <img
                                className='image'
                                style={{ transform: `rotateX(${this.state.mouseY}deg) rotateY(${this.state.mouseX}deg)` }}
                                src={computerImg} />
                        </div>
                    </div>
                    <Translator
                        callback={this.props.changeLanguage}
                    />
                    <div className="login-right">
                        <div className='login-right-container'>
                            <h1 className='login-title'>{this.props.t("LOGIN.loginTitle")}</h1>
                            {
                                this.state.errorFlag &&
                                <span className="error-span">{this.props.t("LOGIN.error")}</span>
                            }
                            

                            <Input
                                placeholder="Email"
                                ico="fas fa-envelope"
                                marginTop={50}
                                callback={this.getMail}
                                isInvalid={this.state.wrongEmail}
                                value={this.state.inputEmail}
                            />

                            <Input
                                placeholder={"Password"}
                                ico="fas fa-lock"
                                marginTop={8}
                                callback={this.getPassword}
                                type={"password"}
                                isInvalid={this.state.wrongPassword}
                                value={this.state.inputPassword}
                            />

                            <Button
                                label={this.props.t("LOGIN.loginButtonText")}
                                callback={this.verifyLogin}
                            />


                            <p className='login-text' onClick={this.navigateToForgotPassword}>{this.props.t("LOGIN.forgotUser")}
                                <span className='login-link'> Password?</span>
                            </p>
                        </div>
                        <p className='login-link login-footer' onClick={this.navigateToRegistation}>
                            {this.props.t("LOGIN.createAccount")}
                            <i style={{ marginLeft: 15 }} className="fas fa-long-arrow-alt-right">
                            </i>
                        </p>
                    </div>
                </div>
                {
                    this.state.navigateToHome === true &&
                    <Navigate to="/" replace={true}
                        state={
                            {
                                user: this.state.user,
                            }
                        }
                    />
                }
                {
                    this.state.navigateToRegistation === true &&
                    <Navigate to="/registration" replace={true} />
                }
                {
                    this.state.navigateToForgotPassword === true &&
                    <Navigate to="/forgot-password" replace={true} />
                }
            </div>




        )

    }
}

export default withTranslation()(Login);
