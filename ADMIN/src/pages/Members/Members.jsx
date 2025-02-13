import { useEffect, useState } from 'react';
import axios from 'axios';

const Members = () => {
    const [memberData, setMemberData] = useState([]);
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [viewedMember, setViewedMember] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    useEffect(() => {
        fetchmemberData();
    }, []);

    const fetchmemberData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/allMember');
            setMemberData(response.data);
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    };

    const handleViewMember = (memberId) => {
        const member = memberData.find((m) => m._id === memberId);
        if (member) {
            setViewedMember(member);
            setIsViewModalOpen(true);
        }
    };

    const handleDelete = async () => {
        try {
            if (selectedMembers.length > 0) {
                await axios.delete('http://localhost:3000/api/v1/deleteMember', {
                    data: { ids: selectedMembers },
                });
                fetchmemberData();
                setSelectedMembers([]);
                setIsDeleteModalOpen(false);
            }
        } catch (error) {
            console.error('Error deleting members:', error);
        }
    };

    const GenerateList = async () => {
        try {
                await axios.delete('http://localhost:3000/api/v1/emailMember');
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const handleCheckboxChange = (e, memberId) => {
        if (e.target.checked) {
            setSelectedMembers((prev) => [...prev, memberId]);
        } else {
            setSelectedMembers((prev) => prev.filter((id) => id !== memberId));
        }
    };

    const filteredmemberData = memberData.filter((member) => member.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || member.email.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="space-y-6 p-4">
            <div className="panel">
                <div className="flex flex-wrap items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Memberships</h5>
                    <div>
                        <button className="btn btn-danger text-white px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base" onClick={() => setIsDeleteModalOpen(true)} disabled={selectedMembers.length === 0}>
                            Delete Selected
                        </button>
                    </div>
                </div>

                <input type="text" className="form-input w-full sm:w-auto mb-3 p-2 rounded-md border" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setSelectedMembers(filteredmemberData.map((member) => member._id));
                                            } else {
                                                setSelectedMembers([]);
                                            }
                                        }}
                                        checked={selectedMembers.length === filteredmemberData.length}
                                    />
                                </th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredmemberData.map((member, index) => (
                                <tr key={member._id} className="border-b">
                                    <td>
                                        <input type="checkbox" checked={selectedMembers.includes(member._id)} onChange={(e) => handleCheckboxChange(e, member._id)} />
                                    </td>
                                    <td>{index + 1}</td>
                                    <td>{member.fullName}</td>
                                    <td>{member.email}</td>
                                    <td>{member.mobileNumber}</td>
                                    <td>
                                        <button className="btn btn-primary text-sm" onClick={() => handleViewMember(member._id)}>
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Delete Confirmation Modal */}
                {isDeleteModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-4 sm:p-6 rounded-md shadow-md w-11/12 sm:w-1/3">
                            <h3 className="text-xl font-semibold mb-4">Confirm Deletion</h3>
                            <p>Are you sure you want to delete the selected members?</p>
                            <div className="flex justify-end mt-4 space-x-3">
                                <button className="btn btn-secondary" onClick={() => setIsDeleteModalOpen(false)}>
                                    Cancel
                                </button>
                                <button className="btn btn-danger" onClick={handleDelete}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Modal for Viewing Member Details */}
            {isViewModalOpen && viewedMember && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-4 sm:p-6 rounded-md shadow-md w-11/12 sm:w-1/3">
                        <h3 className="text-xl font-semibold mb-4">Member Details</h3>
                        <div className="space-y-2 text-sm">
                            <p>
                                <strong>Name:</strong> {viewedMember.fullName}
                            </p>
                            <p>
                                <strong>Date of Birth:</strong> {viewedMember.dateOfBirth}
                            </p>
                            <p>
                                <strong>Postcode:</strong> {viewedMember.postcode}
                            </p>
                            <p>
                                <strong>Email:</strong> {viewedMember.email}
                            </p>
                            <p>
                                <strong>Mobile:</strong> {viewedMember.mobileNumber}
                            </p>
                            <p>
                                <strong>Address:</strong> {viewedMember.address}
                            </p>
                            <p>
                                <strong>Emergency Contact:</strong> {viewedMember.emergencyContactName}
                            </p>
                            <p>
                                <strong>Emergency Phone:</strong> {viewedMember.emergencyPhone}
                            </p>
                            <p>
                                <strong>Relationship:</strong> {viewedMember.relationship}
                            </p>
                            <p>
                                <strong>Alternative Phone:</strong> {viewedMember.alternativePhone}
                            </p>
                            <p>
                                <strong>Membership Type:</strong> {viewedMember.membershipType}
                            </p>
                            <p>
                                <strong>Medical Info:</strong> {viewedMember.medicalInfo}
                            </p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="btn btn-secondary" onClick={() => setIsViewModalOpen(false)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Members;
