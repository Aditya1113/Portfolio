const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="text-4xl font-bold mb-12 gradient-text">Get in Touch</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xl text-gray-300 mb-8">
          I'm always open to new opportunities, collaborations, and interesting projects.
          Feel free to reach out!
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <a
            href="mailto:aditya.mazumdar@outlook.com"
            className="card hover:border-blue-500 transition-all duration-300 group"
          >
            <div className="text-4xl mb-3">📧</div>
            <h3 className="text-lg font-semibold text-blue-400 group-hover:text-blue-300">
              Email
            </h3>
            <p className="text-gray-400">aditya.mazumdar@outlook.com</p>
          </a>
          <a
            href="https://github.com/Aditya1113"
            target="_blank"
            rel="noopener noreferrer"
            className="card hover:border-blue-500 transition-all duration-300 group"
          >
            <div className="text-4xl mb-3">💻</div>
            <h3 className="text-lg font-semibold text-blue-400 group-hover:text-blue-300">
              GitHub
            </h3>
            <p className="text-gray-400">@Aditya1113</p>
          </a>
        </div>
        <div className="card">
          <p className="text-gray-300">
            Or use the chatbot in the bottom right corner to ask me anything!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
