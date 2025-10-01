import { useEffect, useState } from "react";
import AllService from "../AllService/AllService";


const AllServices = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    return (
        <div className="container mx-auto mt-8 mb-12">
            <h1 className="text-2xl font-medium text-center dark:text-black">All Services</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                    allServices.map((allService, idx) => <AllService key={idx} allService={allService}></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;