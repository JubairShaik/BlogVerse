import { useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';
import { categories } from '../../constants/data';
import plus from "../../assets/plus.png"



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
      <div className="mt-1 sm:mt-4">
        <div className="flex px-6 py-3  sm:mx-[3rem]  justify-center  flex-wrap overflow-x-auto flex-row items-center gap-10">
          <div className="flex  gap-[2rem]  sm:gap-[4rem] items-center justify-between my-3">


           <div className=" " >
           <Link className="flex   items-center gap-1 font-semibold rounded-[4px] bg-blue-200 px-2 py-1 " to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
           <span> Create</span>
           <img src={plus}  className="h-5 "alt="" /><span className="hidden md:flex" > a Blog</span>
        </Link>
           </div>

          

            <div className="flex sm:ml-[19rem] gap-10"   > 
            
            <Link   
            onClick={() => window.scrollTo(0, 0)} to="/">
             
              <p className="text-blue-800 px-2 py-1  rounded-md bg-blue-200"> All Categories </p>
            </Link>

 



            {
              categories.map((categoryItem) => (
                <div className="flex   " key={categoryItem.id}>
                  <div
                   className={`flex rounded-md justify-center items-center px-2 py-1
                    ${
                    categoryItem.type === activeCategory ? 'bg-blue-900 text-white' : 'bg-blue-500 text-white'
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
