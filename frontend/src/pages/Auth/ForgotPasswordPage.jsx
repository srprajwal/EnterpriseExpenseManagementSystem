import React from 'react';
import ForgotPasswordForm from '../../components/Auth/ForgotPasswordForm';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
        <ForgotPasswordForm />
        <p className="mt-4 text-sm">
          Remember your password?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;