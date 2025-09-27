import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/level3.6', icon: 'fas fa-home', label: 'Overview' },
    { path: '/level3.6/projects', icon: 'fas fa-folder', label: 'Projects' },
    { path: '/level3.6/profile', icon: 'fas fa-user', label: 'Profile Settings' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/*//* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 block bg-black/40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/*//* Sidebar */}
      <div className={`l36-sidebar overflow-y-scroll flex flex-col min-h-screen h-full sticky left-0 top-0 w-72 bg-gray-900 text-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>

        {/*//* Logo */}
        <div className="p-8 border-b border-gray-200 border-opacity-20">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center h-12 p-2 bg-blue-600 rounded-full shadow-lg w-52">
              <i className="text-xl text-white fas fa-chart-line"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">FreelancePro</h1>
            </div>
          </div>
        </div>

        {/*//* Navigation */}
        <nav className="mt-8">
          <ul className="px-6 space-y-3">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => window.innerWidth < 768 && onClose()}
                  className={`group flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 ${isActive(item.path)
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 transform scale-105'
                    : 'text-gray-600 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 hover:text-gray-800 hover:shadow-md'
                    }`}
                >
                  <div className={`p-2 rounded-xl transition-all duration-300 ${isActive(item.path)
                    ? 'bg-white bg-opacity-20 shadow-sm'
                    : 'bg-gray-100 group-hover:bg-white group-hover:shadow-sm'
                    }`}>
                    <i className={`${item.icon} ${isActive(item.path) ? 'text-blue-600' : 'text-gray-600'} text-lg`}></i>
                  </div>
                  <span className="font-semibold">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/*//* User info at bottom */}
        <div className="relative bottom-0 left-0 right-0 flex items-end flex-1 p-6 border-t border-gray-200 border-opacity-20">
          <div className="flex items-center p-4 space-x-4 transition-all duration-300 cursor-pointer bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:from-gray-100 hover:to-gray-200 group">
            <div className="flex items-center justify-center w-12 h-12 transition-transform bg-blue-600 shadow-md rounded-xl group-hover:scale-110">
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