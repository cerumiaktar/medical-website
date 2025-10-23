import { FaFacebookF, FaLinkedinIn, FaInstagram, FaRegUser } from "react-icons/fa6";

const Doctor = ({ doctor }) => {
    const { img, name, designation } = doctor;
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
                    <p className="text-base font-medium">{designation}</p>
                    <div>
                        <button className="btn w-full text-white bg-[#0341C9] hover:bg-[#38BDF8]">Book an Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;