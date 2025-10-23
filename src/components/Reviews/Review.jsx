
const Review = ({ review }) => {
    const { profile, name, designation, review_description } = review;
    return (
        <div className="mx-6">
            <div className="card card-border bg-base-100 border w-full">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                </div>
            </div>
        </div>
    );
};

export default Review;