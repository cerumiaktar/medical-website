import { FaFacebook,FaLinkedin, FaYoutube  } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-[#0341C9]">
            <footer className="footer container mx-auto text-base-content p-10">
                <nav>
                    <h6 className="text-2xl font-medium text-white">About</h6>
                    <a className="link link-hover text-[#F3FFFE]">Home</a>
                    <a className="link link-hover text-[#F3FFFE]">Blog</a>
                    <a className="link link-hover text-[#F3FFFE]">FAQ</a>
                </nav>
                <nav>
                    <h6 className="text-2xl font-medium text-white">Contact</h6>
                    <a className="link link-hover text-[#F3FFFE]">Address: Dhaka, Bangladesh</a>
                    <a className="link link-hover text-[#F3FFFE]">Phone: ++0131234567891</a>
                    <a className="link link-hover text-[#F3FFFE]">Email: info@gmail.com</a>
                </nav>
                <nav>
                    <h6 className="text-2xl font-medium text-white">Useful Link</h6>
                    <a className="link link-hover text-[#F3FFFE]">Terms & Condition</a>
                    <a className="link link-hover text-[#F3FFFE]">Privacy Policy</a>
                    <a className="link link-hover text-[#F3FFFE]">Support</a>
                </nav>
                <nav>
                    <h6 className="text-2xl font-medium text-white">Follow Us</h6>
                    <a className="link link-hover text-[#F3FFFE] flex items-center gap-2"><FaFacebook />Facebook</a>
                    <a className="link link-hover text-[#F3FFFE] flex items-center gap-2"><FaLinkedin />Linkedin</a>
                    <a className="link link-hover text-[#F3FFFE] flex items-center gap-2"><FaYoutube />Youtube</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;