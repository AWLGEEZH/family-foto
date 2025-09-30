import Link from 'next/link';
import { Camera, Heart, Shield, Users, Upload, Image } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">PhotoShare</span>
              <span className="text-sm text-gray-500">Family</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/auth/signin" 
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Camera className="h-20 w-20 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Share Family Moments
            <span className="block text-indigo-600">Privately & Securely</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create a private space for your family to share photos and videos. 
            Keep precious memories safe and accessible to only those who matter most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/auth/signin"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Heart className="h-5 w-5 mr-2" />
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <Shield className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Private & Secure</h3>
            <p className="text-gray-600">
              Your family photos are encrypted and only accessible to invited family members.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Family Only</h3>
            <p className="text-gray-600">
              Invite-only access ensures only your closest family members can view and share.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <Upload className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Sharing</h3>
            <p className="text-gray-600">
              Upload photos and videos instantly. Everyone stays connected to special moments.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Camera className="h-6 w-6 text-indigo-600" />
              <span className="font-semibold">PhotoShare Family</span>
            </div>
            <p> 2024 PhotoShare Family. Made with  for families.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
