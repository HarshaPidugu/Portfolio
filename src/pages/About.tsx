import photo from '../pages/Assets/photo.png'; // Update path based on your folder structure

function About() {
  return (
    <div className="min-h-screen py-8 bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#1f2937] flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 items-center">
          {/* Image Section - LEFT */}
          <div className="justify-self-start relative w-3/5">
            <img
              src={Photo}
              alt="Harsha Vardhan"
              className="relative rounded-xl shadow-2xl w-full h-auto object-center object-cover scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* Text Section - RIGHT */}
          <div className="space-y-3 text-white px-8">
            {/* About Me */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-400">About Me</h2>
              <p className="text-slate-400 leading-relaxed" style={{ fontFamily: 'Source Sans 3, sans-serif' }}>
                Computer Science Engineering graduate with a strong foundation in data engineering, BI, and software development. Proficient in SQL, Python, Power BI, and ETL pipelines with experience in RDBMS, API integration, and data visualization. Certified in Power BI, Python, SQL, and Web Development.
              </p>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-3xl font-medium mb-4 text-blue-400">Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex flex-col p-4 bg-slate-800/80 rounded-md shadow-sm">
                  <h4 className="text-blue-400 font-semibold mb-1">Programming Languages</h4>
                  <span className="text-slate-300">Java, Python, PHP</span>
                </div>
                <div className="flex flex-col p-4 bg-slate-800/80 rounded-md shadow-sm">
                  <h4 className="text-blue-400 font-semibold mb-1">Software Development</h4>
                  <span className="text-slate-300">SDLC, REST APIs</span>
                </div>
                <div className="flex flex-col p-4 bg-slate-800/80 rounded-md shadow-sm">
                  <h4 className="text-blue-400 font-semibold mb-1">Databases</h4>
                  <span className="text-slate-300">MySQL, SQL, MongoDB, PostgreSQL</span>
                </div>
                <div className="flex flex-col p-4 bg-slate-800/80 rounded-md shadow-sm">
                  <h4 className="text-blue-400 font-semibold mb-1">Web Technologies</h4>
                  <span className="text-slate-300">HTML, CSS, JavaScript</span>
                </div>
                <div className="flex flex-col p-4 bg-slate-800/80 rounded-md shadow-sm sm:col-span-2">
                  <h4 className="text-blue-400 font-semibold mb-1">Business Intelligence</h4>
                  <span className="text-slate-300">Power BI, ETL, DAX, Relational Modelling, Data Visualization</span>
                </div>
              </div>
            </div>

            {/* Future Plans */}
            <div>
              <h3 className="text-2xl font-medium mb-4 text-blue-400">Future Plans</h3>
              <p className="text-slate-400">
                Actively aiming to build a career in data and analytics, with a strong interest in solving business problems using scalable, data-driven solutions and continuously learning modern data technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
