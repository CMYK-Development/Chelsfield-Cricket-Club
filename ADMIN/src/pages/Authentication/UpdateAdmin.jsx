import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaEye } from 'react-icons/fa';
import { IoEyeOffSharp } from 'react-icons/io5';

const UpdateAdmin = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Assuming admin ID is passed in the URL
    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);

    // Fetch admin data on component mount
    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                // console.log("id",id);

                const response = await axios.get(`http://localhost:3000/api/v1/searchadmin/${id}`);
                // console.log('response', response.data);

                if (response.status == 200) {
                    // const adminData = response.data.admin;
                    setValues({
                        name: response.data.name,
                        email: response.data.email,
                        password: '', // Keep the password field empty for security reasons
                    });
                } else {
                    setError('Admin not found');
                }
            } catch (error) {
                console.error('Failed to fetch admin data:', error);
                setError('An error occurred while fetching the admin data.');
            }
        };

        fetchAdminData();
    }, [id]);
    // console.log("values",values);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form submitted:', values);

        try {
            // Send request to update the admin's details in the backend
            const response = await axios.put(`http://localhost:3000/api/v1/updateAdmin/${id}`, {
                name: values.name,
                email: values.email,
                password: values.password,
            });

            if (response.status == 200) {
                // If admin is successfully updated, navigate to /index
                navigate('/index');
            } else {
                setError(response.data.error || 'Error updating admin');
            }
        } catch (error) {
            console.error('Failed to update admin:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-[url('/assets/images/map.svg')] dark:bg-[url('/assets/images/map-dark.svg')]">
            <div className="panel sm:w-[480px] m-6 max-w-lg w-full">
                <h2 className="font-bold text-2xl mb-3">Update Admin</h2>
                <p className="mb-7">Enter the new details for the admin</p>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" name="name" value={values.name} onChange={handleInputChange} className="form-input" placeholder="Enter Name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" value={values.email} onChange={handleInputChange} className="form-input" placeholder="Enter Email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <div className="flex flex-row items-center">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={values.password}
                                onChange={handleInputChange}
                                className="form-input flex-1"
                                placeholder="Enter Password"
                            />
                            <span className="cursor-pointer ml-2" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEye size={15} /> : <IoEyeOffSharp size={15} />}
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        Update Admin
                    </button>
                </form>
                {error && <p className="text-red-500 mt-3">{error}</p>}
            </div>
        </div>
    );
};

export default UpdateAdmin;
