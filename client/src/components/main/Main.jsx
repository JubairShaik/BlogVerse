import Banner from "./../banner/Banner";
 
import CategoriesHeader from "./CategoriesHeader";
import Posts from "./post/Posts";
import Footer from "../footer/Footer.jsx";




const Main = () => {
  return (
    <>
      <CategoriesHeader />
       <div className="flex flex-wrap items-center justify-center gap-7 mt-5"  >
         <Posts />
       </div>
      <Banner />
      <Footer/>
    </>
  );
};

export default Main;
