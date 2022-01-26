import React, { Component } from 'react'
import "./input.css"
import PropTypes from 'prop-types';

export default class Input extends Component {

    constructor(props) {
        super(props)

        this.state = {
            focussed: false,
        }
    }

    handleOnFocus = () => {
        this.setState({ focussed: true })

    }

    handleOnBlur = () => {
        this.setState({ focussed: false })
    }


    handleOnChange = (e) => {
        this.props.callback(e)
    }

    render() {
        return (
            <div
                style={{ marginTop: this.props.marginTop }}
                className={this.state.focussed ? "input-container container-focus" : "input-container"}
            >
                <div>
                    <i className={this.state.focussed ? `${this.props.ico} ico ico-focus` : `${this.props.ico} ico`}></i>
                </div>
                <div style={{ flex: 1 }}>
                    <input
                        value={this.props.value}
                        placeholder={this.props.placeholder}
                        onFocus={this.handleOnFocus}
                        onBlur={this.handleOnBlur}
                        className={this.state.focussed ? "inputStyle placeholder-focus" : "inputStyle"}
                        onChange={this.handleOnChange}
                        type={this.props.type}
                    />
                </div>
                <div>
                    {this.props.isInvalid
                        ? <i className="fas fa-exclamation-circle ico-alert"></i>
                        : null
                    }

                </div>




            </div>


        )
    }
}

Input.defaultProps = {
    placeholder: "Password",
    type: "input",
    marginTop: 0
};

Input.propTypes = {
    isInvalid: PropTypes.bool,
    callback: PropTypes.func,
    class: PropTypes.string
}
