import React, { useState } from 'react'
import "./translator.css"

import i18n from 'i18next'

const Translator = () => {

    const [ lang, setLang ] = useState("it")

    const translate = ( lng ) => () =>  {
        i18n.changeLanguage(lng)
        setLang(lng)
    }

    return (
        <div className="translator-container">
            
            <div className={ lang === "it" ? "language selected" : "language"} onClick={translate("it")}> 
                IT
            </div>
        
            <div style={{marginLeft: 5, marginRight: 5}}> 
                |
            </div>
            
            <div className={ lang === "en" ? "language selected" : "language"} onClick={translate("en")}> 
                EN
            </div>
        
        
        </div>
    )
}

export default Translator
