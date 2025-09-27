# Personal Blog Homepage - Level 2.4

A responsive personal blog homepage built with React, Tailwind CSS, and Vite.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Blog Post Cards**: Clean card layout displaying title, image, description, and date
- **Category Filtering**: Filter posts by category (Tech, Travel, Food, Lifestyle, Health)
- **Search Functionality**: Search posts by title or description keywords
- **Pagination**: Displays 6 posts per page with navigation controls
- **Modern UI**: Built with Tailwind CSS for a clean, professional look

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Fast build tool and development server
- **JavaScript (ES6+)**: Modern JavaScript features

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd Tasks/Level2.4
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Site header with navigation
│   ├── BlogCard.jsx    # Individual blog post card
│   ├── CategoryFilter.jsx # Category filter buttons
│   ├── SearchBar.jsx   # Search input component
│   └── Pagination.jsx  # Pagination controls
├── data/
│   └── blogPosts.js    # Mock blog post data
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## Key Features Implemented

### 1. React Components & Props
- Modular component architecture
- Props passed between parent and child components
- Proper component composition

### 2. State Management
- useState hooks for managing application state
- Category selection state
- Search query state
- Pagination state

### 3. Responsive Grid Layout
- CSS Grid for blog post cards
- Responsive breakpoints (1 column on mobile, 2 on tablet, 3 on desktop)
- Proper spacing and alignment

### 4. Filtering System
- Category-based filtering
- Search functionality (title and description)
- Combined filters work together

### 5. Pagination
- Displays 6 posts per page
- Smart pagination with ellipsis for large page counts
- Previous/Next navigation

### 6. Conditional Rendering
- Empty state when no posts match filters
- Dynamic content based on current state
- Responsive UI elements

### 7. UI/UX Features
- Hover effects on cards and buttons
- Loading states for images
- Clean, modern design
- Accessible navigation

## Bonus Features

- **Advanced Search**: Search works on both title and description
- **Clear Filters**: Easy way to reset all filters
- **Results Summary**: Shows current filter status and result count
- **Image Fallback**: Graceful handling of broken images
- **Reading Time**: Estimated reading time for each post
- **Smooth Animations**: Hover effects and transitions

## Styling

The project uses Tailwind CSS for styling with:
- Custom color palette
- Responsive design utilities
- Component-specific styles
- Hover and focus states
- Modern card-based layout

## Future Enhancements

- Add individual blog post pages
- Implement tags system
- Add author information
- Include social sharing buttons
- Add comment system
- Implement dark mode
- Add bookmark functionality