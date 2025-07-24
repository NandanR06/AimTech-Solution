import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Quotes from "./pages/Quotes";
import Career from "./pages/Career";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Portpolio from "./pages/Portpolio";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import { useEffect, useState } from "react";
import AxiosInstance from "./utility/Axios"
import ProtectedPage from "./components/ProtectedPage"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
 const [authorized, setAuthorized] = useState<boolean | null>(null); // null = loading

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const res = await AxiosInstance.get("/auth/authorized", {
          withCredentials: true,
        });
        if (res.status === 200) {
          setAuthorized(true);
        } else {
          setAuthorized(false);
        }
      } catch (error) {
        setAuthorized(false);
      }
    };

    checkAuthorization();
  }, []);

  if (authorized === null) return <div>Loading...</div>;
   return(
    <div>
            <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedPage>
              <Home />
            </ProtectedPage>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedPage>
              <About />
            </ProtectedPage>
          }
        />
        <Route
          path="/services"
          element={
            <ProtectedPage>
              <Services />
            </ProtectedPage>
          }
        />
        <Route
          path="/portfolio"
          element={
            <ProtectedPage>
              <Portpolio />
            </ProtectedPage>
          }
        />
        <Route
          path="/blog"
          element={
            <ProtectedPage>
              <Blog />
            </ProtectedPage>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedPage>
              <Contact />
            </ProtectedPage>
          }
        />
        <Route
          path="/quote"
          element={
            <ProtectedPage>
              <Quotes />
            </ProtectedPage>
          }
        />
        <Route
          path="/career"
          element={
            <ProtectedPage>
              <Career />
            </ProtectedPage>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedPage>
              <Admin />
            </ProtectedPage>
          }
        />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />

    </div>
   );
}
