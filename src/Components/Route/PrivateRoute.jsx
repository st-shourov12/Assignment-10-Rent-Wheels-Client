import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading/Loading';


const PrivateRoutes = ({children}) => {
    const {user,loading} = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading />
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={location?.pathname}></Navigate>
    ;
};

export default PrivateRoutes;