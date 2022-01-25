import "./home.css"
import React, { Component } from 'react'
import Login from "../components/classComponent/Login/Login"


export default class Home extends Component {

    render() {  
        return (
            <div className="home-container">
                <Login />
            </div>
        )
    }
}
