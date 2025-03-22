import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const dataEngineeringSkills = [
    "Python", "SQL", "PySpark", "Azure Data Factory", "Databricks",
    "Azure Synapse Analytics", "Azure Data Lake Storage", "Power BI",
    "Qlik CDC", "ETL", "Data Warehousing"
  ];

  const devOpsSkills = [
    "Azure DevOps", "Jira", "Git", "CI/CD", "Agile Methodologies"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Data Engineer with expertise in building scalable data pipelines,
              real-time CDC solutions, and cloud-based data architectures. Passionate
              about transforming raw data into actionable insights.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Data Engineering </h3>
                <div className="flex flex-wrap gap-2">
                  {dataEngineeringSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> DevOps & Tools </h3>
                <div className="flex flex-wrap gap-2">
                  {devOpsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech in Computer Science </strong> - University Name
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Data Engineer at TEKsystems Global Services (Present)
                  </h4>
                  <p>
                    Built and deployed 30+ ETL pipelines in Azure, handling complex workflows like SCD Type 1 & Type 2,
                    processing 30M+ rows from multiple sources, and integrating real-time CDC for 100K+ rows daily.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Data Engineer Intern at TEKsystems Global Services
                  </h4>
                  <p>
                    Developed an ETL solution using Talend, Python, and SharePoint; automated skill extraction
                    from PPT files with NLP, achieving 96% accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
