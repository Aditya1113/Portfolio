const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'Amber',
      period: 'June 2024 – September 2025',
      location: 'Pune, Maharashtra, India',
      achievements: [
        'Architected and developed cross-platform mobile applications using React Native, serving thousands of daily users across iOS and Android',
        'Optimized critical user flows, cutting load times from 1.2s to 300ms and achieving 60 FPS smooth scrolling',
        'Integrated Stripe payments, Zendesk live chat, and Amplitude analytics to deliver seamless user experiences',
        'Led React Native migration (0.72 → 0.79), resolving critical blockers and improving performance by 10%',
        'Built a generic UI component library, reducing bundle size by 24MB and eliminating third-party dependencies',
        'Deployed a custom OTA update system using AWS S3 + CloudFront, reducing app store dependencies',
        'Automated builds and deployments via Fastlane CI/CD pipeline, ensuring faster and reliable release cycles',
        'Designed a Gen AI Code Generator for automatically producing code from Jira user stories',
        'Transitioned from API-based polling to web sockets, resulting in a 30% reduction in server load and network traffic',
      ],
    },
    {
      title: 'Technical Trainer and Developer',
      company: 'Koenig Solutions Pvt. Ltd.',
      period: 'July 2023 – May 2024',
      location: 'Remote',
      achievements: [
        'Delivered React and React Native training for 60+ organizations including Bank of England, Walmart, and Cisco',
        'Built GenAI-based tools such as a Git Conflict Resolver and AI Code Validator using LangChain and OpenAI APIs',
        'Created an AI Copilot autocomplete system, enabling faster code generation and developer productivity',
      ],
    },
  ];

  return (
    <section id="experience" className="section-container bg-slate-900/50">
      <h2 className="text-4xl font-bold mb-12 gradient-text">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="card">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-blue-400">{exp.title}</h3>
                <p className="text-xl text-gray-300">{exp.company}</p>
              </div>
              <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                <p>{exp.period}</p>
                <p>{exp.location}</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-400 mr-2">▸</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
