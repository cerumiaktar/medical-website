import { FaAmbulance } from "react-icons/fa";
import { LuHospital } from "react-icons/lu";
import { FaPersonPregnant } from "react-icons/fa6";

const HeaderBottom = () => {
    return (
        <div className="mt-12">
            <div className="flex flex-col md:flex-row gap-8 justify-between">
                <div className="card bg-base-100 dark:bg-white border-2 boder-[#02AB98] dark:text-black shadow-2xl">
                    <figure className="px-10 pt-10 text-5xl">
                        <FaAmbulance />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">24/7 Emergency Services</h2>
                        <p>Immediate and life-saving medical attention with a dedicated emergency</p>
                    </div>
                </div>
                <div className="card bg-base-100 dark:bg-white border-2 boder-[#02AB98] dark:text-black shadow-2xl">
                    <figure className="px-10 pt-10 text-5xl">
                        <LuHospital />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Advanced Diagnostic Center</h2>
                        <p>Immediate and life-saving medical attention with a dedicated emergency</p>
                    </div>
                </div>
                <div className="card bg-base-100 dark:bg-white border-2 boder-[#02AB98] dark:text-black shadow-2xl">
                    <figure className="px-10 pt-10 text-5xl">
                        <FaPersonPregnant />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Maternity and Neonatal Care</h2>
                        <p>Immediate and life-saving medical attention with a dedicated emergency</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;