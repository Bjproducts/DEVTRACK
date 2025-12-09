/**
 * Supabase Client Configuration
 * 
 * This file initializes and exports the Supabase client for authentication
 * and database operations. Make sure to set your Supabase URL and anon key
 * in your .env file.
 * 
 * @see https://supabase.com/docs/guides/getting-started/quickstarts/reactjs
 */

import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and anon key from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.'
  );
}

/**
 * Supabase client instance
 * Used for all database and authentication operations
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

/**
 * User roles enum
 * Defines the available user roles in the system
 */
export const UserRole = {
  STUDENT: 'student',
  DEVELOPER: 'dev',
  ADMIN: 'admin',
};

/**
 * Helper function to check if a user has a specific role
 * @param {string} userRole - The user's role
 * @param {string} requiredRole - The required role
 * @returns {boolean}
 */
export const hasRole = (userRole, requiredRole) => {
  const roleHierarchy = {
    [UserRole.STUDENT]: 1,
    [UserRole.DEVELOPER]: 2,
    [UserRole.ADMIN]: 3,
  };
  
  return (roleHierarchy[userRole] || 0) >= (roleHierarchy[requiredRole] || 0);
};

