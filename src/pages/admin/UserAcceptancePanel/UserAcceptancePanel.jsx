import { useState, useEffect } from 'react';

export default function UserAcceptancePanel() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = {
          data: [
            { id: 1, name: 'Meet Talavia', oid: '100234', email: 'xyz@einfochips.com', date: '11-04-2025' },
            { id: 2, name: 'Dax Patel', oid: '100234', email: 'xyz@einfochips.com', date: '11-04-2025' },
            { id: 3, name: 'Rutvi Patel', oid: '100234', email: 'xyz@einfochips.com', date: '11-04-2025' },
            { id: 4, name: 'Harsh Pandey', oid: '100234', email: 'xyz@einfochips.com', date: '11-04-2025' },
            { id: 5, name: 'Tirth Patel', oid: '100234', email: 'xyz@einfochips.com', date: '11-04-2025' },
          ]
        };
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleAccept = async (userId) => {
    console.log(`Accepting user with ID: ${userId}`);
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleReject = async (userId) => {
    console.log(`Rejecting user with ID: ${userId}`);
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleClose = () => {
    console.log('Closing panel');
    // You might want to route back or close modal in real case
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-blue-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm max-w-4xl mx-auto">
      {/* Header */}
      <div className="grid grid-cols-4 gap-4 pb-2 mb-4 border-b border-gray-200 text-gray-400 text-sm">
        <div>User Name</div>
        <div>OID</div>
        <div>Email</div>
        <div>Date</div>
      </div>

      {/* User List */}
      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="grid grid-cols-5 gap-4 items-center p-4 bg-white rounded-xl shadow-md"
          >
            <div className="font-medium text-gray-700">{user.name}</div>
            <div className="text-gray-600">{user.oid}</div>
            <div className="text-gray-600">{user.email}</div>
            <div className="text-gray-600">{user.date}</div>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => handleAccept(user.id)}
                className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Accept
              </button>
              <button
                onClick={() => handleReject(user.id)}
                className="bg-red-500 text-white px-4 py-1 rounded-md text-sm font-medium hover:bg-red-600"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleClose}
          className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
