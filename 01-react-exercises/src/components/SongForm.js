/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Missing values - Interpreter or Song");
      return;
    }

    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Name of the interpeter"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Name of the song"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="send" />
      </form>
    </div>
  );
};

export default SongForm;
