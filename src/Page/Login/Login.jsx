import { useContext } from "react";
import Swal from "sweetalert2";

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../public/gradient-abstract-wireframe-background_23-2149003417.jpg";
import img1 from "../../../public/login112.avif";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "You have successfully Login.",
        });
        reset();
        // console.log(result.user);
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.message,
        });

        console.log(err.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Google Login Successful!",
          text: "You have successfully google login.",
        });
        console.log(result.user);
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.message,
        });
        console.log(err.message);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: "success",
          title: "Google Login Successful!",
          text: "You have successfully google login.",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.message,
        });
        console.log(err.message);
      });
  };
  return (
    <div
      className="flex h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex w-11/12 h-full items-center justify-center mx-auto rounded-lg">
        {/* Left side with an image */}
        <div className=" flex h-5/6 w-2/5	 items-center justify-center bg-opacity-0">
          <img src={img1} alt="Login" className="w-full h-full opacity-70" />
        </div>

        {/* Right side with input fields */}
        <div className=" flex  h-5/6 w-3/5	 items-center justify-center bg-white bg-opacity-50 p-8">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Hello Friend
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* icon */}
              <div className="flex justify-center items-center  ">
                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="btn rounded-full"
                >
                  G
                </button>
                <button type="button" className="btn rounded-full">
                  F
                </button>
                <button
                  onClick={handleGithubSignIn}
                  type="button"
                  className="btn rounded-full"
                >
                  G
                </button>
              </div>
              {/* <hr className="my-4" d={true} /> */}
              {/* icon */}

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  {...register("password")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  type="password"
                  id="password"
                  name="password"
                  required
                />
              </div>
              <p className="text-xs  sm:px-6 ">
                Dont have an account?{" "}
                <Link to="/register" className="underline text-gray-100">
                  Register
                </Link>
              </p>
              <button
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
