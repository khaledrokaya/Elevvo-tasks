import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: 'fas fa-home', label: 'Overview' },
    { path: '/projects', icon: 'fas fa-folder', label: 'Projects' },
    { path: '/profile', icon: 'fas fa-user', label: 'Profile Settings' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`l36-sidebar min-h-screen h-auto fixed left-0 top-0 h-full w-64 bg-gray-900 text-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}>

        {/* Logo */}
        <div className="p-8 border-b border-gray-200 border-opacity-20">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center h-10 p-2 rounded-full shadow-lg w-52 bg-gradient-to-br from-blue-500 to-purple-600">
              <i className="text-xl text-white fas fa-chart-line"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">FreelancePro</h1>
              <p className="text-sm font-medium text-gray-500">Dashboard v3.6</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-8">
          <ul className="px-6 space-y-3">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => window.innerWidth < 768 && onClose()}
                  className={`group flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 ${isActive(item.path)
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 transform scale-105'
                    : 'text-gray-600 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 hover:text-gray-800 hover:shadow-md'
                    }`}
                >
                  <div className={`p-2 rounded-xl transition-all duration-300 ${isActive(item.path)
                    ? 'bg-white bg-opacity-20 shadow-sm'
                    : 'bg-gray-100 group-hover:bg-white group-hover:shadow-sm'
                    }`}>
                    <i className={`${item.icon} text-lg`}></i>
                  </div>
                  <span className="font-semibold">{item.label}</span>
                  {isActive(item.path) && (
                    <div className="w-2 h-2 ml-auto bg-white rounded-full opacity-75"></div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User info at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 border-opacity-20">
          <div className="flex items-center p-4 space-x-4 transition-all duration-300 cursor-pointer bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:from-gray-100 hover:to-gray-200 group">
            <div className="flex items-center justify-center w-12 h-12 transition-transform shadow-md bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110">
              <i className="text-lg text-white fas fa-user"></i>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-800">Alex Johnson</p>
              <p className="text-xs font-medium text-gray-500">Senior Freelancer</p>
            </div>
            <div className="transition-opacity opacity-0 group-hover:opacity-100">
              <i className="text-gray-400 fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;