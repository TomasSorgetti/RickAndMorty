import React, { useState } from "react";

const Search = ({ setSearch, handleChange }) => {
  const [form, setForm] = useState({
    name: "",
  });
  const handleFormChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setSearch(value);
    setForm({ ...form, [property]: value });
  };

  const resetForm = () => {
    setForm({
      name: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange()
    resetForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => handleFormChange(event)}
        type="text"
        name="name"
        value={form.name}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
