import './App.css';

//import screens
import Home from './screens/Home/Home'
import Login from './screens/Login/Login';

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

function App() {

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
