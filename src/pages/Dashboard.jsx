/**
 * Dashboard Page Component
 * 
 * Main dashboard for authenticated users. Displays user information,
 * progress tracking, and quick access to features.
 */

import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user, profile } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {profile?.full_name || user?.email?.split('@')[0]}!
          </h1>
          <p className="text-gray-600">
            Track your learning path, AI recommendations, and achievements here.
          </p>
        </div>

        {/* User Info Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Your Role</h3>
            <p className="text-2xl font-bold text-gray-900 capitalize">
              {profile?.role || 'N/A'}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Email</h3>
            <p className="text-lg font-medium text-gray-900">{user?.email}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <Link
              to="/profile"
              className="block text-center bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">Progress Tracker</h3>
              <p className="text-sm text-gray-600">Coming soon - Track your daily tasks and progress</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">Learning Paths</h3>
              <p className="text-sm text-gray-600">Coming soon - AI-generated learning roadmaps</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">Projects</h3>
              <p className="text-sm text-gray-600">Coming soon - Manage your development projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
