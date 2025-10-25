
const HealthTip = ({ blog }) => {
    const { id, img, title, description } = blog;

    return (
        <div className="flex grow">
            <div className="card bg-base-100 dark:bg-white shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-black">{title}</h2>
                    <p className="text-[#333333]">{description}</p>
                    <div>
                        <button className="btn w-full text-white dark:border-none bg-[#0341C9] hover:bg-[#38BDF8]">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthTip;