function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Git & GitHub",
    "Vercel",
    "Figma",
    "Firebase",
  ];

  return (
    <section
      id="skills"
      className="py-16 px-8 bg-gray-100 text-black border-t border-gray-200"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <p className="text-gray-600 mb-10">
          Tech stack, tools, and frameworks I’ve worked with:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-400 rounded-md py-3 px-4 text-sm font-medium text-gray-800 hover:bg-gray-200 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
