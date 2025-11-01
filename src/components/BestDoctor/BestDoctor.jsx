import { FaFacebookF, FaLinkedinIn, FaInstagram,FaRegUser } from "react-icons/fa6";

const BestDoctor = ({ doctor }) => {
    const {img,name,department} = doctor;
    return (
        <div>
            <div className="card card-compact bg-base-100 dark:bg-white dark:text-black shadow-xl border">
                <figure>
                    <img
                        src={img}
                        alt="doctor" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title font-medium mx-auto">{name}</h2>
                    <p className="text-base font-medium">{department}</p>
                    <div className="flex items-center gap-3">
                        <button className="btn w-full text-white bg-[#0341C9] dark:border-none hover:bg-[#38BDF8] ">Book an Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestDoctor;