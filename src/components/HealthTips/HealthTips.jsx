import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HealthTip from "./HealthTip";


const HealthTips = () => {
    const [blogs, setBlogs] = useState([]);
    const [blogLength, setBlogLength] = useState([4]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data=>setBlogs(data))
    } ,[])
    return (
        <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-medium dark:text-black">Health Tips</h1>
                <p className="text-xl dark:text-[#333333]"><Link to='/blogs'>See all</Link></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    blogs.slice(0, blogLength).map(blog =><HealthTip blog={blog}></HealthTip>)
                }
            </div>
        </div>
    );
};

export default HealthTips;