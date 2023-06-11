import Banner from "./../banner/Banner";
import Categories from "./Categories";
import CategoriesHeader from "./CategoriesHeader";
import { Grid } from "@mui/material";
import Posts from "./post/Posts";
import Stack from "@mui/material/Stack";

const Main = () => {
  return (
    <>
      <CategoriesHeader />
       <div className="flex flex-wrap items-center justify-center gap-7 mt-5"  >
      <Posts />
      
       </div>
      <Banner />
    </>
  );
};

export default Main;
