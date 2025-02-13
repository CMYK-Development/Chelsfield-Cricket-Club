import { useEffect, useState } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const TeamManagement = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [teamData, setTeamData] = useState([]);
    const [selectedTeams, setSelectedTeams] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(setPageTitle('Team Management'));
        fetchTeamData();
    }, []);

    const fetchTeamData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/allteam');
            setTeamData(response.data); // Assuming the API returns an array of team members
        } catch (error) {
            console.error('Error fetching team data:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e, teamId) => {
        if (e.target.checked) {
            setSelectedTeams((prev) => [...prev, teamId]);
        } else {
            setSelectedTeams((prev) => prev.filter((id) => id !== teamId));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/v1/addteam', formData);
            fetchTeamData(); // Refresh data after adding a new team member
            setFormData({ name: '', email: '', phone: '' });
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error adding team member:', error);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setFormData({ name: '', email: '', phone: '' });
    };

    const handleDelete = async () => {
        try {
            if (selectedTeams.length > 0) {
                await axios.delete('http://localhost:3000/api/v1/deleteteam', {
                    data: { ids: selectedTeams },
                });
                fetchTeamData(); // Refresh data after deletion
                setSelectedTeams([]); // Clear selected teams after deletion
            }
        } catch (error) {
            console.error('Error deleting teams:', error);
        }
    };

    // Filter team members based on the search term
    const filteredTeamData = teamData.filter(
        (teamMember) => teamMember.name.toLowerCase().includes(searchTerm.toLowerCase()) || teamMember.email.toLowerCase().includes(searchTerm.toLowerCase())
        // teamMember.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('filteredTeamData', filteredTeamData);

    return (
        <div className="space-y-6">
            {/* Panel Header */}
            <div className="panel">
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-xl dark:text-white-light">Team Management</h5>
                    <div className="flex items-center justify-center space-x-4">
                        {/* Add New Team Button */}
                        <button className="btn btn-primary text-white flex items-center justify-center px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm" onClick={() => setIsModalOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            <span className="hidden sm:inline ml-2">Add New Team</span>
                        </button>

                        {/* Delete Selected Button */}
                        <button
                            className="btn btn-danger text-white flex items-center justify-center px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm"
                            onClick={handleDelete}
                            disabled={selectedTeams.length === 0}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="hidden sm:inline ml-2">Delete Selected</span>
                        </button>
                    </div>
                </div>

                {/* Search Input */}
                <input
                    type="text"
                    className="form-input w-full sm:w-auto mb-3 p-2 border border-gray-300 rounded-md"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Data Table */}
                <div className="datatables overflow-x-auto">
                    <table className="table-auto w-full text-sm sm:text-base">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setSelectedTeams(filteredTeamData.map((team) => team._id));
                                            } else {
                                                setSelectedTeams([]);
                                            }
                                        }}
                                        checked={selectedTeams.length === filteredTeamData.length}
                                    />
                                </th>
                                <th className="p-2">ID</th>
                                <th className="p-2">Name</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTeamData.map((teamMember, index) => (
                                <tr key={teamMember._id} className="border-t">
                                    <td className="p-2">
                                        <input type="checkbox" checked={selectedTeams.includes(teamMember._id)} onChange={(e) => handleCheckboxChange(e, teamMember._id)} />
                                    </td>
                                    <td className="p-2">{index + 1}</td>
                                    <td className="p-2">{teamMember.name}</td>
                                    <td className="p-2">{teamMember.email}</td>
                                    <td className="p-2">{teamMember.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-between mt-5">
                    <span>Showing {filteredTeamData.length} entries</span>
                    <div>
                        <label>Records per page: </label>
                        <select>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Modal for Adding New Team Member */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-4 sm:p-6 rounded-md shadow-md w-11/12 sm:w-1/3">
                        <h3 className="text-xl font-semibold mb-4 text-center">Add New Team Member</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label block text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control border border-gray-300 w-full p-2 rounded-md focus:ring-2 focus:ring-blue-400"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label block text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control border border-gray-300 w-full p-2 rounded-md focus:ring-2 focus:ring-blue-400"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label block text-gray-700 mb-1">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="form-control border border-gray-300 w-full p-2 rounded-md focus:ring-2 focus:ring-blue-400"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-wrap justify-between items-center mt-4 space-y-2 sm:space-y-0 sm:space-x-3">
                                {/* Save Button */}
                                <button type="submit" className="w-full sm:w-auto py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 border border-blue-500 rounded-md text-center">
                                    Save
                                </button>
                                 {/* Cancel Button */}
                                 <button
                                    type="button"
                                    className="w-full sm:w-auto py-2 px-4 text-white bg-gray-500 hover:bg-gray-700 border border-gray-300 rounded-md text-center"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamManagement;
