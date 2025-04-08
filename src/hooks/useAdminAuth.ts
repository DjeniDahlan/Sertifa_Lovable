
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAdminAuth = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated") === "true";
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("adminAuthenticated");
    navigate("/admin/login");
  };

  return { logout };
};
