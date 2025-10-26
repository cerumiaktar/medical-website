import { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";


const Doctors = () => {
    const [allDoctors, setAllDoctors] = useState([]);

    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setAllDoctors(data))
    }, [])
    return (
        <div className="container mx-auto mt-8 mb-12">
            <div className="hero bg-[#0341C9] h-[300px]">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-white">Doctors</h1>
                        <button className="btn btn-primary">Get Started</button>
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