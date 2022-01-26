import "./registration.css"
import React, { Component } from 'react'

// funcComponents
import Input from '../../components/classComponent/Input/Input';
import CheckBox from "../../components/funcComponent/CheckBox/CheckBox";

class Registation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            genderSelector: [
                {
                    label: "male",
                    checked: true
                },
                {
                    label: "female",
                    checked: false
                },
                {
                    label: "other",
                    checked: false
                },
            ]
        }
    }

    selectGender = (label) => {
        let array = this.state.genderSelector.map( (item)=> {
            if(item.label === label) {
                item.checked =  true
            } else {
                item.checked = false
            }
            return item
        })
        this.setState( {
            genderSelector: array
        })
    }

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
                                />
                            </div>
                            <div className="input-row">
                                <label>Birthday</label>
                                <Input
                                    placeholder="First Name"
                                    type="date"
                                />
                            </div>
                            <div className="input-row">
                                <label>Email</label>
                                <Input
                                    placeholder="Email"
                                />
                            </div>

                        </div>
                        <div className='input-right'>
                            <div className="input-row">
                                <label>Last Name</label>
                                <Input
                                    placeholder="Last Name"
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
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}
export default Registation;