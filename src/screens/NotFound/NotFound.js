import './NotFound.css'
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
/* assets */
import logoNotFound from "../../assets/imgs/logo-page_not_found.gif";


/* funcComponets */
import Button from '../../components/funcComponent/Button/Button'
class NotFound extends Component {

    constructor(props) {
        super(props)
        this.state = {
            flageToGoHome: false,
        }
    }

    /* methods to navigate */
    navigateToHome = () => {
        this.setState(
            {
                flageToGoHome: true,
            }
        )
    }

    render() {
        return (
            <div className='not-found-container'>
                <div className='not-found-alert'>
                    <img src={logoNotFound} />
                    <h1>Page not found</h1>
                    <Button
                        label='Vai a home'
                        callback={this.navigateToHome}
                    />
                </div>
                {
                    this.state.flageToGoHome === true &&
                    <Navigate to="/" replace={true} />
                }

            </div>
        )

    }

}
export default NotFound;