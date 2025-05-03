import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAttendance } from '../../store/common/attendance-slice';
import { CalendarDays, Calendar } from 'lucide-react';

const AttendanceDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { records, isLoading } = useSelector((state) => state.attendance);

  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    if (id) {
      dispatch(fetchAttendance(id));
    }
  }, [dispatch, id]);

  const filteredRecords = selectedDate
    ? records.filter((rec) => rec.date === selectedDate)
    : records;

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* Header + Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
          <CalendarDays />
          Attendance Details
        </h2>

        {/* Filter Box */}
        <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-sm">
          <label htmlFor="filter-date" className="text-sm text-gray-600 whitespace-nowrap">
            Filter by date:
          </label>
          <input
            id="filter-date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border-none focus:outline-none text-sm text-gray-800 bg-transparent"
          />
          {selectedDate && (
            <button
              onClick={() => setSelectedDate('')}
              className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full hover:bg-red-200 transition"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Cards or Loader */}
      {isLoading ? (
        <p className="text-gray-500">Loading attendance...</p>
      ) : filteredRecords.length === 0 ? (
        <p className="text-gray-400 italic">No records found for selected date</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecords.map((record) => (
            <div
              key={record._id}
              className="bg-white rounded-2xl shadow p-5 space-y-3 border border-gray-100 hover:border-indigo-300 transition"
            >
              <h3 className="text-lg font-semibold text-indigo-600">{record.date}</h3>
              <div className="space-y-1 text-sm text-gray-700">
                <p><span className="font-medium">Logins:</span> {record.logins?.join(', ') || '-'}</p>
                <p><span className="font-medium">Logouts:</span> {record.logouts?.join(', ') || '-'}</p>
                <p><span className="font-medium">Lunch In:</span> {record.lunchIns?.join(', ') || '-'}</p>
                <p><span className="font-medium">Lunch Out:</span> {record.lunchOuts?.join(', ') || '-'}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AttendanceDetails;
