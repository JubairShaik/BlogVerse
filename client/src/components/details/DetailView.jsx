import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import Comments from './comments/Comments';

const DetailView = () => {
  const url =
    'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

  const [post, setPost] = useState({});
  const { account } = useContext(DataContext);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, []);

  const deleteBlog = async () => {
    await API.deletePost(post._id);
    navigate('/');
  };

  return (
    <div className="mx-auto my-5 sm:my-10 max-w-7xl px-6 lg:px-8">
      <img src={post.picture || url} alt="post" className="w-full object-cover  h-[50vh]" />

      <div className="float-right">
        {account.username === post.username && (
          <>
            <Link to={`/update/${post._id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block cursor-pointer text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6v6a4 4 0 004 4h2a6 6 0 006-6V6M4 6L2 6M22 6l-2 2"
                />
              </svg>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block cursor-pointer text-error"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => deleteBlog()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </>
        )}
      </div>

      <h1 className="sm:mt-10 mt-5 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        {post.title}
      </h1>

      <div className="flex my-2 sm:my-5">
        <Link
          to={`/?username=${post.username}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <p>
            Published by: <span className="font-semibold">{post.username}</span>
          </p>
        </Link>
        <p className="ml-auto text-blue-500">
          Published on: {new Date(post.createdDate).toDateString()}
        </p>
      </div>

      <p className="text-justify leading-7 text-lg">{post.description}</p>
      <Comments post={post} />
    </div>
  );
};

export default DetailView;
