import { useContext } from 'react';
import { API } from '../../../service/api';
import { DataContext } from '../../../context/DataProvider';
import Delete from "../../../assets/delete.png"
import userImage from '../../../assets/userImage.png';





const Comment = ({ comment, setToggle }) => {
  const { account } = useContext(DataContext);

  const removeComment = async () => {
    await API.deleteComment(comment._id);
    setToggle((prev) => !prev);
  };

  return (
    <div className="component  bg-slate-300 ">
      <div className="container p-4   bg-slate-200 ">

        <div className="flex justify-between">

       


        <h4 className=" flex gap-1 items-center font-semibold text-blue-700"> 
        <img src={userImage} className="h-8" alt="dp" />
        {comment.name}</h4>
        <h5 className="flex gap-5 items-center" >{new Date(comment.date).toDateString()}

        {comment.name === account.username && (
            <img className="h-7"  src={Delete} alt="" />
         )}
        
        </h5>

        
        </div>


        </div>
       



      <p className="typography">{comment.comments}</p>
    </div>
  );
};

export default Comment;
