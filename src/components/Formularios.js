import React, { useState } from "react";

/* export default function Formularios() {
  const [name, setName] = useState("");
  const [flavour, setFlavour] = useState("");
  const [language, setLanguage] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    alert("Form send :)");
  };

  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <p>Choose your favorite JS flavour</p>

        <input
          type="radio"
          name="JSflavour"
          id="vanilla"
          value="vanilla"
          onChange={e => setFlavour(e.target.value)}
          defaultChecked
        />
        <label htmlFor="vanilla">VanillaJS</label>

        <input
          type="radio"
          name="JSflavour"
          id="react"
          value="react"
          onChange={e => setFlavour(e.target.value)}
        />
        <label htmlFor="react">React</label>

        <input
          type="radio"
          name="JSflavour"
          id="angular"
          value="angular"
          onChange={e => setFlavour(e.target.value)}
        />
        <label htmlFor="angular">Angular</label>

        <input
          type="radio"
          name="JSflavour"
          id="vue"
          value="vue"
          onChange={e => setFlavour(e.target.value)}
        />
        <label htmlFor="vue">Vue</label>

        <input
          type="radio"
          name="JSflavour"
          id="svelte"
          value="svelte"
          onChange={e => setFlavour(e.target.value)}
        />
        <label htmlFor="svelte">Svelte</label>

        <p>Choose your favorite programming language</p>

        <select
          name="lenguage"
          onChange={e => setLanguage(e.target.value)}
          defaultValue="">
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
        </select>
        <br />

        <label htmlFor="terms">I accept terms and conditions</label>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={e => setTerms(e.target.checked)}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
 */
export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Form send :)");
  };

  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <p>Choose your favorite JS flavour</p>

        <input
          type="radio"
          name="JSflavour"
          id="vanilla"
          value="vanilla"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="vanilla">VanillaJS</label>

        <input
          type="radio"
          name="JSflavour"
          id="react"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>

        <input
          type="radio"
          name="JSflavour"
          id="angular"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>

        <input
          type="radio"
          name="JSflavour"
          id="vue"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>

        <input
          type="radio"
          name="JSflavour"
          id="svelte"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>

        <p>Choose your favorite programming language</p>

        <select name="lenguage" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
        </select>
        <br />

        <label htmlFor="terms">I accept terms and conditions</label>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
