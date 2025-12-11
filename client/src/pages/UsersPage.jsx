import { MoreHorizontal, UserCheck, UserX, Search } from "lucide-react";

const USERS = [
  {
    id: 1,
    name: "Maxamed Ismail",
    email: "maxamed@email.com",
    role: "User",
    status: "Active",
    kyc: "Verified",
  },
  {
    id: 2,
    name: "Khalid A.rashid",
    email: "khalid@email.com",
    role: "Manager",
    status: "Active",
    kyc: "Verified",
  },
  {
    id: 3,
    name: "Dahabshiil Co.",
    email: "info@dahab.com",
    role: "Company",
    status: "Pending",
    kyc: "Docs Needed",
  },
  {
    id: 4,
    name: "Abdi Ali",
    email: "abdi@email.com",
    role: "User",
    status: "Banned",
    kyc: "Rejected",
  },
];

export default function UsersPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-trust-DEFAULT uppercase tracking-widest">
          User Management
        </h1>
        <button className="bg-trust-DEFAULT text-white px-6 py-3 rounded shadow font-bold hover:bg-trust-light transition-colors">
          Add New User
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded outline-none focus:border-trust-DEFAULT"
            />
          </div>
          <select className="px-4 py-2 border border-gray-200 rounded outline-none font-bold text-gray-600">
            <option>All Roles</option>
            <option>Admin</option>
            <option>User</option>
          </select>
        </div>

        {/* Table */}
        <table className="w-full text-left">
          <thead className="bg-primary text-white uppercase text-sm">
            <tr>
              <th className="p-4 font-bold">Name</th>
              <th className="p-4 font-bold">Role</th>
              <th className="p-4 font-bold">KYC Status</th>
              <th className="p-4 font-bold">Account Status</th>
              <th className="p-4 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {USERS.map((user) => (
              <tr key={user.id} className="hover:bg-blue-50 transition-colors">
                <td className="p-4">
                  <div className="font-bold text-primary">{user.name}</div>
                  <div className="text-xs text-gray-500">{user.email}</div>
                </td>
                <td className="p-4 font-medium text-gray-700">{user.role}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                      user.kyc === "Verified"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {user.kyc}
                  </span>
                </td>
                <td className="p-4">
                  {user.status === "Active" ? (
                    <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                      <UserCheck className="h-4 w-4" /> Active
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                      <UserX className="h-4 w-4" /> {user.status}
                    </div>
                  )}
                </td>
                <td className="p-4 text-right">
                  <button className="text-gray-400 hover:text-primary">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
