const Projects = () => {
  const projects = [
    {
      title: 'AI Agent Portfolio Chatbot',
      description: 'An intelligent chatbot that represents me 24/7, powered by RAG pipeline and GPT-4o-mini with automated lead capture',
      tech: ['GPT-4o-mini', 'RAG', 'Flask', 'Supabase', 'pgvector', 'React', 'Pushover API'],
      features: [
        'RAG pipeline with text-embedding-3-small and Supabase pgvector for semantic search over resume and documents',
        'GPT-4o-mini with function calling for automated lead capture and unknown question tracking',
        'Real-time mobile notifications via Pushover API when someone wants to connect',
        'Full conversation storage and analytics with Flask backend and Supabase database',
      ],
      links: [
        { label: 'Try Live Demo', url: 'https://aditya-mazumdar.netlify.app/' },
        { label: 'View Code', url: 'https://github.com/Aditya1113/Career_assistant_AI_Agent' },
      ],
    },
    {
      title: 'Distributed Prime Finder + Replicated DFS',
      description: 'A fault-tolerant distributed system with coordinator/worker architecture and replicated file system',
      tech: ['Go', 'gRPC', 'Python', 'Raft'],
      features: [
        'Built a fault-tolerant coordinator/worker system with Chandy–Lamport snapshots for consistent recovery and job reassignment on failures',
        'Implemented a replicated DFS with leader election and client failover, plus bounded-memory external k-way merge to produce globally sorted results from large outputs',
        'Added a real-time dashboard to track worker health, throughput, snapshot events, and DFS I/O',
      ],
      link: 'https://github.com/orgs/ADKRL/repositories',
    },
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
      link: 'https://github.com/Aditya1113/My-Shop-RN',
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
      link: 'https://voosh-fe-akkis-projects-0954e459.vercel.app/',
    },
    {
      title: 'Virtual Monitoring System for Student Efficacy',
      description: 'A web-based platform for transparent monitoring of student practical labs with live submission tracking',
      tech: ['React.js', 'Node.js', 'HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Real-time lab session management where faculty can assign tasks and view live student submissions',
        'Prevents academic dishonesty by tracking student work in real-time during practical labs',
        'Published at IEEE ICAC3N-23 Conference (December 2023)',
        'Provides transparent monitoring mechanism for effective e-learning assessment',
      ],
      link: 'https://vms-abes.netlify.app/',
    },
    {
      title: 'Sorting Visualiser',
      description: 'An interactive visualization tool for various sorting algorithms',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      features: [
        'Interactive visualizations of popular sorting algorithms',
        'Real-time animation of sorting process',
        'Adjustable speed and array size controls',
        'Educational tool for understanding algorithm complexity',
      ],
      link: 'https://aditya1113.github.io/sorting-visualiser/',
    },
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="text-4xl font-bold mb-12 gradient-text">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="card text-left">
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
            <ul className="space-y-2 text-gray-400 text-sm mb-4">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {project.links ? (
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            ) : project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project →
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
