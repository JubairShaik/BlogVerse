import { useState, useEffect, useContext } from 'react';
import { API } from '../../../service/api';
import { DataContext } from '../../../context/DataProvider';
import userImage from '../../../assets/userImage.png';
import Comment from './Comment';

const Comments = ({ post }) => {
  const initialValue = {
    name: '',
    postId: '',
    comments: '',
  };

  const [comment, setComment] = useState(initialValue);
  const [comments, setComments] = useState([]);
  const [toggle, setToggle] = useState(false);

  const { account } = useContext(DataContext);

  useEffect(() => {
    const getData = async () => {
      const response = await API.getAllComments(post._id);
      if (response.isSuccess) {
        setComments(response.data);
      }
    };
    getData();
  }, [toggle, post]);

  const handleChange = (e) => {
    setComment({
      ...comment,
      name: account.username,
      postId: post._id,
      comments: e.target.value,
    });
  };

  const addComment = async () => {
    await API.newComment(comment);
    setComment(initialValue);
    setToggle((prev) => !prev);
  };

  return (
    <div className="box">
      <div className="container gap-4 flex items-center">
        <img src={userImage} className="h-10" alt="dp" />


        <textarea
          className=" flex-1  my-8 bg-slate-100 rounded-md resize-none"
          rows={2}
          placeholder="What's on your mind?"
          onChange={(e) => handleChange(e)}
          value={comment.comments}
        />
        <button
          className="px-3 py-2  text-white font-normal "
          onClick={(e) => addComment(e)}
        >
          Post Comment
        </button>
      </div>
      <div className=" flex flex-col gap-10 ">
        {comments &&
          comments.length > 0 &&
          comments.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
              setToggle={setToggle}
            />
          ))}
      </div>
    </div>
  );
};

export default Comments;
