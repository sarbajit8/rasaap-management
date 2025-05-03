import React, { useEffect, useState } from 'react';
import { CalendarDays, LogIn, LogOut, Sandwich, Coffee } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { markAttendance, fetchAttendance } from '../../../store/common/attendance-slice/index';

const Attendance = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { records: attendance, isLoading } = useSelector((state) => state.attendance);

  const [selectedAction, setSelectedAction] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const actionLabels = {
    login: "Log In",
    logout: "Log Out",
    'lunch-in': "Lunch In",
    'lunch-out': "Lunch Out"
  };

  // 🧠 Load attendance on mount
  useEffect(() => {
    if (user?.id) {
      dispatch(fetchAttendance(user.id));
    }
  }, [user, dispatch]);

  const handleClick = (type) => {
    setSelectedAction(type);
    setShowModal(true);
  };

  const confirmAction = () => {
    const now = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
   console.log(user.userName,"rrrrrrrrrrr");
   
    dispatch(markAttendance({
      userId: user.id,
      userName: user.userName,
      type: selectedAction,
      time: now
    })).then(() => {
      setShowModal(false);
      setSelectedAction(null);
    });
  };

  return (
    <div className="p-6 space-y-8 relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-pink-600">🕒 Attendance Tracker</h2>
        <p className="text-gray-500">Date: {new Date().toLocaleDateString()}</p>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <button onClick={() => handleClick('login')} className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl shadow flex flex-col items-center">
          <LogIn />
          <span className="mt-1 font-semibold">Log In</span>
        </button>
        <button onClick={() => handleClick('logout')} className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-xl shadow flex flex-col items-center">
          <LogOut />
          <span className="mt-1 font-semibold">Log Out</span>
        </button>
        <button onClick={() => handleClick('lunch-in')} className="bg-yellow-400 hover:bg-yellow-500 text-white p-4 rounded-xl shadow flex flex-col items-center">
          <Sandwich />
          <span className="mt-1 font-semibold">Lunch In</span>
        </button>
        <button onClick={() => handleClick('lunch-out')} className="bg-blue-400 hover:bg-blue-500 text-white p-4 rounded-xl shadow flex flex-col items-center">
          <Coffee />
          <span className="mt-1 font-semibold">Lunch Out</span>
        </button>
      </div>

      {/* Attendance Logs */}
      <div className="bg-white shadow rounded-xl p-4">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-700">
          <CalendarDays size={20} />
          Attendance Logs
        </h3>
        {isLoading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div className="space-y-4">
            {attendance.map((entry, index) => (
              <div key={index} className="border-b pb-3">
                <p className="font-bold text-pink-500">{entry.date}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700">Logins:</p>
                    <ul className="list-disc ml-5 text-gray-600">
                      {entry.logins.map((time, i) => <li key={i}>{time}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Logouts:</p>
                    <ul className="list-disc ml-5 text-gray-600">
                      {entry.logouts.map((time, i) => <li key={i}>{time}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Lunch In:</p>
                    <ul className="list-disc ml-5 text-gray-600">
                      {entry.lunchIns.map((time, i) => <li key={i}>{time}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Lunch Out:</p>
                    <ul className="list-disc ml-5 text-gray-600">
                      {entry.lunchOuts.map((time, i) => <li key={i}>{time}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center space-y-4 w-full max-w-sm">
            <h2 className="text-xl font-bold text-gray-800">Confirm {actionLabels[selectedAction]}</h2>
            <p className="text-gray-600">Are you sure you want to log <strong>{actionLabels[selectedAction]}</strong> at this time?</p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={confirmAction}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Confirm
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedAction(null);
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendance;
