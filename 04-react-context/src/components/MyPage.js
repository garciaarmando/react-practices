import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const initialTheme = "light";
const initialLanguage = "es";
const initialAuth = null;
const translations = {
  es: {
    headerTitle: "Mi aplicación sin ContextAPI",
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
    headerTitle: "My app without ContextAPI",
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

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);

  const handleTheme = e => {
    console.log(e.target.value);
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

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
      <Header
        auth={auth}
        handleAuth={handleAuth}
        handleLanguage={handleLanguage}
        handleTheme={handleTheme}
        texts={texts}
        theme={theme}
      />
      <Main auth={auth} texts={texts} theme={theme} />
      <Footer texts={texts} theme={theme} />
    </div>
  );
};

export default MyPage;
