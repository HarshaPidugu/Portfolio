import { useState } from 'react';
import { X } from 'lucide-react';
import FMD from './assets/FMD.png';
import SDMS from './assets/SDMS.jpg';
import BI from './assets/BI.png';

interface Project {
  id: number;
  title: string;
  technologies: string[];
  image: string;
  summary: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Face Mask Detection",
    technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "Image Classification", "Real-time Video Processing"],
    image: FMD,
    summary: [
      "Developed a real-time face mask detection system using deep learning with TensorFlow/Keras and OpenCV",
      "Implemented a CNN model trained on image datasets to classify masked vs. unmasked faces with high accuracy.",
      "Integrated the model with live video stream for real-time detection using Haar cascades and OpenCV’s"
    ]
  },
  {
    id: 2,
    title: "School Database Management System",
    technologies: ["Java", "MySQL", "JDBC", "CURD Operation"],
    image: SDMS,
    summary: [
      "Built a desktop-based application using Java Swing and JDBC to manage student, teacher, and class records.",
      "Implemented CRUD operations with a MySQL backend and ensured data integrity through validation logic.",
      "Designed intuitive GUI interfaces and modular code structure following OOP principles for scalability."
    ]
  },
  {
    id: 3,
    title: "Power BI Desktop",
    technologies: ["Data Modeling", "ETL", "Data Visualization", "Relational Data Handling"],
    image: BI,
    summary: [
      "Developed an interactive Power BI dashboard using DAX and Power Query to visualize regional sales trends, profit margins, and top-performing products.",
      "Integrated multiple datasets, performed ETL operations, and built dynamic KPIs with slicers for drill-down analysis.",
      "Applied relational modeling techniques to connect tables and optimize data relationships for performance.."
    ]
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#1f2937]">
      <div className="max-w-screen-xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-medium text-slate-200 mb-8 py-12 ">PROJECTS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-slate-800/80 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-slate-200">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-900 rounded-lg w-full max-w-2xl">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-medium text-slate-200">{selectedProject.title}</h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-slate-400 hover:text-slate-200"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Summary as bullet points */}
                <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                  {selectedProject.summary.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                {/* Technologies used */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
