import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";

const UserLayout = () => {
    return (
        <div>
            <Nav />
            <div className=" my-10"><Outlet /></div>
            <Footer />
        </div>
    );
};

export default UserLayout;
