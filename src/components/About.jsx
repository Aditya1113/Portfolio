const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="text-4xl font-bold mb-8 gradient-text">About Me</h2>
      <div className="max-w-3xl mx-auto">
        <div className="card text-left">
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I'm a Software Development Engineer specializing in cross-platform mobile development and
            AI-powered solutions. Currently pursuing my MSc in Computer Science at the University of Edinburgh.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            At Amber, I architected React Native applications serving thousands of daily users, optimized
            critical user flows from 1.2s to 300ms load times, and reduced bundle sizes by 24MB. I've also
            worked extensively with GenAI tools, building code generators, AI validators, and copilot systems.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My expertise spans React Native, Node.js, AI/ML (LangChain, OpenAI), and cloud technologies.
            I've also trained 60+ organizations including Bank of England, Walmart, and Cisco in React and
            React Native development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
