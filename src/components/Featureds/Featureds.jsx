import { BiSupport } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { SiGooglemeet } from "react-icons/si";
import { BsDatabaseFillLock } from "react-icons/bs";

const Featureds = () => {
    return (
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card card-border bg-base-100 dark:bg-white border border-[#b3cbf8] hover:bg-[#0341C9] hover:text-white hover:-translate-y-3 duration-700 ease-in-out">
                <div className="card-body text-center">
                    <span className="text-5xl dark:text-black mx-auto"><BiSupport /></span>
                    <h2 className="card-title dark:text-black mx-auto">24/7 Services</h2>
                    <p className="dark:text-[#333333]">High-quality, lab-tested products for safe and reliable health.</p>
                </div>
            </div>
            <div className="card card-border bg-base-100 dark:bg-white border border-[#b3cbf8] ">
                <div className="card-body text-center">
                    <span className="text-5xl dark:text-black mx-auto"><FaUserDoctor /></span>
                    <h2 className="card-title dark:text-black mx-auto">Licensed Doctors</h2>
                    <p className="dark:text-[#333333]">Connect with certified doctors providing trusted advice and care daily.</p>
                </div>
            </div>
            <div className="card card-border bg-base-100 dark:bg-white border border-[#b3cbf8] ">
                <div className="card-body text-center">
                    <span className="text-5xl dark:text-black mx-auto"><SiGooglemeet /></span>
                    <h2 className="card-title dark:text-black mx-auto">Online Consultation</h2>
                    <p className="dark:text-[#333333]">Reliable and speedy delivery of all health products to you.</p>
                </div>
            </div>
            <div className="card card-border bg-base-100 dark:bg-white border border-[#b3cbf8]">
                <div className="card-body text-center">
                    <span className="text-5xl dark:text-black mx-auto"><BsDatabaseFillLock /></span>
                    <h2 className="card-title dark:text-black mx-auto">Secure Data</h2>
                    <p className="dark:text-[#333333]">Your personal health information is fully protected and private.</p>
                </div>
            </div>
        </div>
    );
};

export default Featureds;