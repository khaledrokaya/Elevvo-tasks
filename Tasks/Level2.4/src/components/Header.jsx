function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="py-6">
          <div className="flex flex-col items-center justify-center">
            <div>
              <h1 className="inline-flex items-center text-3xl font-bold text-gray-900 transition-all duration-200 cursor-pointer hover:underline hover:text-blue-600">
                My Blog
              </h1>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-sm text-gray-500">
              <i className="text-sm text-gray-400 fas fa-quote-left"></i>
              <p className="mt-2 italic text-center text-gray-600">Welcome to my blog where I share my thoughts and experiences.</p>
              <i className="text-sm text-gray-400 fas fa-quote-right"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;