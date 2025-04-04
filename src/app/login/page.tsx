'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function LoginPage() {
  const [accountType, setAccountType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1A1A1A] items-center justify-center p-12">
        <div className="max-w-[600px] text-center">
          <Image
            src="/images/login-page-image.png"
            alt="Login Illustration"
            width={500}
            height={500}
            className="mb-8"
          />
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-black">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/user-circle.svg"
                alt="User Icon"
                width={48}
                height={48}
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-400">Sign in to continue to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="accountType" className="block text-sm font-medium text-gray-300 mb-2">
                  Choose account type
                </label>
                <select
                  id="accountType"
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                  className="w-full px-4 py-2 bg-[#1A1A1A] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select type</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="employer">Employer</option>
                </select>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full bg-[#1A1A1A] text-white border-gray-700 hover:bg-gray-800"
              >
                Continue with Google
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-black text-gray-400">or</span>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-[#1A1A1A] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="name@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-[#1A1A1A] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Sign In
            </Button>

            <div className="text-center">
              <a href="#" className="text-sm text-purple-500 hover:text-purple-400">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}