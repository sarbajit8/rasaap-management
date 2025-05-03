import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAttendance } from '../../store/common/attendance-slice';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const Attendance = () => {
  const dispatch = useDispatch();
  const { allRecords = [], isLoading } = useSelector((state) => state.attendance);
console.log(allRecords,"ddddddddddddddddd");

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchAllAttendance());
  }, [dispatch]);

  // Unique users (userId + userName)
  const uniqueUsers = Array.from(
    new Map(
      allRecords
        .filter(r => r.userId && r.userName)
        .map(record => [record.userId, { userId: record.userId, userName: record.userName.trim() }])
    ).values()
  );

  // Filter by username
  const filteredUsers = uniqueUsers.filter((user) =>
    user.userName.replace(/\s+/g, '').toLowerCase().includes(
      searchTerm.replace(/\s+/g, '').toLowerCase()
    )
  );

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header + Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-indigo-600">📋 Users Attendance</h2>
        <input
          type="text"
          placeholder="Search by username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* User Cards */}
      {isLoading ? (
        <p className="text-gray-500">Loading users...</p>
      ) : filteredUsers.length === 0 ? (
        <p className="text-gray-400 italic">No users found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <Link
              to={`../attendance-details/${user.userId}`}
              key={user.userId}
              className="block bg-white p-5 rounded-2xl shadow hover:shadow-lg border hover:border-indigo-500 transition"
            >
              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <User size={24} className="text-indigo-600" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">{user.userName}</p>
                  <p className="text-sm text-gray-500">View Attendance</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};


export default Attendance