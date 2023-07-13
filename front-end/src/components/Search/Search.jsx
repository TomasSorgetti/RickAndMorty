import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDataByName } from "../../redux/actions/actions";
const Search = () => {
    const dispatch = useDispatch()
  const [form, setForm] = useState({
    name: "",
  });
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
    };
    const handleSubmit = () => {
      dispatch(getDataByName(form.name))
    }
  return (
    <form>
      <input
        onChange={(event) => handleChange(event)}
        type="text"
        name="name"
        value={form.name}
      />
      <button type="button" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default Search;
