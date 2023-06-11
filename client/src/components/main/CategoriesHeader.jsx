import { useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';
import { categories } from '../../constants/data';

function CategoriesHeader() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [btnName, setBtnName] = useState("All");
  const [activeCategory, setActiveCategory] = useState('active');

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className=" ">
        <div className="flex px-8 py-4  sm:mx-[8rem]   flex-wrap overflow-x-auto flex-row items-center gap-10">
          <div className="flex    gap-[2rem] items-center justify-between my-3">


            <Link className="flex " to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
              <button className="px-2 py-1 w-[8rem]  ">
                Create + Blog
              </button>
            </Link>

          

            <div className="flex sm:ml-[15rem] gap-10"   > 
            
            <Link   
            onClick={() => window.scrollTo(0, 0)} to="/">
              <i className="fa-solid fa-angle-left text-orange-500"></i>
              <p className="text-blue-800 px-2 py-1  bg-blue-200"> All  </p>
            </Link>





            {
              categories.map((categoryItem) => (
                <div className="flex   " key={categoryItem.id}>
                  <div
                   className={`flex rounded-md justify-center items-center px-2 py-1
                    ${
                    categoryItem.type === activeCategory ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                  }`}>
                    <Link
                      to={`/?category=${categoryItem.type}`}
                      onClick={() => setActiveCategory(categoryItem.type)}
                    >
                      {categoryItem.type}
                    </Link>
                  </div>
                </div>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
