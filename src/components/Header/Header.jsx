import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-12'>
            <div
                className="hero rounded-xl h-[500px]"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/9mdVxFvm/Image-Overlay.png)",
                }}>
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content text-neutral-content text-left">
                    <div className="text-left">
                        <h1 className="mb-5 text-3xl md:text-5xl  md:w-7/12 dark:text-white font-bold">Your Health, Our Priority Trusted Care for Every Patient</h1>
                        <p className="mb-5 md:w-6/12 dark:text-[#EAEAEA]">
                        We are committed to providing trusted, compassionate care for every patient, ensuring that you receive the attention and expertise you deserve for a healthier, happier life.
                        </p>
                        <Link to='/contact'><button className="btn bg-white hover:bg-[#38BDF8] dark:border-none dark:text-black dark:hover:text-white text-lg">Contact Us</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;