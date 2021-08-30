import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useProtectPage = () => {
    const history = useHistory();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token === null) {
        history.push("/login");
      }
    }, []);
  };

export useProtectPage ()