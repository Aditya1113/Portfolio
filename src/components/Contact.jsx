const Contact = () => {
  const handleEmailClick = (e) => {
    // Try to open email client
    window.location.href = "mailto:aditya.mazumdar@outlook.com";
    
    // Also copy email to clipboard as fallback
    navigator.clipboard.writeText("aditya.mazumdar@outlook.com")
      .then(() => {
        // Show a temporary notification
        const notification = document.createElement('div');
        notification.textContent = 'Email copied to clipboard!';
        notification.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #0A66C2; color: white; padding: 12px 24px; border-radius: 8px; z-index: 9999; font-size: 14px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);';
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
      })
      .catch(err => console.log('Could not copy email', err));
    
    e.preventDefault();
  };

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
            onClick={handleEmailClick}
            className="card hover:border-blue-500 transition-all duration-300 group cursor-pointer"
          >
            <div className="text-4xl mb-3">📧</div>
            <h3 className="text-lg font-semibold text-blue-400 group-hover:text-blue-300">
              Email
            </h3>
            <p className="text-gray-400">aditya.mazumdar@outlook.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-mazumdar/"
            target="_blank"
            rel="noopener noreferrer"
            className="card hover:border-blue-500 transition-all duration-300 group"
          >
            <div className="mb-3">
              <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-blue-400 group-hover:text-blue-300">
              LinkedIn
            </h3>
            <p className="text-gray-400">Aditya Mazumdar</p>
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
