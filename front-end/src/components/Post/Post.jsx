import axios from 'axios';
import React,{useState} from 'react'
import { SlOptionsVertical } from "react-icons/sl";
const Post = ({ name, userId, post, date,user,id }) => {
  const [showOptions, setShowOptions] = useState(false);
  
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/posts/${id}`)
       .then((response) => {
         if (response) {
         window.location.reload(true)
       }
     })
    } catch (error) {
      console.log(error);
    }
   }
  
  const handleUpdate = async()=>{}

  return (
    <div className="bg-gray-800 rounded p-4 pt-2 text-white relative flex flex-col gap-2">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-300">{post}</p>
      <span className="absolute top-3 right-10 text-gray-300 text-sm">
        {date}
      </span>
      <button
        onClick={() => {
          setShowOptions(!showOptions);
        }}
        className="absolute top-4 right-2"
      >
        <SlOptionsVertical />
        {user.id === userId ? (
          <ul
            className={`${showOptions === true ? "" : "hidden"}
                         absolute px-3 text-start top-[-15px] right-5 bg-gray-600 rounded`}
          >
            <li>edit</li>
            <li onClick={handleDelete}>delete</li>
          </ul>
        ) : (
          <ul
            className={`${showOptions === true ? "" : "hidden"}
                         absolute px-3 text-start top-[-15px] right-5 bg-gray-600 rounded`}
          >
            <li>report</li>
          </ul>
        )}
      </button>
    </div>
  );
};

export default Post