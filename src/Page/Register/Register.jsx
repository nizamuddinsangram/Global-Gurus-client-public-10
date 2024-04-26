import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import img from "../../../public/gradient-abstract-wireframe-background_23-2149003417.jpg";
import img1 from "../../../public/login111.jpg";
import { AuthContext } from "../../Provider/AuthProvider";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: data.name,
          photoURL: data.PhotUrl,
        })
          .then(() => {
            reset();
            Swal.fire({
              icon: "success",
              title: "Registration Successful!",
              text: "You have successfully registered.",
            });
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: err.message,
        });
        console.log(error.message);
      });
  };

  return (
    <div
      className="flex h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex w-11/12 h-full items-center justify-center mx-auto">
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
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="mb-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="PhotUrl"
                >
                  PhotUrl
                </label>
                <input
                  {...register("PhotUrl", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  type="text"
                  id="PhotUrl"
                  name="PhotUrl"
                  required
                />
                {errors.PhotUrl && <span>This field is required</span>}
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="mb-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  {...register("password", { required: true, minLength: 6 })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  type="password"
                  id="password"
                  name="password"
                  required
                />
                {errors.password && (
                  <span className="text-red-600 text-sm">
                    {errors.password.type === "minLength"
                      ? "Password must be at least 6 characters long"
                      : "This field is required"}
                  </span>
                )}
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

export default Register;
