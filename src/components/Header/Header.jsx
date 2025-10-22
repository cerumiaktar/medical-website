import React from 'react';

const Header = () => {
    return (
        <div className='mt-12'>
            <div
                className="hero rounded-xl h-[500px]"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/GWBqQ37/image-overlay.png)",
                }}>
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className="mb-5 text-3xl md:text-5xl mx-auto md:w-7/12 dark:text-white font-bold">Your Health, Our Priority Trusted Care for Every Patient</h1>
                        <p className="mb-5 md:w-6/12 dark:text-[#EAEAEA] mx-auto">
                        We are committed to providing trusted, compassionate care for every patient, ensuring that you receive the attention and expertise you deserve for a healthier, happier life.
                        </p>
                        <button className="btn bg-white dark:border-none dark:text-black dark:hover:text-white text-lg">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;