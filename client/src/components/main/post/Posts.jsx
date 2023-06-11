import { useEffect, useState } from 'react';

 
import { Link, useSearchParams } from 'react-router-dom';

// import { getAllPosts } from '../../../service/api';
import { API } from '../../../service/api';

//components
import Post from './Post';

const Posts = () => {
    const [posts, getPosts] = useState([]);
    
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => { 
            let response = await API.getAllPosts({ category : category || '' });
            if (response.isSuccess) {
                getPosts(response.data);
            }
        }
        fetchData();
    }, [category]);

    return (
        <>
            {
                posts?.length ? posts.map(post => (
                    <div className="  ">
                        <Link  to={`details/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </div>

                )) : <div className="text-[1.4rem] p-5 m-4">
                        no Blogs are available for selected category
                    </div>
            }
        </>
    )
}

export default Posts;