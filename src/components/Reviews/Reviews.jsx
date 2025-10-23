import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import Review from './Review';

const Reviews = () => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div className='mb-12'>
            <div className='text-center mb-6'>
                <h1 className="text-2xl dark:text-black font-medium">Customer Stories That Inspire</h1>
            </div>
            <Marquee>
                <div className='flex flex-col md:flex-row justify-between'>
                    {
                        reviews.map((review) => <Review review={review}></Review>)
                    }
                </div>
            </Marquee>

        </div>
    );
};

export default Reviews;