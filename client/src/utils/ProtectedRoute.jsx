import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    if(!token){
        return <Navigate to='/' replace/>; // redirect to login
    }

return children; // render protected component
}

export default ProtectedRoute