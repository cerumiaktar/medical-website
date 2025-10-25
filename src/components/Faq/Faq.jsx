

const Faq = () => {
    return (
        <div className="mb-12">
            <div className="mb-6">
                <h1 className="text-2xl font-medium text-center  dark:text-black">FAQ</h1>
            </div>
            <div className="space-y-4">
                <div className="collapse collapse-arrow bg-base-100 border border-[#0341C966]">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold"> How can I book an appointment with a doctor?</div>
                    <div className="collapse-content text-sm">Discover simple yet effective daily habits that can help you stay healthy, feel energized, and improve your.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-[#0341C966]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Do you provide online consultations?</div>
                    <div className="collapse-content text-sm">Yes, we offer video consultations with licensed doctors for your convenience.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-[#0341C966]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Are the doctors licensed and verified?</div>
                    <div className="collapse-content text-sm">Yes, all doctors on our platform are fully licensed and verified professionals.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-[#0341C966]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">What if I need to reschedule or cancel an appointment?</div>
                    <div className="collapse-content text-sm">You can reschedule or cancel your appointment through your account up to 24 hours before the scheduled time.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-[#0341C966]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">How do I know which doctor is right for me?</div>
                    <div className="collapse-content text-sm">You can filter doctors by specialization, experience, and patient reviews to choose the right one.</div>
                </div>
            </div>
        </div>
    );
};

export default Faq;