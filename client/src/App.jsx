import { useState ,useEffect} from 'react';
 
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

//components
import DataProvider from './context/DataProvider';
import Header from './components/header/Header';
import CreatePost from './components/create/CreatePost';
import DetailView from './components/details/DetailView';
import Update from './components/create/Update';
import Contact from './components/contact/Contact';
import Login from './components/account/Login';
import Main from './components/main/Main';
import Aboutme from './components/aboutme/Aboutme';
import Profile from './components/profile/Profile';
 




const PrivateRoute = ({ isAuthenticated, ...props }) => {

  useEffect(() => {
    sessionStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);


  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ? 
    <>
       <Header />
       
       <div>
       
       <Outlet />
       
       </div>
    
  
     

    </> : <Navigate replace to='/account' />
};




function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated") === "true"
  );
  
     

  return (
 
    <DataProvider>
      <BrowserRouter>
         <div>
          <Routes>
        
        
          <Route path='/account'
           element={<Login isUserAuthenticated={isUserAuthenticated} />} 
           />
        
          <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path='/' element={<Main/>} />
          </Route>

          <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path='/create' element={<CreatePost />} />
          </Route>


          <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path='/about' element={<Aboutme/>} />
          </Route>

          <Route path='/profile' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path='/profile' element={<Profile/>} />
          </Route>



          <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path='/details/:id' element={<DetailView />} />
          </Route> 

          <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path='/update/:id' element={<Update />} />
          </Route>

          <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/contact' element={<Contact />} />
          </Route>




        
        
                

           </Routes>
           </div>
      </BrowserRouter>
    </DataProvider>
    

  );
}

export default App;












{

  /*
  
            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element={<CreatePost />} />
            </Route>

            <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/details/:id' element={<DetailView />} />
            </Route>

            <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/update/:id' element={<Update />} />
            </Route>

            <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/about' element={<About />} />
            </Route>
            
            <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/contact' element={<Contact />} />
  */
}