export default function ProjectCard({ title, description, link }) {
    return (
      <div className="p-4 border rounded-lg shadow-md dark:border-gray-700">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        <a href={link} target="_blank" className="text-blue-500 hover:underline">
          View Project
        </a>
      </div>
    );
  }

  