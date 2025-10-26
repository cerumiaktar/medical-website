import { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import { MdArrowDropDown } from "react-icons/md";


const Doctors = () => {
    const [allDoctors, setAllDoctors] = useState([]);

    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setAllDoctors(data))
    }, [])
    return (
        <div className="container mx-auto mt-8 mb-12">
            <div className="hero bg-[#0341C9] h-[300px] rounded-xl">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-white">Doctors</h1>
                        <div className="bg-white py-6 rounded-lg">
                            {/* Doctor Dropdown */}
                            <div className="dropdown dropdown-start">
                                <div tabIndex={0} role="button" className="btn m-1">Name <span><MdArrowDropDown /></span></div>
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                {
                    allDoctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;