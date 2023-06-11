// import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// import {styled } from '@mui/material';

// import { API } from '../../service/api';

// const Error = styled(Typography)`
//     font-size: 10px;
//     color: #ff6161;
//     line-height: 0;
//     margin-top: 10px;
//     font-weight: 600;
// `

// function Login() {

//   const signupInitialValues = {
//     name: '',
//     username: '',
//     password: '',
//   };

//   const [account, toggleAccount] = useState('login');
//   const [error, showError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const [signup, setSignup] = useState(signupInitialValues);

//   const handleShowPasswordToggle = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       username: data.get('username'),
//       password: data.get('password')
//     });
//   };

//   // on Clicking the password
//   const handlePasswordInputChange = (event) => {
//     const { value } = event.target;
//     console.log('Password:', value);
//   };

//   // On Clicking the UserName Field
//   const handleUsernameInputChange = (event) => {
//     const { value } = event.target;
//     console.log('Username:', value);
//   };

// const onInputChange = (e)=>{
//   setSignup({...signup, [e.target.name] : e.target.value})
// }

//   const toggleSignup = () => {
//     account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
//   }

//   const signupUser = async () => {
//     let response = await API.userSignup(signup);
//     // processResponse Coming From Service/api.js
//     if (response.isSuccess) {
//         showError('');
//         setSignup(signupInitialValues);
//         toggleAccount('login');
//     } else {
//         showError('Something went wrong! please try again later');
//     }
// }

//   return (
//     <ThemeProvider theme={theme}>

//     {

//       account=== 'login' ?

//       // Login Form
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 17,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign into BlogVerse
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type={showPassword ? 'text' : 'password'}
//               id="password"
//               autoComplete="current-password"
//               onChange={handlePasswordInputChange}
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   value="remember"
//                   color="primary"
//                   onChange={handleShowPasswordToggle}
//                 />
//               }
//               label="Show Password"
//             />
//             <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Button  onClick= {()=>{toggleSignup()}} className= "cursor-pointer"  variant="body2">
//                  create An Acount
//                 </Button>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>

//       :

//       // SignUp Form
//       <Container component="main" maxWidth="sm">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 17,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>

//           <Typography component="h1" className= "text-[2rem] font-bold "  variant="h5">
//              Create An Account in BlogVerses
//           </Typography>

//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />

//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="username"
//             label="Enter Your UserName "
//             id="username"
//             autoComplete="current-username"
//             onChange={handleUsernameInputChange}
//           />

//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type={showPassword ? 'text' : 'password'}
//               id="password"
//               autoComplete="current-password"
//               onChange={handlePasswordInputChange}
//             />

//             <FormControlLabel
//               control={
//                 <Checkbox
//                   value="remember"
//                   color="primary"
//                   onChange={handleShowPasswordToggle}
//                 />
//               }
//               label="Show Password"
//             />

//             {error && <Error>{error}</Error>}
//             <Button
//                type="submit"

//                onClick={() => signupUser()}

//                fullWidth variant="contained"
//                sx={{ mt: 3, mb: 2 }}>
//                  Craete Account
//             </Button>

//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link onClick={()=>toggleSignup()}  variant="body2">
//                   Already Have Account
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>

//     }

//     </ThemeProvider>
//   );
// }

// export default Login;
import Container from '@mui/material/Container';
import React, { useState, useEffect, useContext } from "react";
import "typeface-poppins";
import CssBaseline from '@mui/material/CssBaseline';
import { TextField, Box, Button, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider.jsx";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";

 
 
const Wrapper = styled(Box)`
padding: 15px 10px;
display: flex;
flex: 1;
width: 390px;
overflow: auto;
flex-direction: column;
& > div,
& > button,
& > p {
  margin-top: 20px;
}
`;


const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
 
  height: 48px;
  font-size: 18px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
text-transform: none;
background: #fb641b;
  color: #2874f0;
  height: 48px;
  font-size: 18px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 2px 2px 4px 2px rgb(0 0 0 / 40%);
`;
  
  const Text = styled(Typography)`
  
  color: #444444;
 
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

const Login = ({ isUserAuthenticated }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState("");
  const [account, toggleAccount] = useState("login");

  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext);

  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
  useEffect(() => {
    showError(false);
  }, [login]);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {


    let response = await API.userLogin(login);
    if (response.isSuccess) {
      showError("");

      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accessToken}`
      );
      sessionStorage.setItem(
        "refreshToken",
        `Bearer ${response.data.refreshToken}`
      );
      
      sessionStorage.setItem("isAuthenticated", 
      true);

      setAccount({
        name: response.data.name,
        username: response.data.username,
      });

      isUserAuthenticated(true);
      setLogin(loginInitialValues);
      navigate("/");
    } else {
      showError("Something went wrong! please try again later");
    }
  };

  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      showError("");
      setSignup(signupInitialValues);
      toggleAccount("login");
    } else {
      showError("Something went wrong! please try again later");
    }
  };

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
      <CssBaseline />
        <Box
          sx={{
            marginTop: 17,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          
    {account === "login" ? (

            
    <Wrapper>
      <Typography
        component="h1"
        style={{ textAlign: "center" }}
        variant="h5"
      > Sign-in to BlogVerse</Typography>
      <TextField
        value={login.username}
        onChange={(e) => onValueChange(e)}
        name="username"
        label="Enter Your Username"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        value={login.password}
        onChange={(e) => onValueChange(e)}
        name="password"
        label="Enter Password"
      />

      {error && <Error>{error}</Error>}

      <LoginButton variant="contained" onClick={() => loginUser()}>
        Login 
      </LoginButton>
      <Text style={{ textAlign: "center" }}>OR</Text>
      <SignupButton
        onClick={() => toggleSignup()}
        style={{ marginBottom: 50 }}
      >
        Create an account
      </SignupButton>
    </Wrapper>
  ) : (
    <Wrapper>

    <Typography
    component="h1"
    style={{ textAlign: "center" }}
    variant="h5"
  >  Create an Account</Typography>
      <TextField
         
        onChange={(e) => onInputChange(e)}
        name="name"
        label="Enter Name"
      />
      <TextField
       
        onChange={(e) => onInputChange(e)}
        name="username"
        label="Enter Username"
      />
      <TextField
         
        onChange={(e) => onInputChange(e)}
        name="password"
        label="Enter Password"
      />

      <SignupButton onClick={() => signupUser()}>Signup</SignupButton>

      
      <Text style={{ textAlign: "center" }}>OR</Text>
      <LoginButton variant="contained" onClick={() => toggleSignup()}>
        Already have an account
      </LoginButton>
    </Wrapper>
)}


        


 


 
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;



