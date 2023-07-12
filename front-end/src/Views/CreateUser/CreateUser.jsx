import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import validate from "./Validation";

const CreateUser = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    password: "",
    confirm: "",
    validation:"",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setErrors(validate({ ...form, [property]: value }, errors));
    setForm({ ...form, [property]: value });
  };
  const resetForm = () => {
    setForm({
      name: "",
      password: "",
      confirm: "",
    });
  };
  const handleSubmit = async () => {
    if (
      form.name &&
      !errors.name &&
      form.password &&
      !errors.password &&
      form.confirm &&
      !errors.confirm
    ) {
      try {
        await axios
          .post("http://localhost:3001/users", form)
          .then((response) => {
            if (response) {
              resetForm();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Account Created",
                text: "Thank you for create a account",
                showConfirmButton: false,
                timer: 2500,
              }).then(() => {
                navigate("/login");
              });
            }
          });
      } catch (error) {
          console.log(error);
          if (error.response.data.error==="Validation error") {
              setErrors({...errors, validation:`The nickName: ${form.name} is already taken`})
          }
      }
    }
  };

  return (
    <main className="w-full ">
      <form className="w-10/12 p-5 m-auto flex flex-col justify-center items-center bg-blue-300 gap-4 rounded">
        <h2>Create User</h2>
        {errors.validation && errors.validation !== "" && (
          <span className="text-red-600">{errors.validation}</span>
        )}
        <article className="w-11/12 m-auto flex flex-col gap-5">
          <div className="relative">
            <label htmlFor="">NickName:</label>
            <input
              className="w-full p-1 rounded"
              onChange={handleChange}
              type="text"
              name="name"
              value={form.name}
            />
            {errors.name && errors.name !== "" && (
              <span className="text-red-600 absolute left-0 bottom-[-25px]">
                {errors.name}
              </span>
            )}
          </div>
          <div className="relative">
            <label htmlFor="">Password</label>
            <input
              className="w-full p-1 rounded"
              onChange={handleChange}
              type="password"
              name="password"
              value={form.password}
            />
            {errors.password && errors.password !== "" && (
              <span className="text-red-600 absolute left-0 bottom-[-25px]">
                {errors.password}
              </span>
            )}
          </div>
          <div className="relative">
            <label htmlFor="">Confirm Password</label>
            <input
              className="w-full p-1 rounded"
              onChange={handleChange}
              type="password"
              name="confirm"
              value={form.confirm}
            />
            {errors.confirm && errors.confirm !== "" && (
              <span className="text-red-600 absolute left-0 bottom-[-25px]">
                {errors.confirm}
              </span>
            )}
          </div>
        </article>
        <div>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 px-5 py-1 rounded"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateUser;
