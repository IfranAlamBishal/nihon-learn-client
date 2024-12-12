import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";

const UserLayout = () => {
    return (
        <div className=" bg-[#FAF3E0]">
            <Nav />
            <div className=" min-h-96 my-10"><Outlet /></div>
            <Footer />
        </div>
    );
};

export default UserLayout;
