import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center mt-20">
                <div className="card bg-base-100 w-96 shadow-xl border-2 text-center border-red-700">
                    <div className="card-body ">
                        <div className="card-actions justify-end">
                            <Link to='/'>
                                <button className="btn btn-square btn-sm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                        <p className="text-2xl font-bold">Opps</p>
                        <p className="text-6xl text-red-700 font-bold">404</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;