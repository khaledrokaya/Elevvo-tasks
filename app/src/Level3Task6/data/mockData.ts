import { Project, Activity, Stats, MonthlyEarnings, UserProfile, ChartData } from '../types';

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Website Redesign',
    status: 'active',
    deadline: '2024-12-15',
    client: 'TechCorp Solutions',
    budget: 5500,
    progress: 75,
    description: 'Complete redesign of the company e-commerce platform with modern UI/UX'
  },
  {
    id: '2',
    name: 'Mobile App Development',
    status: 'active',
    deadline: '2024-11-30',
    client: 'StartupXYZ',
    budget: 8200,
    progress: 45,
    description: 'React Native mobile application for food delivery service'
  },
  {
    id: '3',
    name: 'Brand Identity Package',
    status: 'completed',
    deadline: '2024-10-20',
    client: 'Creative Studio Inc.',
    budget: 2800,
    progress: 100,
    description: 'Complete brand identity including logo, colors, and guidelines'
  },
  {
    id: '4',
    name: 'Dashboard Analytics Tool',
    status: 'pending',
    deadline: '2025-01-15',
    client: 'DataFlow Systems',
    budget: 6500,
    progress: 0,
    description: 'Custom analytics dashboard with real-time data visualization'
  },
  {
    id: '5',
    name: 'Website Maintenance',
    status: 'on hold',
    deadline: '2024-11-10',
    client: 'Local Business Co.',
    budget: 1200,
    progress: 20,
    description: 'Monthly website maintenance and content updates'
  }
];

export const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'payment_received',
    description: 'Payment received from TechCorp Solutions - $2,750',
    timestamp: "2 hours ago",
    icon: 'fas fa-dollar-sign'
  },
  {
    id: '2',
    type: 'project_completed',
    description: 'Brand Identity Package completed for Creative Studio Inc.',
    timestamp: "5 hours ago",
    icon: 'fas fa-check-circle'
  },
  {
    id: '3',
    type: 'client_message',
    description: 'New message from StartupXYZ about Mobile App Development',
    timestamp: "8 hours ago",
    icon: 'fas fa-envelope'
  },
  {
    id: '4',
    type: 'task_completed',
    description: 'UI mockups completed for E-commerce Website Redesign',
    timestamp: "1 day ago",
    icon: 'fas fa-tasks'
  },
  {
    id: '5',
    type: 'project_created',
    description: 'New project created: Dashboard Analytics Tool',
    timestamp: "2 days ago",
    icon: 'fas fa-plus-circle'
  }
];

export const mockStats: Stats = {
  totalProjects: 5,
  totalEarnings: 24200,
  tasksDue: 3,
  activeClients: 4
};

export const mockMonthlyEarnings: MonthlyEarnings[] = [
  { month: 'Jan', earnings: 3200 },
  { month: 'Feb', earnings: 4100 },
  { month: 'Mar', earnings: 2800 },
  { month: 'Apr', earnings: 5500 },
  { month: 'May', earnings: 3900 },
  { month: 'Jun', earnings: 4800 },
  { month: 'Jul', earnings: 6200 },
  { month: 'Aug', earnings: 5100 },
  { month: 'Sep', earnings: 4600 },
  { month: 'Oct', earnings: 7300 },
  { month: 'Nov', earnings: 5800 },
  { month: 'Dec', earnings: 4200 }
];

export const mockTaskTypes: ChartData[] = [
  { name: 'Web Development', value: 45, color: '#3B82F6' },
  { name: 'UI/UX Design', value: 25, color: '#10B981' },
  { name: 'Mobile Apps', value: 20, color: '#F59E0B' },
  { name: 'Maintenance', value: 10, color: '#EF4444' }
];

export const mockUserProfile: UserProfile = {
  name: 'Alex Johnson',
  email: 'alex.johnson@freelancer.com',
  role: 'Full Stack Developer & Designer',
  totalProjects: 24,
  totalEarnings: 124500
};