import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();

    const GoBack = () => {
        navigate(-1)
    }


    return (
        <div className="min-h-screen flex items-center justify-center text-center">
            <div>
            <h1 className="text-6xl font-bold">Oops! <br /> 404 Page not found</h1>
            <br />
            <button onClick={GoBack} className="btn bg-blue-400">Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;