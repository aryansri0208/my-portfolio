import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const projects = [
    { title: "Project 1", description: "My first project.", link: "https://github.com/yourusername/project1" },
    { title: "Project 2", description: "Another cool project.", link: "https://github.com/yourusername/project2" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-4xl font-bold text-center mt-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 px-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
