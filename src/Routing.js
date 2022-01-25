import './App.css';

//import screens
import Home from './screens/Home/Home'
import Login from './screens/Login/Login';
import Registration from './screens/Registation/Registation'
import ForgotPassword from './screens/ForgotPassword/ForgotPassword'
import NotFound from './screens/NotFound/NotFound'
/*  */

import { Routes, Route } from "react-router-dom";

// import i18n
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import locales
import translationEn from './assets/locales/en.json'
import translationIt from './assets/locales/it.json'
i18n
  .use(initReactI18next)
  .init({
    resources: {
      it: { translation: translationIt },
      en: { translation: translationEn },
    },
    lng: "it",
    fallbackLng: "it",
    interpolation: { escapeValue: false },
  });

function Routing() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Routing;
