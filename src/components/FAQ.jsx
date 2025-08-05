function FAQ() {
  const faqs = [
    {
      question: "Why did you choose web development?",
      answer:
        "Webs are more in-demand, convenient for most end-users and fun to build with simple development.",
    },
    {
      question: "What are you currently learning?",
      answer:
        "I'm focused on fullstack development with React, Express, and PostgreSQL. Willing to pursue further such as UI/UX design and more languages.",
    },
    {
      question: "What type of roles are you looking for?",
      answer:
        "Remotely frontend or fullstack web developer roles in collaborative, growth-driven teams or work independently.",
    },
    {
      question: "Do you prefer working solo or in teams?",
      answer:
        "Preferably solo due to familiarize, but I would love to learn the value of teamwork.",
    },
  ];

  return (
    <section id="faq" className="py-10 px-6 bg-gray-100 text-black">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md shadow-sm border border-gray-200"
            >
              <p className="text-base font-medium">
                <span className="font-bold">Q:</span> {faq.question}
              </p>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold">A:</span> {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
