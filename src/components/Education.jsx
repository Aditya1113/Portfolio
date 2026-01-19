const Education = () => {
  const education = [
    {
      degree: 'MSc Computer Science',
      institution: 'University of Edinburgh',
      period: 'September 2025 – Present',
      location: 'Edinburgh, UK',
      highlights: [
        'Pursuing advanced studies in Computer Science',
        'Focus on Software Engineering, AI, and Distributed Systems',
      ],
    },
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Dr. A.P.J. Abdul Kalam Technical University',
      period: 'August 2019 – July 2023',
      location: 'Lucknow, Uttar Pradesh, India',
      highlights: [
        'CGPA: 8.06/10',
        'Strong foundation in Computer Science fundamentals',
        'Published research paper at IEEE ICAC3N-23 Conference',
      ],
    },
  ];

  return (
    <section id="education" className="section-container bg-slate-900/50">
      <h2 className="text-4xl font-bold mb-12 gradient-text">Education</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="card text-left">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-blue-400">{edu.degree}</h3>
                <p className="text-xl text-gray-300">{edu.institution}</p>
              </div>
              <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                <p>{edu.period}</p>
                <p>{edu.location}</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300">
              {edu.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
