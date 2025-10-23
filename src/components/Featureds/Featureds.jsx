import { BiSupport } from "react-icons/bi";

const Featureds = () => {
    return (
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card card-border bg-base-100 dark:bg-white border border-[#0341C9]">
                <div className="card-body text-center">
                    <span className="text-5xl dark:text-black mx-auto"><BiSupport /></span>
                    <h2 className="card-title dark:text-black mx-auto">24/7 Services</h2>
                    <p className="dark:text-[#333333]">High-quality, lab-tested products for safe and reliable health.</p>
                </div>
            </div>
            <div className="card card-border bg-base-100 dark:bg-white border border-[#0341C9] ">
                <div className="card-body text-center">
                    <span className="text-5xl dark:text-black mx-auto"><BiSupport /></span>
                    <h2 className="card-title dark:text-black mx-auto">Licensed Doctors</h2>
                    <p className="dark:text-[#333333]">Connect with certified doctors providing trusted advice and care daily.</p>
                </div>
            </div>
            <div className="card card-border bg-base-100 dark:bg-white border border-[#0341C9] ">
                <div className="card-body text-center">
                    <span className="text-5xl dark:text-black mx-auto"><BiSupport /></span>
                    <h2 className="card-title dark:text-black mx-auto">Fast Delivery</h2>
                    <p className="dark:text-[#333333]">Reliable and speedy delivery of all health products to you.</p>
                </div>
            </div>
            <div className="card card-border bg-base-100 dark:bg-white border border-[#0341C9] ">
                <div className="card-body text-center">
                    <span className="text-5xl dark:text-black mx-auto"><BiSupport /></span>
                    <h2 className="card-title dark:text-black mx-auto">Secure Data</h2>
                    <p className="dark:text-[#333333]">Your personal health information is fully protected and private.</p>
                </div>
            </div>
        </div>
    );
};

export default Featureds;