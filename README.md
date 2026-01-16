# Aditya Mazumdar - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, featuring an AI-powered chatbot.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **AI Chatbot**: Integrated chatbot powered by OpenAI GPT-4o-mini with RAG capabilities
- **Smooth Animations**: Engaging animations and transitions
- **Section Navigation**: Easy navigation between different portfolio sections

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- ESLint

### Backend (Chatbot API)
- Flask
- OpenAI GPT-4o-mini
- Supabase (optional, for RAG and conversation tracking)
- pypdf for resume parsing

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Python 3.9+
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd api
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   ```bash
   cd api
   cp .env.example .env
   # Edit .env and add your OpenAI API key
   ```

5. **Add your Resume.pdf**
   ```bash
   # Copy your resume to the api directory
   cp /path/to/your/Resume.pdf api/Resume.pdf
   ```

### Running the Application

1. **Start the frontend** (Terminal 1)
   ```bash
   npm run dev
   ```
   The frontend will be available at http://localhost:5173

2. **Start the backend** (Terminal 2)
   ```bash
   cd api
   python chatbot_api.py
   ```
   The API will be available at http://localhost:5001

## Project Structure

```
portfolio/
├── src/
│   ├── components/        # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Publications.jsx
│   │   ├── Contact.jsx
│   │   └── Chatbot.jsx
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── api/
│   ├── chatbot_api.py    # Flask backend
│   ├── requirements.txt  # Python dependencies
│   ├── Resume.pdf        # Your resume (add this)
│   ├── summary.txt       # Professional summary
│   └── README.md         # API documentation
├── public/               # Static assets
├── package.json          # Node dependencies
├── vite.config.js        # Vite configuration
└── tailwind.config.js    # Tailwind configuration
```

## Customization

### Updating Content

1. **Personal Information**: Edit the component files in `src/components/`
2. **Experience**: Modify `src/components/Experience.jsx`
3. **Projects**: Update `src/components/Projects.jsx`
4. **Skills**: Edit `src/components/Skills.jsx`
5. **Colors/Theme**: Customize in `tailwind.config.js`

### Chatbot

The chatbot uses your Resume.pdf and summary.txt to answer questions. To update:
- Replace `api/Resume.pdf` with your latest resume
- Edit `api/summary.txt` with updated information

## Deployment

### Frontend (Vercel/Netlify)
1. Push your code to GitHub
2. Connect to Vercel/Netlify
3. Build command: `npm run build`
4. Output directory: `dist`

### Backend (Render)
See `api/README.md` for detailed deployment instructions.

## License

MIT

## Contact

Aditya Mazumdar - aditya.mazumdar@outlook.com
