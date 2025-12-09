/**
 * Navbar Component
 * 
 * Navigation bar that displays different links based on authentication state.
 * Shows user profile info and logout button when authenticated.
 */

import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, profile, signOut, loading } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-white hover:text-blue-400 transition">
              DevTrack
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
              >
                Home
              </Link>
              {user && (
                <Link
                  to="/dashboard"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {loading ? (
              <div className="text-sm text-gray-400">Loading...</div>
            ) : user ? (
              <>
                {/* User Info */}
                <div className="hidden md:flex items-center space-x-3">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
                  >
                    <span>{profile?.full_name || user.email}</span>
                    {profile?.role && (
                      <span className="px-2 py-1 text-xs bg-blue-600 rounded-full capitalize">
                        {profile.role}
                      </span>
                    )}
                  </Link>
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm font-medium transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
