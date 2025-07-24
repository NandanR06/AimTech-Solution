import React, {  useState } from "react";
import { LogIn } from "lucide-react";
import {Link, useNavigate } from "react-router-dom";
import AxiosInstance from "../utility/Axios";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  

  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
    // Validate input
    try {

      console.log("Login attempt with:", { email, password });
      if (!email || !password) {
        console.error("All fields are required");
        return;
      }
      const res= await AxiosInstance.post("/user/signin", { email, password},{
         withCredentials: true,
      });
      if (res.status === 200) {
              toast.success("Logged in successfully!");

        if(res.data?.admin) {
          console.log("Admin login successful");
          navigate("/admin");

        }
        else{
          console.log("User login successful");
          navigate("/");
           }
        console.log("Login successful:", res.data);
        
      } else {
        console.error("Login failed:", res.data);
        return;
      }

    } catch (error) {
      if (error instanceof Error) {
        toast.error(
          (error as any)?.response?.data?.message || error.message
        );
        console.error(
          "Error during login:",
          error
        );
      } else {
        console.error("Error during login:", error);
      }
      return;
    }
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <LogIn className="h-6 w-6 mr-2 text-gray-600" />
          <h2 className="text-2xl font-bold text-gray-600">SignIn</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          
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
              required
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
              required
              className="mt-1 w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
                          <Link to={"/signUp"} className="text-center text-blue-900 hover:underline  block mt-5">Sign Up</Link>

      </div>
    </div>
  );
};

export default Login;
