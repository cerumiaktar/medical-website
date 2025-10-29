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
                <div className="w-full flex items-center gap-6">
                    <div className="w-6/12">
                        <label className="label">Name</label>
                        <input type="text" placeholder="Name" className="input border border-[#333333] w-full" />
                    </div>
                    <div className="w-6/12">
                        <label className="label">Email</label>
                        <input type="text" placeholder="Email" className="input border border-[#333333] w-full" />
                    </div>
                </div>
                <div className="w-full">
                    <label className="label">Reason for visit</label>
                    <select defaultValue="Pick a color" className="select border border-[#333333] w-6/12">
                        <option disabled={true}>Selec One</option>
                        <option>Routine check-up</option>
                        <option>Follow-up appointment</option>
                        <option>Lab test or blood work</option>
                    </select>
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