

const HealthTips = () => {
    return (
        <div className="mb-12">
            <h1 className="text-2xl font-medium text-center">Health Tips</h1>
            <div className="flex flex-col md:flex-row gap-6 mt-4">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/ZmrDTnm/h-1.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">10 Daily Habits to Transform Your Health</h2>
                        <p>Discover simple yet effective daily habits that can help you stay healthy, feel energized, and improve your overall well-being.</p>
                        <div className="card-actions ">
                            <button className="btn bg-[#46C9BA] w-full text-lg">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/8XHHvL0/h-2.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Eating Healthy on a Budget Tips and Tricks</h2>
                        <p>Discover simple yet effective daily habits that can help you stay healthy, feel energized, and improve your overall well-being.</p>
                        <div className="card-actions ">
                            <button className="btn bg-[#46C9BA] w-full text-lg">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/G0vBXPT/h-3.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">The Science of Sleep Why Rest is the Best Medicine</h2>
                        <p>Discover simple yet effective daily habits that can help you stay healthy, feel energized, and improve your overall well-being.</p>
                        <div className="card-actions ">
                            <button className="btn bg-[#46C9BA] w-full text-lg">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/41s40TR/h-4.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Boost Your Nutrition with a Handful of Mixed Nuts</h2>
                        <p>Discover simple yet effective daily habits that can help you stay healthy, feel energized, and improve your overall well-being.</p>
                        <div className="card-actions ">
                            <button className="btn bg-[#46C9BA] w-full text-lg">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-4 gap-2">
                <div className="w-3 h-3 bg-[#46C9BA] rounded-full"></div>
                <div className="w-3 h-3 bg-[#E5E7E8] rounded-full"></div>
                <div className="w-3 h-3 bg-[#E5E7E8] rounded-full"></div>
            </div>
        </div>
    );
};

export default HealthTips;