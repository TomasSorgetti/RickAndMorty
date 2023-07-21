import axios from "axios";
import React, { useState } from "react";
import LongMenu from "../Menu/Menu";
import Swal from "sweetalert2";

const option1 = ["edit", "delete"];
const option2 = ["report"];
const Post = ({ name, userId, post, date, user, id }) => {
  const [modify, setModify] = useState(false);
  const [form, setForm] = useState({
    post: post,
    id: id,
  });
  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [property]: value });
  };
  const handleDelete = async () => {
    try {
      await axios
        .delete(`http://localhost:3001/posts/${id}`)
        .then((response) => {
          if (response) {
            window.location.reload(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async () => {
    try {
      await axios
        .put(`http://localhost:3001/posts`,form)
    } catch (error) {
      console.log(error);
    }
  };
  const handleReport = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Reported",
      text: "Thank you for report",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  return (
    <div className="bg-gray-800 rounded p-4 pt-2 text-white relative flex flex-col gap-2">
      <h3 className="text-xl font-semibold">{name}</h3>
      {modify ? (
        <form onSubmit={handleUpdate} className="flex flex-col gap-4 w-full mt-3 items-center">
          <textarea
            onChange={handleChange}
            name="post"
            value={form.post}
            className="text-black w-full px-2 rounded h-20"
          />
          <button type="submit" className="px-4 py-1 w-20 bg-gray-500 rounded h-10">Edit</button>
        </form>
      ) : (
        <p className="text-gray-300">{post}</p>
      )}
      <span className="absolute top-3 right-10 text-gray-300 text-sm">
        {date}
      </span>
      <div className="absolute top-3 right-3">
        {user.id === userId ? (
          <LongMenu
            options={option1}
            handleDelete={handleDelete}
            setModify={setModify}
          />
        ) : (
          <LongMenu options={option2} handleReport={handleReport} />
        )}
      </div>
    </div>
  );
};

export default Post;
