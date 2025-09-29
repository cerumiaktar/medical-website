import { useEffect, useState } from "react";
import BestDoctor from "../BestDoctor/BestDoctor";
import { Link } from "react-router-dom";


const BestDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    const [dataLength, setDataLength] = useState([4]);

    useEffect(()=>{
        fetch('doctors.json')
        .then(res =>res.json())
        .then(data =>setDoctors(data))
    } ,[])
    return (
        <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-medium dark:text-black">Best Doctors</h1>
                <p className="text-xl dark:text-[#333333]"><Link to='/doctors'>See all</Link></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    doctors.slice(0, dataLength).map((doctor, idx) => <BestDoctor key={idx} doctor ={doctor}></BestDoctor> )
                }
            </div>
        </div>
    );
};

export default BestDoctors;