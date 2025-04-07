import { useState, useEffect } from 'react';
import photo from '../pages/Assets/photo.png'; // Update path based on your folder structure

const TypewriterText = () => {
  const texts = [
    "Data Jobs",
    "Developer Jobs",
    "Machine Learning",
    "Software Development",
    "AI & Automation"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === texts[currentTextIndex]) {
          setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
        setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1));
      } else {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          return;
        }
        setCurrentText(currentText.slice(0, -1));
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting]);

  return (
    <span className="text-blue-600">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center"> 
      <div className="max-w-screen-xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[65%_35%]  items-center">
        <div className="text-left justify-self-start space-y-6 relative w-5/2">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-100 leading-tight">
            Hi, I'm 
            <span className="text-3xl sm:text-5xl font-bold text-blue-600 leading-tight" > Harsha Vardhan</span>
            <br />
            Interested in <TypewriterText />
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Aspiring Data Engineer & Software Developer passionate about problem-solving 
            and building impactful solutions.
          </p>

          <div className="flex space-x-4">
            <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg transition-all duration-300 ease-in-out
               hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.6)] hover:ring hover:ring-blue-400/50">
              Get in Touch
            </a>
            <a href="#projects" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors duration-200 inline-flex items-center">
              View Projects
            </a>
          </div>
        </div>

        <div className="justify-self-end relative w-3/5">
            <img
              src={photo}
              alt="Harsha Vardhan"
              className="relative rounded-xl shadow-2xl w-full h-auto object-center object-cover scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
  );
}

export default Home;
