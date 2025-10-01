import { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";


const Doctors = () => {
    const [allDoctors, setAllDoctors] = useState([]);

    useEffect(() =>{
        fetch('doctors.json')
        .then(res =>res.json())
        .then(data =>setAllDoctors(data))
    } ,[])
    return (
        <div className="container mx-auto mt-8 mb-12">
            <h1 className="text-2xl font-medium text-center dark:text-black">Doctors</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {
                    allDoctors.map(doctor =><Doctor doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;