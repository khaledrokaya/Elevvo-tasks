import React, { useState } from 'react';
import { mockActivities } from '../../data/mockData';
import { Activity } from '../../types';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const recentActivities = mockActivities.slice(0, 3);

  const formatTimeAgo = (timestamp: Date): string => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));

    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  };

  const getActivityColor = (type: Activity['type']): string => {
    switch (type) {
      case 'payment_received': return 'text-green-500';
      case 'project_completed': return 'text-blue-500';
      case 'client_message': return 'text-purple-500';
      case 'task_completed': return 'text-orange-500';
      case 'project_created': return 'text-indigo-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <header className="relative top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side - Menu button and title */}
        <div className="flex items-center space-x-4 overflow-visible ">
          <button
            onClick={onMenuToggle}
            className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
          >
            <i className="text-gray-600 fas fa-bars"></i>
          </button>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            <p className="text-sm text-gray-500">Welcome back, Alex!</p>
          </div>
        </div>

        {/* Right side - Search and notifications */}
        <div className="flex items-center space-x-4">
          {/* Search bar - hidden on mobile */}
          <div className="items-center hidden space-x-2 md:flex">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                className="py-2 pl-10 pr-4 border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <i className="absolute text-gray-400 fas fa-search left-3 top-3"></i>
            </div>
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 !overflow-visible rounded-lg hover:bg-gray-100"
            >
              <i className="text-gray-600 fas fa-bell"></i>
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
                {recentActivities.length}
              </span>
            </button>

            {/* Notifications dropdown */}
            {showNotifications && (
              <div className="absolute z-50 py-2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg -right-16 l36-notification w-80">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-800">Recent Activities</h3>
                </div>
                <div className="overflow-y-auto max-h-96">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="px-4 py-3 border-b hover:bg-gray-50 border-gray-50 last:border-b-0">
                      <div className="flex items-start space-x-3">
                        <div className={`mt-1 ${getActivityColor(activity.type)}`}>
                          <i className={activity.icon}></i>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-800">{activity.description}</p>
                          <p className="mt-1 text-xs text-gray-500">{formatTimeAgo(activity.timestamp)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-100">
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    View all activities
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
              <i className="text-sm text-white fas fa-user"></i>
            </div>
            <span className="hidden text-sm font-medium text-gray-700 md:block">Alex J.</span>
          </div>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="px-6 pb-4 md:hidden">
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <i className="absolute text-gray-400 fas fa-search left-3 top-3"></i>
        </div>
      </div>

      {/* Overlay for notifications on mobile */}
      {showNotifications && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setShowNotifications(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;