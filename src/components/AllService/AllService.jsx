

const AllService = ({ allService }) => {
    const { img, title } = allService;
    return (
        <div>
            <div className="bg-white shadow-lg py-8 mt-4 border rounded-xl text-center">
                <img className="w-28 mx-auto" src={img} alt="" />
                <h1 className="text-xl font-medium">{title}</h1>
            </div>
        </div>
    );
};

export default AllService;