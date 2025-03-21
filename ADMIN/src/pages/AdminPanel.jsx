import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importing Font Awesome icons for Edit and Delete

import { deleteAdminUrl, getAdminsCountUrl, getAllAdminsUrl, getEmployeesCountUrl, getSalaryCountUrl } from '../utils/apiRoutes';

const AdminPanel = () => {
    // const [loading] = useState(false);
    // const isDark = useSelector((state) => state.themeConfig.theme) === 'dark' ? true : false;
    // const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    // const [adminTotal, setAdminTotal] = useState(0);
    // const [employeeTotal, setemployeeTotal] = useState(0);
    // const [salaryTotal, setSalaryTotal] = useState(0);
    const [admins, setAdmins] = useState([]);
    const [selectedAdmins, setSelectedAdmins] = useState([]);
    const [filteredAdmins, setFilteredAdmins] = useState([]);
    const [editingAdmin, setEditingAdmin] = useState(null);
    const navigate = useNavigate();
    // const [page, setPage] = useState(1);
    // const PAGE_SIZES = [10, 20, 30, 50, 100];
    // const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);

    const [counts, setCounts] = useState({
        teams: 0,
        news: 0,
        images: 0,
    });

    // Get logged-in admin ID from JWT token
    const token = localStorage.getItem('token');
    let loggedInAdminId = null;

    if (token) {
        const decoded = jwtDecode(token);
        loggedInAdminId = decoded.id; // or decoded.email if you want to use email instead
    }

    useEffect(() => {
        // adminCount();
        // employeeCount();
        // salaryCount();
        AdminRecords();
        // fetchCounts();
        fetchAdminData();
    }, []);

    // const fetchCounts = async () => {
    //     try {
    //       const teamsResponse = await axios.get("https://backend-chelsfield.ironstepsoftware.com/api/v1/countteam");
    //       const newsResponse = await axios.get("https://backend-chelsfield.ironstepsoftware.com/api/v1/countarticles");
    //       const imagesResponse = await axios.get("https://backend-chelsfield.ironstepsoftware.com/api/v1/countsliders");

    //       setCounts({
    //         teams: teamsResponse.data.count || 0,
    //         news: newsResponse.data.count || 0,
    //         images: imagesResponse.data.count || 0,
    //       });
    //     } catch (error) {
    //       console.error("Error fetching counts:", error);
    //     }
    //   };

    const fetchAdminData = async () => {
        try {
            const response = await axios.get('https://backend-chelsfield.ironstepsoftware.com/api/v1/alladmin');
            // console.log(response);
            //  // Your API endpoint for fetching admins
            const res=response.data.filter((data)=>{
                return data.role!="admin"
            })
            // console.log("res",res);
            
            setAdmins(response.data); // Assuming `Result` holds the array of admins
            setFilteredAdmins(res); // Set the filtered admins
        } catch (error) {
            console.error('Error fetching admin data:', error);
        }
    };

    // const handleCheckboxChange = (e, id) => {
    //     if (e.target.checked) {
    //         setSelectedAdmins([...selectedAdmins, id]);
    //     } else {
    //         setSelectedAdmins(selectedAdmins.filter(adminId => adminId !== id));
    //     }
    // };

    // const handleSelectAllChange = (e) => {
    //     if (e.target.checked) {
    //         setSelectedAdmins(filteredAdmins.map(admin => admin._id));
    //     } else {
    //         setSelectedAdmins([]);
    //     }
    // };

    const AdminRecords = () => {
        // axios
        //     .get(getAllAdminsUrl)
        //     .then((result) => {
        //         if (result.data.Status) {
        //             const filteredAdmins = result.data.Result.filter((admin) => {
        //                 console.log('admin', admin);

        //                 return admin.id != loggedInAdminId;
        //             });
        //             setAdmins(filteredAdmins);
        //         } else {
        //             alert(result.data.Error);
        //         }
        //     })
        //     .catch((err) => console.error(err));
    };

    // const adminCount = () => {
    //     axios.get(getAdminsCountUrl)
    //         .then(result => {
    //             if (result.data.Status) {
    //                 setAdminTotal(result.data.Result[0].admin);
    //             }
    //         })
    //         .catch(err => console.error(err));
    // };

    const handleCancel = () => {
        // Reset form and close the modal
        setEditingAdmin(null);
    };

    // const employeeCount = () => {
    //     axios.get(getEmployeesCountUrl)
    //         .then(result => {
    //             if (result.data.Status) {
    //                 setemployeeTotal(result.data.Result[0].employee);
    //             }
    //         })
    //         .catch(err => console.error(err));
    // };

    // const salaryCount = () => {
    //     axios.get(getSalaryCountUrl)
    //         .then(result => {
    //             if (result.data.Status) {
    //                 setSalaryTotal(result.data.Result[0].salaryOFEmp);
    //             } else {
    //                 alert(result.data.Error);
    //             }
    //         })
    //         .catch(err => console.error(err));
    // };

    // const handleDelete = (id) => {
    //     axios.delete(deleteAdminUrl(id))
    //         .then(result => {
    //             if (result.data.Status) {
    //                 AdminRecords(); // Refresh the admin list after deletion
    //             } else {
    //                 alert(result.data.Error);
    //             }
    //         })
    //         .catch(err => console.error("Error deleting admin:", err));
    // };

    const handleEdit = (id) => {
        navigate(`/admin/edit_admin/${id}`);
    };

    // New Admin Button click handler
    const handleNewAdminClick = () => {
        navigate('/add-admin');
    };

    const handleUpdate = async (id, updatedData) => {
        try {
            // console.log('id', id);

            navigate(`/edit-admin/${id}`);
            // await axios.put(`https://backend-chelsfield.ironstepsoftware.com/api/v1/updateadmin/${id}`, updatedData);
            fetchAdminData(); // Re-fetch admins after updating
        } catch (error) {
            console.error('Error updating admin:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            console.log('id', id);

            await axios.delete(`https://backend-chelsfield.ironstepsoftware.com/api/v1/deleteadmin/${id}`);
            // Re-fetch companies after deleting
            fetchAdminData();
        } catch (error) {
            console.error('Error deleting admins:', error);
        }
    };

    return (
        <div className="panel h-full w-full">
            <div className="flex items-center justify-between mb-5">
                <h5 className="font-semibold text-lg dark:text-white-light">Admins List</h5>
                {/* New Admin Button */}
                <button className="btn btn-primary" onClick={handleNewAdminClick}>
                    New Admin
                </button>
            </div>

            <div className="datatables">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-200 dark:border-gray-700">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800 text-sm font-medium">
                                <th className="px-4 py-2 text-left">#</th>
                                <th className="px-4 py-2 text-left">ID</th>
                                <th className="px-4 py-2 text-left">Name</th>
                                <th className="px-4 py-2 text-left">Email</th>
                                <th className="px-4 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAdmins && filteredAdmins.length > 0 ? (
                                filteredAdmins.map((admin, index) => (
                                    <tr key={admin._id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <td className="px-4 py-2 text-sm">{index + 1}</td>
                                        <td className="px-4 py-2 text-sm truncate">{admin._id}</td>
                                        <td className="px-4 py-2 text-sm">{admin.name}</td>
                                        <td className="px-4 py-2 text-sm truncate">{admin.email}</td>
                                        <td className="px-4 py-2 text-sm">
                                            <div className="flex gap-2">
                                                {/* Edit button */}
                                                <button onClick={() => handleUpdate(admin._id)}>
                                                    <FaEdit className="text-blue-500 hover:text-blue-700" />
                                                </button>
                                                {/* Delete button */}
                                                <button onClick={() => handleDelete(admin._id)} className="text-red-500 hover:text-red-700">
                                                    <FaTrashAlt />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="px-4 py-2 text-center text-gray-500 dark:text-gray-400">
                                        No admins available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Edit Admin Form (Modal) */}
                {editingAdmin && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                            <h2 className="text-2xl mb-4">Edit Admin</h2>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700">
                                        Name
                                    </label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded-md">
                                        Save
                                    </button>
                                    <button onClick={handleCancel} className="bg-gray-500 text-white py-2 px-4 rounded-md">
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
