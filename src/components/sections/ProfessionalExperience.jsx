import { RevealOnScroll } from "../RevealOnScroll";
import ResumeURL from "../../assets/Sanskar_Dikshit_Resume_2025.pdf";

export const ProfessionalExperience = () => {
  const programmingLanguageSkills = [
    "SQL (Advanced)",
    "CTEs",
    "Window Functions",
    "Indexing",
    "Query Optimization",
    "Python",
    "Pyspark",
  ];
  const dataEngineeringSkills = [
    "Extract Transform Load(ETL)",
    "SQL Server Management Studio",
    "Azure SQL Database",
    "Azure Data Factory",
    "Azure Synapse Analytics",
    "Azure Data Lake Storage",
    "Databricks",
    "Power BI",
    "Data Warehouse",
    "Qlik CDC",
    "Cloud Data Engineering",
  ];

  const agileSkills = ["Azure DevOps", "Jira", "Git", "CI/CD"];

  return (
    <section
      id="professionalexperience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl">
          <div className="grid grid-cols-3">
            <div className="my-card">
              <a
                target="_blank"
                className="underline my-text-primary hover:text-blue-300 transition-colors"
                href={ResumeURL}
              >
                Download Resume
              </a>

              <h2 className="text-2xl bg-clip-text my-text-black my-6">
                Story Behind the Engineer
              </h2>

              <p className="my-text-black">
                My data engineering journey started at{" "}
                <strong>Manipal University Jaipur</strong>, juggling code,
                projects, and a bit of freelancing. After graduation, Bangalore
                became home, and TEKsystems Global Services became the
                playground. Now, with <strong>2.5 years of experience</strong>,
                I spend my days building ETL pipelines, fixing messy datasets,
                and making the most out of the quintessential corporate life.
              </p>
            </div>

            <div className="my-card col-span-2">
              <h2 className="text-2xl bg-clip-text my-text-black">🛠️ Skills</h2>

              <div className="my-6 transition-all">
                <h3 className="text-xl font-bold mb-4"> Data Engineering </h3>
                <div className="flex flex-wrap gap-2">
                  {dataEngineeringSkills.map((tech, key) => (
                    <span key={key} className="my-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="my-6 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguageSkills.map((tech, key) => (
                    <span key={key} className="my-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="my-6 transition-all">
                <h3 className="text-xl font-bold mb-4">Agile Methodologies</h3>
                <div className="flex flex-wrap gap-2">
                  {agileSkills.map((tech, key) => (
                    <span key={key} className="my-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="my-card col-span-3">
              <h2 className="text-2xl bg-clip-text my-text-black">
                {" "}
                💼 Work Experience{" "}
              </h2>
              <div className="space-y-4 my-text-black">
                <div>
                  <p className="my-text-black my-6">
                    <strong>Data Engineer at TEKsystems Global Services</strong>
                    <span className="float-right">
                      [September 2022 - Present]
                    </span>
                    <br />
                    Built and deployed 30+ ETL pipelines in Azure, handling
                    complex workflows like SCD Type 1 & Type 2, processing 30M+
                    rows from multiple sources, and integrating real-time CDC
                    for 100K+ rows daily.
                  </p>
                </div>
                <div>
                  <p className="my-text-black my-6">
                    <strong>
                      Data Engineer Internship at TEKsystems Global Services
                    </strong>
                    <span className="float-right">
                      [Februrary 2022 - September 2022]
                    </span>
                    <br />
                    Developed an ETL solution using Talend, Python, and
                    SharePoint; automated skill extraction from PPT files with
                    NLP, achieving 96% accuracy.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-card col-span-3">
              <h2 className="text-2xl bg-clip-text my-text-black">
                📊 Personal Projects
              </h2>

              <div className="my-card">
                <p className="text-xl">
                  Scalable ETL Pipeline & BI Dashboard for Lok Sabha Attendance
                  Analysis
                </p>
                <br />
                <p className="my-text-black">
                  Built an end-to-end ETL pipeline to analyze Lok Sabha MPs'
                  attendance data. The pipeline extracts daily attendance
                  records from the sansad.in REST API, processes and
                  consolidates 1700+ CSV files into a single Parquet file using
                  Databricks PySpark, and visualizes insights through an
                  interactive Power BI dashboard.
                </p>
                <div className="flex flex-wrap gap-2 my-4">
                  {[
                    "Azure Data Factory",
                    "Azure Databricks",
                    "PySpark",
                    "Power BI",
                    "Azure Data Lake Storage",
                    "REST API",
                  ].map((tech, key) => (
                    <span key={key} className="my-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  target="_blank"
                  href="https://github.com/sanskardev/Loksabha-Attendance-Analysis"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
