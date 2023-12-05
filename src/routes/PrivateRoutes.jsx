import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../pages/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {

  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if(loading){
    return <div className='text-center mt-5'>
         <Spinner style={{width : '80px', height : '80px'}} animation="border" variant="dark" />
    </div>
  }

    if(user){
        return children;
    }
    return <Navigate state={{from : location}} to='/signIn/login' replace></Navigate>
};

export default PrivateRoutes;