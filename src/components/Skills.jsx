const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['C++', 'Python', 'JavaScript (ES6+)', 'TypeScript', 'Go'],
      color: 'blue',
    },
    {
      category: 'Frontend Development',
      skills: ['React.js', 'React Native', 'Redux', 'Redux Toolkit', 'HTML5', 'CSS3'],
      color: 'cyan',
    },
    {
      category: 'UI/UX Tools',
      skills: ['Tailwind CSS', 'Next UI'],
      color: 'teal',
    },
    {
      category: 'Backend & Databases',
      skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Go', 'REST APIs'],
      color: 'green',
    },
    {
      category: 'Development Tools',
      skills: ['Git', 'VS Code', 'Fastlane', 'AWS S3', 'CloudFront', 'CI/CD'],
      color: 'purple',
    },
    {
      category: 'AI/ML',
      skills: ['LangChain', 'OpenAI API', 'TensorFlow', 'Python scripting'],
      color: 'pink',
    },
    {
      category: 'Other Technologies',
      skills: ['WebSocket', 'OAuth 2.0', 'Flutterflow', 'SQL', 'GCC', 'Linux'],
      color: 'indigo',
    },
  ];

  const colorMap = {
    blue: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
    cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
    teal: 'bg-teal-500/10 border-teal-500/30 text-teal-300',
    green: 'bg-green-500/10 border-green-500/30 text-green-300',
    purple: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
    pink: 'bg-pink-500/10 border-pink-500/30 text-pink-300',
    indigo: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300',
  };

  return (
    <section id="skills" className="section-container">
      <h2 className="text-4xl font-bold mb-12 gradient-text">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <div key={index} className="card">
            <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 border rounded-full text-sm ${colorMap[category.color]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
