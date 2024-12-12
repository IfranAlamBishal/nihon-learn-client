import { Navigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const AdminRoutes = ({ children }) => {
    const isAdmin = useAdmin();

    if (isAdmin) {
        return children;
    }

    else {
        return <Navigate to='/lessons' ></Navigate>
    }
};

export default AdminRoutes;