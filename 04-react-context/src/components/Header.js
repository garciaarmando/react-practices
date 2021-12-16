const Header = ({ handleTheme, theme }) => {
  return (
    <header className={theme}>
      <h2>App without contextAPI</h2>
      <h3>Header</h3>
      <select name="languaje">
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="light">🌞</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark">🌚</label>
      <button>Log In</button>
    </header>
  );
};

export default Header;
