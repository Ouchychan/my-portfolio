function Projects() {
  return (
    <section id="projects" className="py-16 px-8 bg-gray-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Project Placeholder 1 */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm text-center">
            <h4 className="text-xl font-medium mb-2">Coming Soon...</h4>
            <p className="text-gray-600">Stay tuned for upcoming projects.</p>
          </div>

          {/* Project Placeholder 2 */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm text-center">
            <h4 className="text-xl font-medium mb-2">Coming Soon...</h4>
            <p className="text-gray-600">Exciting new work in progress!</p>
          </div>

          {/* Project Placeholder 3 */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm text-center">
            <h4 className="text-xl font-medium mb-2">Coming Soon...</h4>
            <p className="text-gray-600">Projects will be added shortly.</p>
          </div>

          {/* Project Placeholder 4 */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm text-center">
            <h4 className="text-xl font-medium mb-2">Coming Soon...</h4>
            <p className="text-gray-600">More content on the way.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
