import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import fb from "../../assets/icons/fb-icon.png"
import x from "../../assets/icons/x-icon.png"
import insta from "../../assets/icons/instagram.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-gradient-to-r from-[#FFC4C4] to-[#ffc4c4d8] text-[#3C3C3C] p-10">
                <aside>
                    <p className=" text-5xl font-bold">
                        <span className=" text-[#D72638]">日本</span> Learn
                    </p>
                    <p>
                        House 76, Road 25, Block F, Gulshan-2, <br />
                        Dhaka 1212, Bangladesh
                    </p>
                    <p>
                        <FaPhone className=" inline mr-2" /> <span>+88 01830 000000</span>
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title opacity-100">Find Us</h6>
                    <div className="grid grid-flow-col gap-4">
                        <Link to='https://www.facebook.com/'>
                            <img src={fb} alt="facebook" className=" bg-white rounded-full w-8 h-8 p-1" />
                        </Link>
                        <Link to='https://x.com/'>
                            <img src={x} alt="x" className=" bg-white rounded-full w-8 h-8 p-0.5" />
                        </Link>
                        <Link to='https://www.instagram.com/'>
                            <img src={insta} alt="instagram" className=" bg-white rounded-full w-8 h-8 p-0.5" />
                        </Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;