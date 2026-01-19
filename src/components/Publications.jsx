const Publications = () => {
  const publications = [
    {
      title: 'Virtual Monitoring System for Student Efficacy',
      platform: '5th IEEE International Conference on Advances in Computing, Communication Control and Networking (ICAC3N-23)',
      date: 'December 2023',
      description: 'A web-based platform to provide transparent monitoring of student practical labs',
      link: 'https://ieeexplore.ieee.org/document/10541836',
    },
  ];

  return (
    <section id="publications" className="section-container bg-slate-900/50">
      <h2 className="text-4xl font-bold mb-12 gradient-text">Publications & Articles</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="card text-left">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-blue-400">{pub.title}</h3>
              <span className="text-gray-400 text-sm">{pub.date}</span>
            </div>
            <p className="text-gray-300 mb-2">{pub.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-cyan-400 text-sm">{pub.platform}</span>
              <a
                href={pub.link}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
