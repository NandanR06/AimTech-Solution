import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../utility/Axios" 

import type { ReactNode } from "react";

interface ProtectedPageProps {
  children: ReactNode;
}

const ProtectedPage = ({ children }: ProtectedPageProps) => {
  const [authorized, setAuthorized] = useState<Boolean | null>(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const res = await AxiosInstance.get("/auth/authorized", {
          withCredentials: true,
        });
        if (res.status === 200) {
          setAuthorized(true);
          console.log(" User is authorized:", res.data);
        }
      } catch (error) {
        console.error(" Not authorized:", error);
        setAuthorized(false);
        navigate("/login"); 
      }
    };

    checkAuthorization();
  }, []);

  if (authorized === null) return <div>Loading...</div>; 

  return authorized ? children : false;
};

export default ProtectedPage;
