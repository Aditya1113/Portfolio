const Projects = () => {
  const projects = [
    {
      title: 'MyShop Ecommerce App',
      description: 'A scalable full-stack mobile e-commerce application with optimized UX',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Redux Toolkit'],
      features: [
        'Built with React Native for cross-platform compatibility',
        'Redux Toolkit for efficient state management',
        'Scalable backend with Node.js and MongoDB',
        'Optimized user experience and performance',
      ],
    },
    {
      title: 'Kanban Board',
      description: 'A full-stack kanban board interface for project management',
      tech: ['React.js', 'Node.js', 'MySQL', 'JWT', 'Google OAuth'],
      features: [
        'Drag-and-drop task management interface',
        'JWT authentication with Google OAuth integration',
        'Real-time updates for collaborative work',
        'MySQL database for reliable data storage',
      ],
    },
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="text-4xl font-bold mb-12 gradient-text">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <ul className="space-y-2 text-gray-400 text-sm">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
