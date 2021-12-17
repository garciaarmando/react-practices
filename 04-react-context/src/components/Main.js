const Main = ({ auth, texts, theme }) => {
  return (
    <main className={theme}>
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}

      <p>{texts.mainContent}</p>
    </main>
  );
};

export default Main;
