function BlogCard({ post }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getCategoryIcon = (category) => {
    const icons = {
      Tech: 'fas fa-laptop-code',
      Travel: 'fas fa-plane',
      Food: 'fas fa-utensils',
      Lifestyle: 'fas fa-heart',
      Health: 'fas fa-heartbeat'
    };
    return icons[category] || 'fas fa-tag';
  };

  return (
    <article className="overflow-hidden transition-shadow duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-xl">
      <div className="bg-gray-200 aspect-w-16 aspect-h-9">
        <img
          src={post.image}
          alt={post.title}
          className="object-cover w-full h-48"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
          }}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm bg-blue-100 text-blue-600`}>
            <i className={`${getCategoryIcon(post.category)} mr-1`}></i>
            {post.category}
          </span>
          <time className="inline-flex items-center text-sm text-gray-500" dateTime={post.date}>
            <i className="mr-1 fas fa-calendar-alt"></i>
            {formatDate(post.date)}
          </time>
        </div>
        <h3 className="mb-3 text-xl font-semibold text-gray-900 transition-colors cursor-pointer line-clamp-2 hover:text-blue-600">
          {post.title}
        </h3>
        <p className="mb-4 text-sm text-gray-600 line-clamp-3">
          {post.description}
        </p>
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-blue-600 transition-all duration-300 rounded-full cursor-pointer hover:text-white hover:bg-blue-500 hover:text-blue-700 group">
            Read More
            <i className="ml-1 transition-transform transform fas fa-arrow-right group-hover:translate-x-1"></i>
          </button>
          <span className="inline-flex items-center text-xs text-gray-400">
            <i className="mr-1 fas fa-clock"></i>
            {post.readTime} min read
          </span>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;