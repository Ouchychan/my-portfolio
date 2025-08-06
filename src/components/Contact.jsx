function Contact() {
  return (
    <section id="contact" className="py-16 px-8 bg-gray-300">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6">Contact</h2>
        <p className="text-gray-700 mb-4">
          Interested in my work or need my assistance? Reach out via any of the
          methods below.
        </p>

        <div className="space-y-4 text-lg">
          <p>
            <span className="font-medium text-gray-800">Email: </span>
            <a
              href="mailto:your@email.com"
              className="text-black underline hover:text-gray-700"
            >
              umi@email.com
            </a>
          </p>

          <p>
            <span className="font-medium text-gray-800">Phone: </span>
            <a
              href="tel:+60123456789"
              className="text-black underline hover:text-gray-700"
            >
              +6011-1111 1111
            </a>
          </p>

          <p>
            <span className="font-medium text-gray-800">LinkedIn: </span>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline hover:text-gray-700"
            >
              Umi
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
