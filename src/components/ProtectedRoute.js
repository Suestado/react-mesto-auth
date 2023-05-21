import { Navigate } from 'react-router-dom';
import login from './Login';

function ProtectedRouteElement({element: Component, ...props}) {
  console.log(props.isLoggedIn);
  return(
    props.isLoggedIn ? Component : <Navigate to="/sign-up"/>
  )
}

export default ProtectedRouteElement;
