import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { API } from "../../service/api.js";
import { DataContext } from "../../context/DataProvider";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const CreatePost = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const initialPost = {
    title: "",
    description: "",
    picture: "",
    categories: "",
    username: "",
  };

  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");

  const { account } = useContext(DataContext);

  const url =
    post.picture ||
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await API.uploadFile(data);
        setPost((prevPost) => ({
          ...prevPost,
          picture: response.data,
        }));
      }
    };
    getImage();
    setPost((prevPost) => ({
      ...prevPost,
      categories: location.search?.split("=")[1] || "All",
      username: account.username,
    }));
  }, [file]);

  const savePost = async () => {
    await API.createPost(post);
    navigate("/");
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-[76rem]   mx-auto px-6 py-12 sm:py-12  lg:px-8 ">
      <div>
        <img src={url} className="w-full h-[30vh] sm:h-[50vh] object-cover" alt="" />
      </div>

      <div className="my-4" >
        <label
          htmlFor="fileInput"
          className="block text-sm   font-medium leading-6 text-gray-900"
        >
          Upload a Cover photo
        </label>
        <div className=" flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-">
          <div className="text-center gap-2 ">
            <PhotoIcon
              className="mx-auto h-12 w-12 text-gray-300"
              aria-hidden="true"
            />

            <div className="  flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="fileInput"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  htmlFor="fileInput"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>

        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>

      <div className="flex mt-4 flex-col gap-6 ">
        <input
          type="text"
          className="input-textfield"
          name="title"
          placeholder="title of Your Blog post "
          onChange={(e) => handleChange(e)}
        />

        <textarea
          className="textarea  "
          rows={5}
          placeholder="Tell your story..."
          name="description"
          onChange={(e) => handleChange(e)}
        />
      </div>

      <button
        className="btn bg-blue-600  mt-5 md:text-xl  text-white text-md w-full  btn-primary"
        onClick={() => savePost()}
      >
        Publish Blog Post
      </button>
    </div>
  );
};

export default CreatePost;
