import { useState } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const initialLanguage = "es";
const initialAuth = null;
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

const MyPageContext = () => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);

  const handleLanguage = e => {
    console.log(e.target.value);
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

  const handleAuth = e => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  return (
    <div className="my-page">
      <ThemeProvider>
        <HeaderContext
          auth={auth}
          handleAuth={handleAuth}
          handleLanguage={handleLanguage}
          texts={texts}
        />
        <MainContext auth={auth} texts={texts} />
        <FooterContext texts={texts} />
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;
