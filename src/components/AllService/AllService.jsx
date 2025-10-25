

const AllService = ({ allService }) => {
    const { img, title } = allService;
    return (
        <div>
            <div className="bg-white hover:bg-[#0341C9] hover:text-white dark:text-black dark:hover:text-white shadow-lg py-8 mt-4 border rounded-xl text-center">
                <img className="w-28 mx-auto" src={img} alt="" />
                <h1 className="text-xl font-medium dark:text-black">{title}</h1>
            </div>
        </div>
    );
};

export default AllService;