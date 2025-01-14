import { useEffect, useState } from "react";
import BestDoctor from "../BestDoctor/BestDoctor";


const BestDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch('doctors.json')
        .then(res =>res.json())
        .then(data =>setDoctors(data))
    } ,[])
    return (
        <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-medium">Best Doctors</h1>
                <p className="text-xl">See all</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    doctors.map((doctor, idx) => <BestDoctor key={idx} doctor ={doctor}></BestDoctor> )
                }
            </div>
        </div>
    );
};

export default BestDoctors;