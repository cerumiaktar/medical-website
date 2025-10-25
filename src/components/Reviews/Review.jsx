
const Review = ({ review }) => {
    const { profile, name, designation, review_description } = review;
    return (
        <div className="mx-6">
            <div className="card card-border bg-base-100 border w-96">
                <div className="card-body">
                    <div className="flex items-center gap-4">
                        <img src={profile} alt="" />
                        <div>
                            <h2 className="card-title">{name}</h2>
                            <p>{designation}</p>
                        </div>
                    </div>
                    <p>{review_description}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;