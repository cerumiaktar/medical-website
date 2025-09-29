import { FaFacebook,FaLinkedin, FaYoutube  } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-[#46C9BA]">
            <footer className="footer container mx-auto text-base-content p-10">
                <nav>
                    <h6 className="text-2xl font-medium dark:text-black">About</h6>
                    <a className="link link-hover dark:text-[#333333]">Home</a>
                    <a className="link link-hover dark:text-[#333333]">Blog</a>
                    <a className="link link-hover dark:text-[#333333]">FAQ</a>
                </nav>
                <nav>
                    <h6 className="text-2xl font-medium dark:text-black">Contact</h6>
                    <a className="link link-hover dark:text-[#333333]">Address: Dhaka, Bangladesh</a>
                    <a className="link link-hover dark:text-[#333333]">Phone: ++0131234567891</a>
                    <a className="link link-hover dark:text-[#333333]">Email: info@gmail.com</a>
                </nav>
                <nav>
                    <h6 className="text-2xl font-medium dark:text-black">Useful Link</h6>
                    <a className="link link-hover dark:text-[#333333]">Terms & Condition</a>
                    <a className="link link-hover dark:text-[#333333]">Privacy Policy</a>
                    <a className="link link-hover dark:text-[#333333]">Support</a>
                </nav>
                <nav>
                    <h6 className="text-2xl font-medium dark:text-black">Follow Us</h6>
                    <a className="link link-hover dark:text-[#333333] flex items-center gap-2"><FaFacebook />Facebook</a>
                    <a className="link link-hover dark:text-[#333333] flex items-center gap-2"><FaLinkedin />Linkedin</a>
                    <a className="link link-hover dark:text-[#333333] flex items-center gap-2"><FaYoutube />Youtube</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;