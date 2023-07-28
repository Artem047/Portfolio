import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-full w-full pt-7 flex items-center justify-between">
      <Link to="/" className="pl-6 text-xl">
        <b className="text-[#a05f5f]">AG</b>
      </Link>
      <div className="flex gap-12 text-xl">
        <NavLink to="">
          <b className="text-[#a05f5f]">Home</b>
        </NavLink>
        <NavLink to="">
          <b className="text-[#a05f5f]">About</b>
        </NavLink>
        <NavLink to="">
          <b className="text-[#a05f5f]">Project</b>
        </NavLink>
        <NavLink to="">
          <b className="text-[#a05f5f]">Contact</b>
        </NavLink>
      </div>
      <div>
        <a href="/src/files/Resume.pdf" download target="blank">
          <button className="w-[250px] h-[50px] bg-[#a05f5f] rounded-[50px] text-center text-white text-2xl font-bold mr-6">
            Download CV
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
