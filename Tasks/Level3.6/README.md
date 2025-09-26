# Level 3.6 - Freelance Dashboard

A comprehensive multi-page admin dashboard interface for freelancers built with React, TypeScript, and Tailwind CSS.

## Features

### 📊 Overview Page
- **Summary Cards**: Display key metrics (Total Projects, Earnings, Tasks Due, Active Clients)
- **Interactive Charts**: Monthly earnings bar chart and task types pie chart using Recharts
- **Recent Activity Feed**: Shows latest user activities with timestamps
- **Quick Actions**: Easy access to common tasks

### 📁 Projects Page
- **Project Management**: View all projects with filtering by status (Active, Completed, Pending, On-Hold)
- **Project Cards**: Display project details including progress, deadline, client, and budget
- **Status Indicators**: Visual status badges and progress bars
- **Responsive Grid**: Adapts to different screen sizes

### 👤 Profile Settings Page
- **Profile Information**: View and edit personal details
- **Security Settings**: Password management interface
- **Preferences**: Toggle notification settings
- **Statistics Overview**: Personal stats and achievements

### 🎨 Design Features
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Consistent Layout**: Persistent sidebar and header across all pages
- **Modern UI**: Clean, professional interface with hover effects and animations
- **Dark Theme Ready**: Structured for easy theme switching
- **Font Awesome Icons**: Comprehensive icon set (v6.4.0)

## Technology Stack

- **React 18** with TypeScript for type safety
- **React Router** for client-side routing
- **Tailwind CSS** for styling and responsive design
- **Recharts** for data visualization
- **Vite** for fast development and building
- **Font Awesome** for icons

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Layout.tsx      # Main layout wrapper
│   │   ├── Sidebar.tsx     # Navigation sidebar
│   │   └── Header.tsx      # Top header with notifications
│   └── charts/
│       ├── EarningsChart.tsx    # Monthly earnings bar chart
│       └── TaskTypesChart.tsx   # Task distribution pie chart
├── pages/
│   ├── Overview.tsx        # Dashboard overview page
│   ├── Projects.tsx        # Projects management page
│   └── Profile.tsx         # Profile settings page
├── data/
│   └── mockData.ts         # Mock data for development
├── types/
│   └── index.ts            # TypeScript interfaces
├── App.tsx                 # Main app component
├── main.tsx               # App entry point
└── index.css              # Global styles with level3_6 namespace
```

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Features Implementation

### Routing
- React Router v6 with nested routing
- Persistent layout across all pages
- Active state management for navigation

### Charts & Visualizations
- **Recharts Integration**: Professional charts with animations
- **Monthly Earnings**: Interactive bar chart with tooltips
- **Task Distribution**: Pie chart with custom labels and legend
- **Responsive**: Charts adapt to container size

### State Management
- React hooks for local state management
- TypeScript interfaces for type safety
- Mock data structure for easy testing

### Mobile Responsiveness
- **Collapsible Sidebar**: Hidden on mobile with overlay
- **Responsive Grid**: Adapts from 4 columns to 1 on mobile
- **Touch-Friendly**: Appropriate sizing for mobile interactions
- **Hamburger Menu**: Easy navigation on small screens

### Bonus Features Implemented
- **Notification Dropdown**: Shows 3 most recent activities
- **Time Formatting**: Human-readable time stamps (2h ago, 1d ago)
- **Activity Icons**: Color-coded activity types
- **Hover Effects**: Interactive elements with smooth transitions

## CSS Architecture

All styles are scoped under the `.level3_6` class to prevent conflicts:
- Global wrapper prevents style bleeding
- Tailwind CSS for utility-first styling
- Custom CSS for specific animations and effects
- Responsive breakpoints for mobile optimization

## Mock Data

The application includes realistic mock data:
- 5 sample projects with different statuses
- Recent activity feed with timestamps
- Monthly earnings data for chart visualization
- User profile information
- Task type distribution

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- All components are written in TypeScript for better development experience
- ESLint configuration included for code quality
- Vite for fast HMR and optimal builds
- PostCSS with Tailwind CSS for styling

## Future Enhancements

- Dark theme implementation
- Real-time data integration
- Advanced filtering and search
- Project creation forms
- Client management features
- Invoice generation
- Time tracking integration