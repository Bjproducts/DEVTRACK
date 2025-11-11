/**
 * Protected Route Component
 * 
 * Wraps routes that require authentication. Redirects to login if user is not authenticated.
 * Can also enforce role-based access control.
 * 
 * Usage:
 *   <ProtectedRoute>
 *     <Dashboard />
 *   </ProtectedRoute>
 * 
 *   <ProtectedRoute requiredRole="admin">
 *     <AdminPanel />
 *   </ProtectedRoute>
 */

import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { hasRole } from '../lib/supabase';

/**
 * ProtectedRoute component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components to render
 * @param {string} [props.requiredRole] - Optional role requirement (student/dev/admin)
 */
export default function ProtectedRoute({ children, requiredRole = null }) {
  const { user, profile, loading } = useAuth();

  // Show loading state while checking auth
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Check role-based access if required
  if (requiredRole && profile) {
    if (!hasRole(profile.role, requiredRole)) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
            <p className="text-gray-600">
              You don't have permission to access this page.
            </p>
          </div>
        </div>
      );
    }
  }

  return children;
}

