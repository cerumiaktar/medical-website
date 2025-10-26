import { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import { MdArrowDropDown, MdOutlineSearch } from "react-icons/md";


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
                    <div className="max-w-3xl">
                        <h1 className="text-5xl mb-8 font-bold text-white">Doctors</h1>
                        <div className="bg-white py-6 px-6 rounded-lg grid grid-cols-1 md:grid-cols-4 items-center gap-6">
                            {/* Doctor Dropdown */}
                            <div className="dropdown dropdown-start w-full">
                                <div tabIndex={0} role="button" className="btn m-1 w-full">Doctors Name <span><MdArrowDropDown /></span></div>
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>Dr. Noah Smith</a></li>
                                    <li><a>Dr. Mia Davis</a></li>
                                </ul>
                            </div>
                            {/* Department Dropdown */}
                            <div className="dropdown dropdown-start w-full">
                                <div tabIndex={0} role="button" className="btn m-1 w-full">Department <span><MdArrowDropDown /></span></div>
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>Orthopedic Surgeon</a></li>
                                    <li><a>ENT Specialist</a></li>
                                </ul>
                            </div>
                            {/* Hospital Dropdown */}
                            <div className="dropdown dropdown-start w-full">
                                <div tabIndex={0} role="button" className="btn m-1 w-full">Hospital <span><MdArrowDropDown /></span></div>
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>Toronto General Hospital</a></li>
                                    <li><a>Sheba Medical Center</a></li>
                                </ul>
                            </div>
                            <div className="w-full">
                                <button className="btn bg-[#0341C9] w-full text-white hover:bg-[#38BDF8]"><MdOutlineSearch />Search</button>
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