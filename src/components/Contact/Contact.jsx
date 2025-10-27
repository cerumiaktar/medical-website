import { FaAngleDown } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="container mx-auto mt-8 ">
            <div className="hero bg-[#0341C9] h-[300px] rounded-xl mb-12">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-white">All Services</h1>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-xl rounded-lg border py-10 px-10 space-y-6">
                <div className="w-full flex gap-6">
                    <input type="text" placeholder="Name" className="input border border-[#333333] w-6/12" />
                    <input type="text" placeholder="Phone Number" className="input border border-[#333333] w-6/12" />
                </div>
                <div className="w-full flex gap-6">
                    <button className="btn w-6/12 flex justify-between bg-white border-[#333333]">Reason for visit <span><FaAngleDown /></span></button>
                    
                    <input type="text" placeholder="Name" className="input border border-[#333333] w-6/12" />
                </div>
            </div>
            <div className="flex justify-center mt-32">
                <div className="card bg-[#0341C9] w-96">
                    <div className="card-body items-center text-center text-white">
                        <h2 className="card-title">Contact</h2>
                        <p>Address:Dhaka, Bangladesh</p>
                        <p>Phone: ++8801323456789</p>
                        <p>Email:info@medical.com</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;