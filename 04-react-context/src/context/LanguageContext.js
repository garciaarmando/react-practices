import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "es";
const translations = {
  es: {
    headerTitle: "Mi aplicación CON ContextAPI",
    headerSubtitle: "Mi cabecera",
    headerLight: "🌞 Claro",
    headerDark: "🌚 Oscuro",
    buttonLogin: "Iniciar sesión",
    buttonLogout: "Cerrar sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola usuari@",
    mainContent: "Este es el contenido principal",
    footerTitle: "Este es el pié de página",
  },
  en: {
    headerTitle: "My app WITH ContextAPI",
    headerSubtitle: "My header",
    headerLight: "🌞 Light",
    headerDark: "🌚 Dark",
    buttonLogin: "Log In",
    buttonLogout: "Log Out",
    mainWelcome: "Hello, guest",
    mainHello: "Hello user",
    mainContent: "This is the main content",
    footerTitle: "This is the footer",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = e => {
    // console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguage("es");
      // setTexts(translations.es)
      setTexts(translations[e.target.value]);
    } else {
      setLanguage("en");
      // setTexts(translations.es)
      setTexts(translations[e.target.value]);
    }
  };

  const data = { handleLanguage, texts };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };

export default LanguageContext;
