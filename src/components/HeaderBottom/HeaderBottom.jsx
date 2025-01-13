import { FaAmbulance } from "react-icons/fa";
import { LuHospital } from "react-icons/lu";
import { FaPersonPregnant } from "react-icons/fa6";

const HeaderBottom = () => {
    return (
        <div className="mt-12">
            <div className="flex justify-between">
                <div className="bg-white space-y-2 rounded-lg shadow-lg py-6 border text-center">
                    <p className="text-5xl flex justify-center"><FaAmbulance /></p>
                    <h1 className="text-xl font-medium">24/7 Emergency Services</h1>
                    <p className="w-8/12 mx-auto text-[#494949]">Immediate and life-saving medical attention with a dedicated <br /> emergency.</p>
                </div>
                <div className="bg-white space-y-2 rounded-lg shadow-lg py-6 border text-center">
                    <p className="text-5xl flex justify-center"><LuHospital /></p>
                    <h1 className="text-xl font-medium">Advanced Diagnostic Center</h1>
                    <p className="w-8/12 mx-auto text-[#494949]">Immediate and life-saving medical attention with a dedicated <br /> emergency.</p>
                </div>
                <div className="bg-white space-y-2 rounded-lg shadow-lg py-6 border text-center">
                    <p className="text-5xl flex justify-center"><FaPersonPregnant /></p>
                    <h1 className="text-xl font-medium">Maternity and Neonatal Care</h1>
                    <p className="w-8/12 mx-auto text-[#494949]">Immediate and life-saving medical attention with a dedicated <br /> emergency.</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderBottom;