const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="section-container text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Aditya Mazumdar
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Software Development Engineer
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            MSc Computer Science student at University of Edinburgh, specializing in cross-platform mobile development and AI-powered solutions
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/Aditya1113"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-blue-500 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
