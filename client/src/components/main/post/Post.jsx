import { styled, Box, Typography } from "@mui/material";
import BlurImage from "./BlurImage";

const Post = ({ post }) => {
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <div>
      <div className="   flex  flex-col items-center justify-center  ">
        <BlurImage
          item={url}
          classNames={`duration-700 h-full px-1 rounded-[18px] w-full object-cover hover:slale-110 ease-in-out group-hover:opacity-75`}
          divNames={`relative w-[374px] mt-2 py-1 rounded-[13px] h-[240px] sm:h-[220px]`}
        />

        <div className="flex flex-col  max-w-[375px]  gap-2    ">
          <div className="flex justify-between mx-6 ">
            <p className="font-Poppins ">{post.categories}</p>

            <h2>
              Published by:{" "}
              <span className="text-blue-500 text-start">{post.username}</span>
            </h2>
            
          </div>

          <p className="text-xl font-bold font-Poppins p-1">
          {addEllipsis(post.title, 20)}
          </p>
        
          <p className=" mx-2  ">{addEllipsis(post.description, 100)}</p>
        </div>

        
      </div>
    </div>
  );
};

export default Post;
