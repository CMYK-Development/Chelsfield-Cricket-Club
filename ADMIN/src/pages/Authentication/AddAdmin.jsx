import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye } from 'react-icons/fa';
import { IoEyeOffSharp } from 'react-icons/io5';

const AddAdmin = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log("Form submitted:", values);

        try {
            // Send request to add admin to backend API
            const response = await axios.post('https://backend-chelsfield.ironstepsoftware.com/api/v1/addAdmin', {
                name: values.name,
                email: values.email,
                password: values.password,
            });

            if (response.data.success) {
                // If admin is successfully added, navigate to /index
                navigate("/index");
            } else {
                setError(response.data.error || 'Error adding admin');
            }
        } catch (error) {
            console.error('Failed to add admin:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-[url('/assets/images/map.svg')] dark:bg-[url('/assets/images/map-dark.svg')]">
            <div className="panel sm:w-[480px] m-6 max-w-lg w-full">
                <h2 className="font-bold text-2xl mb-3">Add Admin</h2>
                <p className="mb-7">Enter the details of the new admin</p>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Enter Name"
                        />
                    </div>
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
                        ADD ADMIN
                    </button>
                </form>
                {error && <p className="text-red-500 mt-3">{error}</p>}
            </div>
        </div>
    );
};

export default AddAdmin;
