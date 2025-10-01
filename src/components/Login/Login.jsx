import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="hero bg-base-200 dark:bg-white min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 dark:bg-white w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover dark:text-black">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#46C9BA] dark:text-black dark:border-none">Login</button>
                            </div>
                            <p>Do not have account? <Link to='/signUp' className="text-blue-600 font-medium">SignUp</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;