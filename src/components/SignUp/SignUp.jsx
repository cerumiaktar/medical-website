import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div>
            <div className="hero bg-base-200 dark:bg-white min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold dark:text-black">SignUp now!</h1>
                    </div>
                    <div className="card bg-base-100 dark:bg-white w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-black">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered dark:bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-black">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered dark:bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-black">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered dark:bg-white" required />
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <input type="checkbox"  className="checkbox checkbox-sm" />
                                <p>agree our <Link to='/terms' className="text-blue-800">terms & condition</Link></p>
                            </div>
                            <div className="form-control">
                                <button className="btn bg-[#46C9BA] dark:text-black dark:border-none dark:hover:text-white">Sign Up</button>
                            </div>
                            <p className="dark:text-[#333333]">Already have an account <Link to='/login' className="text-blue-600 font-medium">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;