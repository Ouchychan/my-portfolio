function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-50"
    >
      <div className="bg-white px-8 py-12 my-30 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-4xl text-center sm:text-5xl font-bold text-gray-900 mb-4">
          Hi, I'm Umi
        </h2>
        <p className="text-gray-600 text-lg max-w-xl">
          A fresh graduate software engineer passionate about UI/UX and modern
          web design. I enjoy building sleek, user-friendly websites and apps
          for people who need digital solutions.
        </p>
      </div>
    </section>
  );
}

export default Home;
