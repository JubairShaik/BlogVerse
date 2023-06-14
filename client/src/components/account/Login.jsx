import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import Blogverse from "../../assets/Blogverse1.png";

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
      sessionStorage.setItem("isAuthenticated", true);

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

  return (
    <div className="flex  mt-[5rem]   flex-1  flex-col justify-center px-8 py-12 lg:px-8">
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex flex-col items-center">
            <img
              className="mx-auto h-[3.5rem] sm:h-[4.5rem] w-auto"
              src={Blogverse}
              alt="logo"
            />

            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              {account === "login"
                ? "Sign in to BlogVerse"
                : "Create an Account"}
            </h2>

            {account === "login" ? (
              <div
                className="space-y-10"
                className="w-full"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="block mt-5 text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>

                <div className="mt-2">
                  <input
                    value={login.username}
                    name="username"
                    autoComplete="email"
                    required
                    onChange={(e) => onValueChange(e)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div className="mt-2">
                  <input
                    value={login.password}
                    onChange={(e) => onValueChange(e)}
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <button
                  onClick={() => loginUser()}
                  type="submit"
                  className="flex w-full mt-3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>

                <h3 className="text-center">or</h3>

                <button
                  className="text-blue-500 mt-2"
                  onClick={() => toggleAccount("signup")}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create an Account
                </button>
              </div>
            ) : (
              <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="my-2">
                  <label className="block mt-5 text-sm font-medium leading-6 text-gray-900">
                    Enter Your Name
                  </label>
                  <div className="mt-2">
                    <input
                      value={signup.name}
                      name="name"
                      autoComplete="name"
                      required
                      onChange={(e) => onInputChange(e)}
                      className="block w-full rounded-md border-0  p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="my-2">
                  <label className="block mt-5 text-sm font-medium leading-6 text-gray-900">
                    Enter Your Username
                  </label>
                  <div className="mt-2">
                    <input
                      value={signup.username}
                      onChange={(e) => onInputChange(e)}
                      name="username"
                      required
                      onChange={(e) => onInputChange(e)}
                      className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="my-2">
                  <label className="block mt-2 text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      value={signup.password}
                      onChange={(e) => onInputChange(e)}
                      name="password"
                      required
                      onChange={(e) => onInputChange(e)}
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <button
               
                  onClick={() => signupUser()}
                  className="flex w-full mt-6 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                   Complete SignUp
                </button>

 
                <div className="flex justify-between gap-6 items-center mt-4">
                  <h2>Already have an account?</h2>
                  <Link
                    to="#"
                    onClick={() => toggleAccount("login")}
                    className=" px-2 py-1 rounded-[3px] bg-orange-500 text-white  mx-1 cursor-pointer"
                  >
                    Sign In
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
