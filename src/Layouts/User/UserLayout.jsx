import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";

const UserLayout = () => {
    return (
        <div>
            <Nav />
            <div className=" min-h-screen"><Outlet /></div>
            <Footer />
        </div>
    );
};

export default UserLayout;
