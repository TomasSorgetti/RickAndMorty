import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";


const Login = ({login, setLogin}) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    validation: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };


  const handleSubmit = async () => { 
    if (form.name && form.password) {
        await axios
          .post("http://localhost:3001/users/login", form)
          .then((response) => {
            const token = response.data.token;
            const userId = response.data.id;
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
            if (token ) {
              if (window.location.pathname !== "/") {
                navigate("/")
                setTimeout(() => {
                  window.location.reload(true);
                }, 10);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });

    }
  }
  

  return (
    <main className="w-full ">
      <form className="w-10/12 p-5 m-auto flex flex-col justify-center items-center bg-blue-300 gap-4 rounded">
        <h2>Login</h2>
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
          </div>
          <a className="underline text-gray-700" href="/createUser">you dont have account?</a>
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

export default Login;
