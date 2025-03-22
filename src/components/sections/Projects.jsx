import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Project
          </h2>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">
              Lok Sabha Attendance Dashboard
            </h3>
            <p className="text-gray-400 mb-4">
              Built an end-to-end ETL pipeline to analyze Lok Sabha MPs' 
              attendance data. The pipeline extracts daily attendance records 
              from the sansad.in REST API, processes and consolidates 1700+ 
              CSV files into a single Parquet file using Databricks PySpark, 
              and visualizes insights through an interactive Power BI dashboard.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "Azure Data Factory",
                "Azure Databricks",
                "PySpark",
                "Power BI",
                "Azure Data Lake Storage",
                "REST API",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                              hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
