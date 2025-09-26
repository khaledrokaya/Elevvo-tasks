export interface Project {
  id: string;
  name: string;
  status: 'active' | 'completed' | 'pending' | 'on-hold';
  deadline: string;
  client: string;
  budget: number;
  progress: number;
  description: string;
}

export interface Activity {
  id: string;
  type: 'project_created' | 'project_completed' | 'payment_received' | 'task_completed' | 'client_message';
  description: string;
  timestamp: Date;
  icon: string;
}

export interface Stats {
  totalProjects: number;
  totalEarnings: number;
  tasksDue: number;
  activeClients: number;
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

export interface MonthlyEarnings {
  month: string;
  earnings: number;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  role: string;
  joinDate: string;
  totalProjects: number;
  totalEarnings: number;
}