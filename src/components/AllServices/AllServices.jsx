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
            <div className="hero bg-[#0341C9] h-[300px] rounded-xl mb-6">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-white">Our Services</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                    allServices.map((allService, idx) => <AllService key={idx} allService={allService}></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;