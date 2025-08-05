function Timeline() {
  const journey = [
    {
      date: "Feb 2020",
      event:
        "Started at Sunway College (MUFY) with a 68.9% grade average – first exposure to coding.",
    },
    {
      date: "Oct 2021",
      event:
        "Began Bachelor of Science (Hons) Software Engineering at UTAR, achieving a 3.2 CGPA and gaining practical experience.",
    },
    {
      date: "Feb 2025",
      event:
        "Joined Sigma School Bootcamp for intensive full stack web development training.",
    },
  ];

  return (
    <section
      id="timeline"
      className="bg-gray-100 py-16 px-6 text-black border-t border-gray-100"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          My Learning Journey
        </h2>
        <ul className="space-y-6">
          {journey.map((item, index) => (
            <li
              key={index}
              className="flex items-start space-x-4 border-l-2 border-black pl-4"
            >
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  {item.date}
                </p>
                <p className="text-base text-black">{item.event}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center mt-10 font-bold"> and many more soon...</p>
    </section>
  );
}

export default Timeline;
