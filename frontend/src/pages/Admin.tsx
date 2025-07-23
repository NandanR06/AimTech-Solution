import { FilePlus, FolderEdit, Mail, Settings, Shield, User } from "lucide-react";


export default function Admin() {
  
 return (
    <div className="min-h-screen bg-gray-100 p-8 pt-[170px]">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-700">Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6  hover:scale-105  transform-transition duration-300">
          <FolderEdit className="text-gray-500 mb-2" size={28} />
          <h2 className="text-xl font-semibold mb-1">Manage Portfolio</h2>
          <p className="text-sm text-gray-600">Add, edit, or delete portfolio items and case studies.</p>
          <button className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-blue-700">Go</button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6  hover:scale-105  transform-transition duration-300">
          <Settings className="text-gray-500 mb-2" size={28} />
          <h2 className="text-xl font-semibold mb-1">Update Services</h2>
          <p className="text-sm text-gray-600">Modify available services and their descriptions.</p>
          <button className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-blue-700">Go</button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6  hover:scale-105  transform-transition duration-300">
          <FilePlus className="text-gray-500 mb-2" size={28} />
          <h2 className="text-xl font-semibold mb-1">Add Blog Posts</h2>
          <p className="text-sm text-gray-600">Write and manage tech updates and guides.</p>
          <button className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-blue-700">Go</button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6  hover:scale-105  transform-transition duration-300">
          <Mail className="text-gray-500 mb-2" size={28} />
          <h2 className="text-xl font-semibold mb-1">Messages</h2>
          <p className="text-sm text-gray-600">View and respond to contact form submissions.</p>
          <button className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-blue-700">Go</button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6  hover:scale-105  transform-transition duration-300">
          <User className="text-gray-500 mb-2" size={28} />
          <h2 className="text-xl font-semibold mb-1">Career Applications</h2>
          <p className="text-sm text-gray-600">Review internship or job applications.</p>
          <button className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-blue-700">Go</button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6  hover:scale-105  transform-transition duration-300">
          <Shield className="text-gray-500 mb-2" size={28} />
          <h2 className="text-xl font-semibold mb-1">Account Settings</h2>
          <p className="text-sm text-gray-600">Change password, update profile, or logout.</p>
          <button className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-blue-700">Go</button>
        </div>
      </div>
    </div>
  );
}
