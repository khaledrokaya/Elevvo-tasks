import React, { useState } from 'react';
import { mockUserProfile } from '../data/mockData';
import { UserProfile } from '../types';

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>(mockUserProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<UserProfile>(mockUserProfile);

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof UserProfile, value: string) => {
    setEditedProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      {/*//* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Profile Settings</h1>
          <p className="mt-2 text-gray-600">Manage your account information</p>
        </div>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center px-6 py-2 mt-4 space-x-2 text-white transition-colors bg-blue-600 rounded-lg sm:mt-0 hover:bg-blue-700"
          >
            <i className="fas fa-edit"></i>
            <span>Edit Profile</span>
          </button>
        ) : (
          <div className="flex mt-4 space-x-3 sm:mt-0">
            <button
              onClick={handleSave}
              className="flex items-center px-6 py-2 space-x-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              <i className="fas fa-save"></i>
              <span>Save</span>
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center px-6 py-2 space-x-2 text-white transition-colors bg-gray-600 rounded-lg hover:bg-gray-700"
            >
              <i className="fas fa-times"></i>
              <span>Cancel</span>
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/*//* Profile Card */}
        <div className="lg:col-span-1">
          <div className="p-6 text-center l36-card">
            <div className="mb-6">
              <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 bg-blue-600 rounded-full">
                <i className="text-3xl text-white fas fa-user"></i>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{profile.name}</h2>
              <p className="mt-1 text-gray-600">{profile.role}</p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Projects</span>
                  <span className="font-semibold text-gray-900">{profile.totalProjects}</span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Earnings</span>
                  <span className="font-semibold text-gray-900">${profile.totalEarnings.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*//* Profile Information */}
        <div className="lg:col-span-2">

          {/*//* Personal Information */}
          <div className="p-6 l36-card">
            <h3 className="mb-6 text-lg font-semibold text-gray-900">Personal Information</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedProfile.name}
                      autoComplete='name'
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="py-2 text-gray-900">{profile.name}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      autoComplete='email'
                      value={editedProfile.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="py-2 text-gray-900">{profile.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Role/Title
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="py-2 text-gray-900">{profile.role}</p>
                )}
              </div>
            </form>
          </div>

          {/*//* Security Settings */}
          <div className="p-6 mt-6 l36-card">
            <h3 className="mb-6 text-lg font-semibold text-gray-900">Security Settings</h3>
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  type="password"
                  autoComplete='current-password'
                  placeholder="••••••••"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!isEditing}
                />
              </div>
              {isEditing && (
                <>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      New Password
                    </label>
                    <input
                      type="password"
                      autoComplete='new-password'
                      placeholder="••••••••"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      autoComplete='new-password'
                      placeholder="••••••••"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;