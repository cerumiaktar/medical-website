

const Footer = () => {
    return (
        <div className="bg-[#46C9BA]">
            <footer className="footer container mx-auto text-base-content p-10">
                <nav>
                    <h6 className="text-2xl font-medium">About</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">FAQ</a>
                </nav>
                <nav>
                    <h6 className="text-2xl font-medium">Contact</h6>
                    <a className="link link-hover">Address: Dhaka, Bangladesh</a>
                    <a className="link link-hover">Phone: ++0131234567891</a>
                    <a className="link link-hover">Email: info@gmail.com</a>
                </nav>
                <nav>
                    <h6 className="text-2xl font-medium">Useful Link</h6>
                    <a className="link link-hover">Terms & Condition</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Support</a>
                </nav>
                <nav>
                    <h6 className="text-2xl font-medium">Follow Us</h6>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Linkedin</a>
                    <a className="link link-hover">Youtube</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;