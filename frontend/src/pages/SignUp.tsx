import React, { useState } from "react";
import { LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AxiosInstance from "../utility/Axios";
import { toast } from "react-toastify";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate input

    try {
      if (!name || !email || !password) {
        toast.error("All fields are required");
        console.error("All fields are required");
        return;
      }
      if (/\S+@\S+\.\S+/.test(email) === false) {
        toast.error("Invalid email format");
        console.error("Invalid email format");
        return;
      }
      if (/^.{6,}$/.test(password) === false) {
        toast.error("Password must be at least 6 characters long");
        console.error("Password must be at least 6 characters long");
        return;
      } else {
        const res = await AxiosInstance.post("/user/signup", {
          name,
          email,
          password,
        });
        if (res.status === 201) {
          toast.success("Signed up successfully!");
          console.log("Signup successful:", res.data);
          navigate("/login");
        } else {
          console.error("Signup failed:", res.data);
          return;
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        const err = error as any;
        toast.error(
          (error as any)?.response?.data?.message || error.message
        );
        console.error(
          "Error during signup:", 
          err.response?.data || error.message
        );
      } else {
        console.error("Error during signup:", error);
      }
      return;
    }

    // TODO
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-[120px]">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <LogIn className="h-6 w-6 mr-2 text-gray-600" />
          <h2 className="text-2xl font-bold text-gray-600">SignUp</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
              className="mt-1 w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
              className="mt-1 w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white p-2 rounded hover:bg-blue-700"
          >
            SignUp
          </button>
        </form>
        <Link to={"/login"} className=" text-blue-600 hover:underline mt-4 block text-center">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
