
const HealthTip = ({ blog }) => {
    const { id, img, title, description } = blog;

    return (
        <div className="flex grow">
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div>
                        <button className="btn w-full text-white bg-[#0341C9] hover:bg-[#38BDF8]">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthTip;