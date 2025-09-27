import React from 'react';
import { mockStats, mockActivities, mockMonthlyEarnings, mockTaskTypes } from '../data/mockData';
import EarningsChart from '../components/charts/EarningsChart';
import TaskTypesChart from '../components/charts/TaskTypesChart';
import { Activity } from '../types';

const Overview: React.FC = () => {
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
    <div className="space-y-6">
      {/*//* Page Header */}
      <div className="mb-8">
        <div className="flex items-center mb-2 space-x-3">
          <h1 className="text-4xl font-bold text-transparent bg-gray-900 bg-clip-text">Overview</h1>
        </div>
        <p className="text-lg font-medium text-gray-600 ">Welcome back! Here's what's happening with your projects today.</p>
      </div>

      {/*//* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">
        <div className="relative p-8 overflow-hidden text-white l36-card h-fit l36-stat-card-purple">
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="mb-1 text-sm font-medium opacity-90">Total Projects</p>
              <p className="mt-2 mb-1 text-4xl font-bold">{mockStats.totalProjects}</p>
            </div>
            <div className="p-4 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm">
              <i className="text-3xl text-purple-500 fas fa-folder"></i>
            </div>
          </div>
        </div>

        <div className="relative p-8 overflow-hidden text-white l36-card h-fit l36-stat-card-green">
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="mb-1 text-sm font-medium opacity-90">Total Earnings</p>
              <p className="mt-2 mb-1 text-4xl font-bold">${mockStats.totalEarnings.toLocaleString()}</p>
            </div>
            <div className="p-4 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm">
              <i className="text-3xl text-green-500 fas fa-dollar-sign"></i>
            </div>
          </div>
        </div>

        <div className="relative p-8 overflow-hidden text-white h-fit l36-card l36-stat-card-orange">
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="mb-1 text-sm font-medium opacity-90">Tasks Due</p>
              <p className="mt-2 mb-1 text-4xl font-bold">{mockStats.tasksDue}</p>
            </div>
            <div className="p-4 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm">
              <i className="text-3xl text-orange-500 fas fa-clock"></i>
            </div>
          </div>
        </div>

        <div className="relative p-8 overflow-hidden text-white h-fit l36-card l36-stat-card-blue">
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="mb-1 text-sm font-medium opacity-90">Active Clients</p>
              <p className="mt-2 mb-1 text-4xl font-bold">{mockStats.activeClients}</p>
            </div>
            <div className="p-4 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm">
              <i className="text-3xl text-blue-500 fas fa-users"></i>
            </div>
          </div>
        </div>
      </div>

      {/*//* Charts Section */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <EarningsChart data={mockMonthlyEarnings} />
        <TaskTypesChart data={mockTaskTypes} />
      </div>

      {/*//* Recent Activity */}
      <div className="p-8 l36-card">
        <div className="flex items-center justify-between mb-8">
          <h2 className="flex items-center text-2xl font-bold text-gray-800">
            <i className="mr-3 text-blue-600 fas fa-history"></i>
            Recent Activity
          </h2>
          <button className="px-4 py-2 text-sm font-semibold text-white transition-all duration-300 transform bg-blue-600 shadow-lg rounded-xl hover:bg-blue-700 hover:shadow-xl hover:scale-105">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {mockActivities.slice(0, 5).map((activity) => (
            <div key={activity.id} className="flex items-start p-5 space-x-4 transition-all duration-300 border border-gray-100 cursor-pointer group bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:from-white hover:to-gray-50 hover:border-gray-200 hover:shadow-md">
              <div className={`p-3 rounded-xl ${getActivityColor(activity.type)} bg-white shadow-sm group-hover:scale-110 transition-transform`}>
                <i className={`${activity.icon} text-lg`}></i>
              </div>
              <div className="flex-1">
                <p className="font-medium leading-relaxed text-gray-800">{activity.description}</p>
                <div className="flex items-center mt-2">
                  <span className="px-3 py-1 text-sm text-gray-500 bg-white rounded-full shadow-sm">{activity.timestamp}</span>
                </div>
              </div>
              <div className="transition-opacity opacity-0 group-hover:opacity-100">
                <i className="text-gray-400 fas fa-chevron-right"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*//* Quick Actions */}
      <div className="p-8 l36-card">
        <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-800">
          <i className="mr-3 text-yellow-500 fas fa-bolt"></i>
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <button className="flex items-center p-4 space-x-4 text-white transition-all duration-300 transform group bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-xl">
            <div className="p-3 transition-transform bg-white bg-opacity-20 rounded-xl group-hover:scale-110">
              <i className="text-2xl text-blue-500 fas fa-plus-circle"></i>
            </div>
            <div className="text-left">
              <span className="block text-lg font-bold">Create Project</span>
              <span className="text-sm text-blue-100">Start something new</span>
            </div>
          </button>
          <button className="flex items-center p-4 space-x-4 text-white transition-all duration-300 transform group bg-gradient-to-r from-green-500 to-green-600 rounded-2xl hover:from-green-600 hover:to-green-700 hover:scale-105 hover:shadow-xl">
            <div className="p-3 transition-transform bg-white bg-opacity-20 rounded-xl group-hover:scale-110">
              <i className="text-2xl text-green-500 fas fa-file-invoice-dollar"></i>
            </div>
            <div className="text-left">
              <span className="block text-lg font-bold">Generate Invoice</span>
              <span className="text-sm text-green-100">Get paid faster</span>
            </div>
          </button>
          <button className="flex items-center p-4 space-x-4 text-white transition-all duration-300 transform group bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl hover:from-purple-600 hover:to-purple-700 hover:scale-105 hover:shadow-xl">
            <div className="p-3 transition-transform bg-white bg-opacity-20 rounded-xl group-hover:scale-110">
              <i className="text-2xl text-purple-500 fas fa-envelope"></i>
            </div>
            <div className="text-left">
              <span className="block text-lg font-bold">Contact Client</span>
              <span className="text-sm text-purple-100">Stay connected</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;