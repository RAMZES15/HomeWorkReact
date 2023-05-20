import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoad = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const status = localStorage.getItem('userStatus');
        if (!status) {
            navigate('/');
        }
    }, [navigate]);

    return children;
};