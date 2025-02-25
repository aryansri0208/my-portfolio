export default function Resume() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">My Resume</h1>
        <p>Download my resume below:</p>
        <a href="/resume.pdf" download className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-4">
          Download Resume
        </a>
      </div>
    );
  }
  