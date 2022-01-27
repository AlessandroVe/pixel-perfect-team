import "./home.css"
import React, { Component } from 'react'
import { useState, useEffect } from "react"
import { useNavigate, useParams, useLocation } from "react-router-dom";

/* screens */
import Login from '../Login/Login'

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    /* component did mount */
    useEffect(() => {
        if (location.state === null) {
            navigate("/login")
        }
    }, [])
    /*  */

    return (
        <div className="home-container">
            io sono home
        </div>
    )
}
export default Home
