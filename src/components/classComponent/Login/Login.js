import "./login.css"
import React, { Component } from 'react'
import computerImg from '../../../assets/imgs/img1.png'
import Input from '../../classComponent/Input/Input'
import Button from '../../funcComponent/Button/Button'
import Translator from "../../funcComponent/Translator/Translator"
import loginUtils from "../../../utils/login"

// i18n
import { withTranslation } from 'react-i18next';


class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
            mouseX: 0,
            mouseY: 0,
            inputEmail: "",
            inputPassword: "",
            wrongEmail: false,
            wrongPassword: false
        }
    }


    handleMouseMove = (e) => {
        let mouseX = (((e.pageX / 7) * -1) + 100)
        let mouseY = (((e.pageY / 7) * 1) + -60)

        this.setState({ mouseX: mouseX, mouseY: mouseY})
    }

    handleMouseLeave = () => {
        this.setState({ mouseX: 0, mouseY: 0})
    }

    verifyLogin = () => {

        let email = this.state.inputEmail
        let psw = this.state.inputPassword
        
        let wrongEmail = false;
        let wrongPsw = false

        if (!loginUtils.validateEmail(email)){
            wrongEmail = true
        } else {
            wrongEmail = false
        } 

        if (!loginUtils.validatePassword(psw)){
            wrongPsw = true
        } else {
            wrongPsw = false
        }

        this.setState({ wrongEmail: wrongEmail, wrongPassword: wrongPsw})

        if (  loginUtils.validateEmail(email) && loginUtils.validatePassword(psw)  ) {
            alert("login ok")
        }



    }
    getMail = (e) => {
        
        this.setState({inputEmail: e.target.value})
    }
    
    getPassword = (e) => {
        this.setState({inputPassword: e.target.value})
    }
    
    
    render() {

    return (
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


                    <p className='login-text'>{this.props.t("LOGIN.forgotUser")} <span className='login-link'>Username / Password?</span></p>
                </div>
                <p className='login-link login-footer'>{this.props.t("LOGIN.createAccount")}<i style={{ marginLeft: 15 }} className="fas fa-long-arrow-alt-right"></i></p>
            </div>
        </div>




    )

    }
}

export default withTranslation()(Login);
