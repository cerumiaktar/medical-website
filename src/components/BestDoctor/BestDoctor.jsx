import { FaFacebookF, FaLinkedinIn, FaInstagram,FaRegUser } from "react-icons/fa6";

const BestDoctor = ({ doctor }) => {
    const {img,name,designation} = doctor;
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
                    <div className="flex items-center gap-4 mt-2 justify-center">
                        <a className="bg-[#46C9BA] p-2 rounded-full" href="#"><FaFacebookF /></a>
                        <a className="bg-[#46C9BA] p-2 rounded-full" href="#"><FaLinkedinIn /></a>
                        <a className="bg-[#46C9BA] p-2 rounded-full" href="#"><FaInstagram /></a>
                        <a className="bg-[#46C9BA] p-2 rounded-full" href="#"><FaRegUser /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestDoctor;