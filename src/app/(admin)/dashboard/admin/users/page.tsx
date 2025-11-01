"use client";

import { User, ShieldCheck } from "lucide-react";

type AdminUser = {
  name: string;
  email: string;
  role: "Owner" | "Admin" | "Analyst";
};

const users: AdminUser[] = [
  { name: "John Doe", email: "john@globalvin.com", role: "Owner" },
  { name: "Jane Smith", email: "jane@globalvin.com", role: "Admin" },
  { name: "Alex Park", email: "alex@globalvin.com", role: "Analyst" },
];

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Users & Roles</h2>
        <button className="px-3 py-2 bg-purple-600 text-white rounded-lg text-sm">Invite User</button>
      </div>

      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.email} className="border-t">
                <td className="p-3 font-medium flex items-center gap-2"><User className="w-4 h-4" /> {u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    u.role === "Owner" ? "bg-purple-100 text-purple-700" : u.role === "Admin" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"
                  }`}>{u.role}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}