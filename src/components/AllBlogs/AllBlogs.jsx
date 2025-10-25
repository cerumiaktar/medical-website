import { useEffect, useState } from "react";
import AllBlog from "./AllBlog";


const AllBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setAllBlogs(data))
    }, [])
    return (
        <div className="container mx-auto mt-8 mb-12">
            <h1 className="text-2xl font-medium text-center dark:text-black mb-6">Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    allBlogs.map(allblog =><AllBlog allblog={allblog}></AllBlog>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;