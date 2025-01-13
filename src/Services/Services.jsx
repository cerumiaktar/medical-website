import { useEffect, useState } from "react";
import Service from "../components/Service/Service";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data =>setServices(data))
    } ,[])
    return (
        <div className="mt-12 mb-12">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-medium">Our Services</h1>
                <p className="text-xl">See all</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {
                    services.map(service =><Service service={service}></Service> )
                }
            </div>
        </div>
    );
};

export default Services;