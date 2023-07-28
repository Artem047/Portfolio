const Navbar = () => {
  return (
    <nav className="max-w-full w-full pt-7 flex items-center justify-between">
      <a href="#" className="pl-6 text-xl">
        &lt;<b className="text-[#0038FF]">AG</b> /&gt;
      </a>
      <div className="flex gap-12 text-xl">
        <a href="">
          &lt;<b className="text-[#0038FF]">Home</b> /&gt;
        </a>
        <a href="">
          &lt;<b className="text-[#0038FF]">About</b> /&gt;
        </a>
        <a href="">
          &lt;<b className="text-[#0038FF]">Project</b> /&gt;
        </a>
        <a href="">
          &lt;<b className="text-[#0038FF]">Contact</b> /&gt;
        </a>
      </div>
      <div>
        <a href="/src/files/Resume.pdf" download target="blank">
          <button className="w-[250px] h-[50px] bg-[#0038FF] rounded-[50px] text-center text-white text-2xl font-bold mr-6">
            Download CV
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
