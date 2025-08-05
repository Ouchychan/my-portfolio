function Resume() {
  return (
    <section
      id="resume"
      className="py-16 px-8 bg-gray-300 text-black border-t border-gray-200"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6">Check out my Resume!</h2>
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
