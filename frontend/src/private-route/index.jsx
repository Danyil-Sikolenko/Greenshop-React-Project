import { useSelector } from "react-redux";
import { useLocation , Navigate } from "react-router";


export const PrivateRoute = ( { children } ) => {
    const location = useLocation();
    const token = useSelector(state => state.auth.token)

     if(!token) {
        return <Navigate to={'/login'} state={{ from: location }} replace/>

    }

    return children

}
