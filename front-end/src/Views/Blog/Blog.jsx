import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";

const posts = [
  {
    id: 1,
    userId: 1,
    name: "rick",
    post: "morty se la come",
    date: "18/07/2023",
  },
  {
    id: 2,
    userId: 2,
    name: "morty",
    post: "el de arriba es gay",
    date: "18/07/2023",
  },
];
const Blog = () => {
  const [user, setUser] = useState({});
  const [posteos, setPosteos] = useState([]);
  const [form, setForm] = useState({
    post: "",
  });
  const token = localStorage.getItem("token");
  const name = user.name;
  const userId = user.id;
  useEffect(() => {
    if (token) {
      try {
        axios
          .get(`http://localhost:3001/users/detail`, {
            headers: {
              authorization: token,
            },
          })
          .then((response) => {
            if (response) setUser(response.data.response)
            return
          });
      } catch (error) {
        console.log("profile", error);
      }
    }
    return
  }, [token]);
  useEffect(() => {
    try {
      axios.get(`http://localhost:3001/posts`).then((response) => {
        if (response) {
          setPosteos(response.data.toReversed());
        }
      });
    } catch (error) {
      console.log("fetching posts error", error);
    }
  }, []);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };
  const handleSubmit = async () => {
    const posts = form.post;
    try {
      if (userId) {
        await axios.post("http://localhost:3001/posts/", {
          name,
          userId,
          posts,
        });
      }
    } catch (error) {
      console.log("error posting", error);
    }
  };

  return (
    <main className="flex flex-col items-center gap-10">
      <h1 className="text-3xl">Welcome to the Blog</h1>
      <section className="flex flex-col items-center gap-6 w-10/12">
        <article className="w-full">
          {token && user ? (
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 rounded p-4 pt-2 text-white relative flex flex-col gap-2"
            >
              <h3 className="text-xl font-semibold">{name}</h3>
              <textarea
                onChange={handleChange}
                placeholder="rick is the best character"
                name="post"
                value={form.post}
                className="text-black h-20 rounded"
              ></textarea>
              <div className="flex justify-center">
                <button type="submit" className="bg-gray-600 px-4 py-1 rounded">
                  Post
                </button>
              </div>
            </form>
          ) : (
            <div>Login to comment...</div>
          )}
        </article>
        <article className="w-full flex flex-col gap-2">
          {posteos.length ? (
            posteos?.map(({ name, userId, post, date, id }) => (
              <Post
                key={id}
                name={name}
                userId={userId}
                post={post}
                date={date}
                id={id}
                user={user}
              />
            ))
          ) : (
            <div>There are no posts...</div>
          )}
        </article>
      </section>
    </main>
  );
};

export default Blog;
