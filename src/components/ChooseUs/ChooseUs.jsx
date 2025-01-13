

const ChooseUs = () => {
    return (
        <div className="mb-12">
            <h1 className="text-2xl font-medium text-center mb-4">Why Choose Us</h1>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-6/12">
                    <div className="card mb-6  bg-[#FFF5F5] border-l-8 border-[#CF0A0A] ">
                        <div className="card-body">
                            <h2 className="card-title ">Qualified Doctors</h2>
                            <p className="text-[#494949]">Known for their expertise,ethical and commitment to patient health, they may specialize in various fields like surgery, pediatrics, or cardiology.</p>
                        </div>
                    </div>
                    <div className="card bg-[#F0FAFF] border-l-8 border-[#146CA5]">
                        <div className="card-body">
                            <h2 className="card-title">Comprehensive Medical Services</h2>
                            <p className="text-[#494949]">From routine checkups to specialized treatments and surgeries, we provide a wide range of healthcare solutions under one roof.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-6/12">
                    <div className="card mb-6 bg-[#F3FFFE] border-l-8 border-[#02AB98]">
                        <div className="card-body">
                            <h2 className="card-title">Patient-Centric Care</h2>
                            <p className="text-[#494949]">We prioritize patient comfort, safety, and satisfaction, offering personalized attention and compassionate services.</p>
                            
                        </div>
                    </div>
                    <div className="card  bg-[#FFF6FE] border-l-8 border-[#B2009B]">
                        <div className="card-body">
                            <h2 className="card-title">Trusted Reputation</h2>
                            <p className="text-[#494949]">We have a strong history of delivering exceptional care, earning the trust of thousands of patients and families.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;