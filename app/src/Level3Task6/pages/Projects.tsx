import React, { useState } from 'react';
import { mockProjects } from '../data/mockData';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [projects] = useState<Project[]>(mockProjects);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed' | 'pending' | 'on hold'>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.status === filter);

  const getStatusColor = (status: Project['status']): string => {
    switch (status) {
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'on hold': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress: number): string => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/*//* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
          <p className="mt-2 text-gray-600">Manage your freelance projects</p>
        </div>
        <button className="flex items-center px-6 py-2 mt-4 space-x-2 text-white transition-colors bg-blue-600 rounded-lg md:mt-0 hover:bg-blue-700">
          <i className="fas fa-plus"></i>
          <span>New Project</span>
        </button>
      </div>

      {/*//* Filters */}
      <div className="p-6 l36-card">
        <div className="flex flex-wrap gap-2">
          {(['all', 'active', 'completed', 'pending', 'on hold'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === status
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {status === 'all' ? 'All Projects' : status.charAt(0).toUpperCase() + status.slice(1)}
              <span className="px-2 py-1 ml-2 text-xs text-gray-700 bg-white rounded-full bg-opacity-20">
                {status === 'all' ? projects.length : projects.filter(p => p.status === status).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/*//* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <div key={project.id} className="p-6 transition-shadow l36-card hover:shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{project.name}</h3>
                <p className="mb-3 text-sm text-gray-600">{project.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <i className="mr-1 fas fa-user"></i>
                    {project.client}
                  </span>
                  <span className="flex items-center">
                    <i className="mr-1 fas fa-dollar-sign"></i>
                    ${project.budget.toLocaleString()}
                  </span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </span>
            </div>

            {/*//* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm text-gray-500">{project.progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-2 rounded-full ${getProgressColor(project.progress)} transition-all duration-300`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            {/*//* Deadline */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <i className="text-gray-400 fas fa-calendar-alt"></i>
                <span className={`text-sm text-gray-600'}`}>
                  Due: {formatDate(project.deadline)}
                </span>
              </div>

              {/*//* Action Buttons */}
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 transition-colors hover:text-blue-600">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="p-2 text-gray-400 transition-colors hover:text-red-600">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;