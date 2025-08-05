function Navbar() {
  return (
    <header class="w-full py-4 px-8 flex justify-between items-center border-b border-gray-950 bg-white sticky top-0 z-50">
      <h1 class="text-2xl font-bold">MyPortfolio</h1>
      <nav class="space-x-6">
        <a href="#about" class="text-gray-600 hover:text-black">
          About
        </a>
        <a href="#projects" class="text-gray-600 hover:text-black">
          Projects
        </a>
        <a href="#contact" class="text-gray-600 hover:text-black">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
