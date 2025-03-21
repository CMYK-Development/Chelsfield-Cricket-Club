import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye } from 'react-icons/fa';
import { IoEyeOffSharp } from 'react-icons/io5';

const Login = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);

    // Check if token exists when the component mounts
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/index');  // If token exists, navigate to the home page
        }
    }, [navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form submitted:", values);

        try {
            // Send login request to the backend API
            const response = await axios.post('http://localhost:3000/api/v1/loginadmin/', {
                email: values.email,
                password: values.password,
            });
console.log("response",response);

            if (response.status==200) {
                // If login is successful, store token and navigate to /index
                localStorage.setItem("valid", true);
                localStorage.setItem("token", response.data.admin.refreshToken);
                localStorage.setItem("role", response.data.admin.role);
                navigate("/index");
            } else {
                // If login fails, display error
                setError(response.data.error || 'Invalid credentials');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setError('Invalid credentials');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-[url('/assets/images/map.svg')] dark:bg-[url('/assets/images/map-dark.svg')]">
            <div className="panel sm:w-[480px] m-6 max-w-lg w-full">
                <h2 className="font-bold text-2xl mb-3">Sign In</h2>
                <p className="mb-7">Enter your email and password to login</p>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Enter Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <div className="flex flex-row items-center">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={values.password}
                                onChange={handleInputChange}
                                className="form-input flex-1"
                                placeholder="Enter Password"
                            />
                            <span
                                className="cursor-pointer ml-2"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEye size={15} /> : <IoEyeOffSharp size={15} />}
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        SIGN IN
                    </button>
                </form>
                {error && <p className="text-red-500 mt-3">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
