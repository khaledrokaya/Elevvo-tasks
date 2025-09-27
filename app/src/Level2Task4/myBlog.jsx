import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import BlogCard from './components/BlogCard';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import { blogPosts } from './data/blogPosts';
import './index.css';

const POSTS_PER_PAGE = 6;
function Level2Task4() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50 level2-4-blog">
      <Header />
      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredPosts.length === 0 ? (
              'No posts found'
            ) : (
              <>
                Showing {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} of {filteredPosts.length} posts
                {selectedCategory !== 'All' && (
                  <span className="ml-2 font-medium text-blue-600">
                    in {selectedCategory}
                  </span>
                )}
                {searchQuery && (
                  <span className="ml-2 font-medium text-blue-600">
                    matching "{searchQuery}"
                  </span>
                )}
              </>
            )}
          </p>
        </div>
        {currentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
              {currentPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <div className="py-12 text-center">
            <div className="mb-4 text-6xl text-gray-400">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-700">No posts found</h3>
            <p className="mb-4 text-gray-500">
              {searchQuery
                ? `No posts match your search "${searchQuery}"`
                : `No posts found in the ${selectedCategory} category`
              }
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700"
            >
              <i className="mr-1 fas fa-undo"></i>
              Clear filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default Level2Task4;