
const Review = ({ review }) => {
    const { profile, name, designation, review_description } = review;
    return (
        <div className="mx-6">
            <div className="card card-border bg-[#F1F3FF] border w-96">
                <div className="card-body">
                    <div className="flex items-center gap-4">
                        <img src={profile} alt="" />
                        <div>
                            <h2 className="card-title dark:text-black">{name}</h2>
                            <p className="dark:text-[#333333]">{designation}</p>
                        </div>
                    </div>
                    <p className="dark:text-[#333333]">{review_description}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;