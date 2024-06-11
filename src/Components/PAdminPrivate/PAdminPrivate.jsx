import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/authContext';

export default function PAdminPrivate({ children }) {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!authContext.isLoggedIn) {
            navigate("/login");
        } else if (authContext.userInfos.role !== 'ADMIN') {
            navigate("/");
        }
    }, [authContext, navigate]);

    if (!authContext.isLoggedIn || authContext.userInfos.role !== 'ADMIN') {
        return null; // Or you can return a loading indicator or another component
    }

    return <>{children}</>;
}
