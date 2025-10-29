import { FaLocationDot } from "react-icons/fa6";
import { MdAddIcCall,MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="container mx-auto mt-8 ">
            <div className="hero bg-[#0341C9] h-[300px] rounded-xl mb-12">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-white">Contact</h1>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-xl rounded-lg border py-10 px-10 space-y-6 mb-12">
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
                <div className="w-full flex items-center gap-6">
                    <div className="w-6/12">
                        <label className="label">Reason for visit</label>
                        <select defaultValue="Pick a color" className="select border border-[#333333] w-full">
                            <option disabled={true}>Selec One</option>
                            <option>Routine check-up</option>
                            <option>Follow-up appointment</option>
                            <option>Lab test or blood work</option>
                        </select>
                    </div>
                    <div className="w-6/12">
                        <label className="label">Departments</label>
                        <select defaultValue="Pick a color" className="select border border-[#333333] w-full">
                            <option disabled={true}>Selec One</option>
                            <option>General Medicine</option>
                            <option>Pediatrics</option>
                            <option>Cardiology</option>
                        </select>
                    </div>
                </div>
                <div className="w-full flex items-center gap-6">
                    <div className="w-6/12">
                        <label className="label">Date</label>
                        <input type="date" className="input border border-[#333333] w-full" />
                    </div>
                    <div className="w-6/12">
                        <label className="label">Time</label>
                        <input type="time" className="input border border-[#333333] w-full" />
                    </div>
                </div>
                <button className="bg-[#0341C9] hover:bg-[#38BDF8] btn text-white w-full md:w-6/12">Submit</button>
            </div>
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-6">Find Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#0341C9] rounded-lg py-8 px-4 text-white flex items-center gap-4">
                        <span className="text-4xl"><FaLocationDot /></span>
                        <div>
                            <h2>Address</h2>
                            <p className="text-xl font-medium">Address:Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className="bg-[#0341C9] rounded-lg py-8 px-4 text-white flex items-center gap-4">
                        <span className="text-4xl"><MdAddIcCall /></span>
                        <div>
                            <h2>Phone Number</h2>
                            <p className="text-xl font-medium">++8801323456789</p>
                        </div>
                    </div>
                    <div className="bg-[#0341C9] rounded-lg py-8 px-4 text-white flex items-center gap-4">
                        <span className="text-4xl"><MdEmail /></span>
                        <div>
                            <h2>Email</h2>
                            <p className="text-xl font-medium">info@medical.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;