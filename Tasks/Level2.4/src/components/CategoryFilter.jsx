function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const categories = [
    { name: 'All', icon: 'fas fa-th-large' },
    { name: 'Tech', icon: 'fas fa-laptop-code' },
    { name: 'Travel', icon: 'fas fa-plane' },
    { name: 'Food', icon: 'fas fa-utensils' },
    { name: 'Lifestyle', icon: 'fas fa-heart' },
    { name: 'Health', icon: 'fas fa-heartbeat' }
  ];

  return (
    <div className="flex flex-wrap gap-2">
      <span className="self-center mr-2 text-sm font-medium text-gray-700">
        <i className="mr-1 fas fa-filter"></i>
        Filter by:
      </span>
      {categories.map(category => (
        <button
          key={category.name}
          onClick={() => onCategoryChange(category.name)}
          className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2 ${selectedCategory === category.name
            ? 'category-active'
            : 'category-inactive'
            }`}
        >
          <i className={category.icon}></i>
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;