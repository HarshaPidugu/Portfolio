import { useState } from 'react';
import { X } from 'lucide-react';
import course1 from '../pages/Assets/course1.jpg';
import course2 from '../pages/Assets/course2.jpg';
import course3 from '../pages/Assets/course3.webp';
import course4 from '../pages/Assets/course4.jpg';

interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  skills: string[];
  credentialLink?: string;
  image: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Python: Comprehensive Bootcamp",
    organization: "Udemy",
    date: "August 2020",
    skills: ["Python", "Data Analysis", "Machine Learning", "Statistics"],
    credentialLink: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-a0226e13-d8b8-4277-940e-e43e97b70f9d.pdf",
    image: course3
  },
  {
    id: 4,
    title: "Advance Web Developer Course",
    organization: "Udemy",
    date: "August 2022",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Python", "Django"],
    credentialLink: "https://coursera.org/verify/specialization/",
    image: course4
  },
  {
    id: 2,
    title: "Data Visualization with Power BI",
    organization: "Udemy",
    date: "October 2024",
    skills: ["Power BI", "ETL", "DAX", "Relational Modelling", "Data Visualization"],
    credentialLink: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-4fdaa1c3-346d-45f5-a6e4-9bd0b8e9a742.pdf",
    image: course2
  },
  {
    id: 3,
    title: "SQL for Data Analysis & Data Science",
    organization: "Udemy",
    date: "January 2025",
    skills: ["MySQL", "SQL", "Data Analysis", "Data Science"],
    credentialLink: "https://coursera.org/verify/specialization/",
    image: course1
  },
  
];

function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#1f2937]">
      <div className="max-w-screen-xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-medium text-slate-200 mb-8">CERTIFICATIONS</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-800/80 rounded-lg overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform"
              onClick={() => setSelectedCert(cert)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-200">{cert.title}</h3>
                <p className="text-sm text-slate-400">{cert.organization}</p>
                <p className="text-sm text-slate-500 mt-1">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-900 rounded-lg w-full max-w-xl">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-200">{selectedCert.title}</h2>
                    <p className="text-sm text-slate-400">{selectedCert.organization}</p>
                    <p className="text-sm text-slate-500">{selectedCert.date}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="text-slate-400 hover:text-slate-200"
                  >
                    <X size={20} />
                  </button>
                </div>

                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />

                <div className="mb-4">
                  <p className="text-slate-300 text-sm font-medium mb-2">Skills Learned:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedCert.credentialLink && (
                  <a
                    href={selectedCert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm text-blue-400 hover:underline"
                  >
                    View Credential
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certifications;
