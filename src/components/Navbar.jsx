import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full py-4 px-8 flex justify-between items-center border-b border-gray-950 bg-white sticky top-0 z-50">
        <a href="#home" className="text-2xl font-bold hover:text-black">
          MyPortfolio
        </a>

        {/* Desktop nav */}
        <nav className="space-x-6 hidden md:flex">
          <a
            href="#about"
            className="text-gray-600 hover:text-black"
            title="About"
          >
            <i className="fa fa-user-circle"></i>
          </a>
          <a
            href="#timeline"
            className="text-gray-600 hover:text-black"
            title="Timeline"
          >
            <i className="fa fa-clock-o"></i>
          </a>
          <a
            href="#projects"
            className="text-gray-600 hover:text-black"
            title="Projects"
          >
            <i className="fa fa-folder"></i>
          </a>
          <a
            href="#skills"
            className="text-gray-600 hover:text-black"
            title="Skills"
          >
            <i className="fa fa-wrench"></i>
          </a>
          <a
            href="#resume"
            className="text-gray-600 hover:text-black"
            title="Resume"
          >
            <i className="fa fa-file"></i>
          </a>
          <a href="#faq" className="text-gray-600 hover:text-black" title="FAQ">
            <i className="fa fa-question-circle"></i>
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-black"
            title="Contact"
          >
            <i className="fa fa-envelope"></i>
          </a>
        </nav>

        {/* Hamburger for mobile */}
        <button
          onClick={toggleDrawer}
          className="md:hidden text-2xl text-gray-700"
        >
          <i className="fa fa-bars"></i>
        </button>
      </header>

      {/* Drawer Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-20" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={toggleDrawer} className="text-2xl text-gray-700">
            <i className="fa fa-times"></i>
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4">
          <a
            href="#about"
            onClick={toggleDrawer}
            className="flex items-center space-x-2 text-gray-700 hover:text-black"
          >
            <i className="fa fa-user-circle"></i>
            <span>About</span>
          </a>
          <a
            href="#timeline"
            onClick={toggleDrawer}
            className="flex items-center space-x-2 text-gray-700 hover:text-black"
          >
            <i className="fa fa-clock-o"></i>
            <span>Timeline</span>
          </a>
          <a
            href="#projects"
            onClick={toggleDrawer}
            className="flex items-center space-x-2 text-gray-700 hover:text-black"
          >
            <i className="fa fa-folder"></i>
            <span>Projects</span>
          </a>
          <a
            href="#skills"
            onClick={toggleDrawer}
            className="flex items-center space-x-2 text-gray-700 hover:text-black"
          >
            <i className="fa fa-wrench"></i>
            <span>Skills</span>
          </a>
          <a
            href="#resume"
            onClick={toggleDrawer}
            className="flex items-center space-x-2 text-gray-700 hover:text-black"
          >
            <i className="fa fa-file"></i>
            <span>Resume</span>
          </a>
          <a
            href="#faq"
            onClick={toggleDrawer}
            className="flex items-center space-x-2 text-gray-700 hover:text-black"
          >
            <i className="fa fa-question-circle"></i>
            <span>FAQ</span>
          </a>
          <a
            href="#contact"
            onClick={toggleDrawer}
            className="flex items-center space-x-2 text-gray-700 hover:text-black"
          >
            <i className="fa fa-envelope"></i>
            <span>Contact</span>
          </a>
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
}

export default Navbar;
