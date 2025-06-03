import React from "react";
import { Timeline } from "./ui/timeline";

export function Education() {
  const data = [
    {
      title: "2022 – 2026",
      content: (
        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-violet-900/20 border border-indigo-200/50 dark:border-indigo-800/50 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-indigo-300 dark:hover:border-indigo-700">
          <h1 className="mb-4 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
            Sardar Vallabhbhai National Institute of Technology, Surat
          </h1>
          <h2 className="text-xl font-medium text-neutral-700 dark:text-neutral-200 mb-4">
            B.Tech in Computer Science and Engineering
          </h2>
          <div className="mb-4">
            <p className="mb-2 text-m font-bold text-indigo-600 dark:text-indigo-400">
              Core Subjects:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Operating Systems",
                "Cloud Computing",
                "OOP",
                "DBMS",
                "Data Structures",
                "Computer Networks",
              ].map((subject) => (
                <span
                  key={subject}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-900 dark:from-indigo-800/40 dark:to-purple-800/40 dark:text-indigo-100 border border-indigo-200/50 dark:border-indigo-700/50 transition-all duration-300 hover:scale-105"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-m font-bold text-indigo-600 dark:text-indigo-400">
              Skills and Tools:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Reactjs",
                "Nodejs",
                "MongoDB",
                "Python",
                "C++",
                "SQL",
                "Nextjs",
                "TensorFlow",
                "Numpy",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-900 dark:from-indigo-800/40 dark:to-purple-800/40 dark:text-indigo-100 border border-indigo-200/50 dark:border-indigo-700/50 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020 – 2022",
      content: (
        <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-violet-900/20 border border-indigo-200/50 dark:border-indigo-800/50 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-indigo-300 dark:hover:border-indigo-700">
          <h1 className="mb-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
            Delhi Public School, Varanasi
          </h1>
          <p className="text-base font-medium text-neutral-700 dark:text-neutral-200">
            CBSE 12th Board
          </p>
          <p className="mt-1 text-base font-semibold text-indigo-600 dark:text-indigo-400">
            Percentage: 94.2%
          </p>
        </div>
      ),
    },
    {
      title: "2018 – 2020",
      content: (
        <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-violet-900/20 border border-indigo-200/50 dark:border-indigo-800/50 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-indigo-300 dark:hover:border-indigo-700">
          <h1 className="mb-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
            Central Hindu Boys School, Banaras Hindu University
          </h1>
          <p className="text-base font-medium text-neutral-700 dark:text-neutral-200">
            CBSE 10th Board
          </p>
          <p className="mt-1 text-base font-semibold text-indigo-600 dark:text-indigo-400">
            Percentage: 90.2%
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-hidden py-12">
      <div  />
      <Timeline data={data} />
    </div>
  );
}
