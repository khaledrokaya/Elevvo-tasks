import React, { useState } from 'react';
import { mockProjects } from '../data/mockData';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [projects] = useState<Project[]>(mockProjects);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed' | 'pending' | 'on-hold'>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.status === filter);

  const getStatusColor = (status: Project['status']): string => {
    switch (status) {
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'on-hold': return 'bg-red-100 text-red-800';
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

  const isOverdue = (deadline: string): boolean => {
    return new Date(deadline) < new Date();
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-2">Manage your freelance projects</p>
        </div>
        <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <i className="fas fa-plus"></i>
          <span>New Project</span>
        </button>
      </div>

      {/* Filters */}
      <div className="l36-card p-6">
        <div className="flex flex-wrap gap-2">
          {(['all', 'active', 'completed', 'pending', 'on-hold'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {status === 'all' ? 'All Projects' : status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
              <span className="ml-2 bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                {status === 'all' ? projects.length : projects.filter(p => p.status === status).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="l36-card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <i className="fas fa-user mr-1"></i>
                    {project.client}
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-dollar-sign mr-1"></i>
                    ${project.budget.toLocaleString()}
                  </span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status.replace('-', ' ')}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm text-gray-500">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${getProgressColor(project.progress)} transition-all duration-300`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Deadline */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <i className="fas fa-calendar-alt text-gray-400"></i>
                <span className={`text-sm ${isOverdue(project.deadline) ? 'text-red-600 font-medium' : 'text-gray-600'}`}>
                  Due: {formatDate(project.deadline)}
                  {isOverdue(project.deadline) && project.status !== 'completed' && (
                    <span className="ml-2 text-red-500">
                      <i className="fas fa-exclamation-triangle"></i>
                      Overdue
                    </span>
                  )}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="l36-card p-12 text-center">
          <div className="text-gray-400 mb-4">
            <i className="fas fa-folder-open text-6xl"></i>
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600 mb-6">No projects match the current filter criteria.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Create Your First Project
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;