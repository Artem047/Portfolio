import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { useArrowContext } from "./ArrowContext";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const { showArrow, setShowArrow } = useArrowContext();

  const closeModal = () => {
    setShowModal(false);
    setShowArrow(true);
  };
  const handleShowModal = () => {
    setShowModal(true);
    setShowArrow(false);
  };
  const handleClkHome = (e) => {
    e.preventDefault();
    const home = document.getElementById("home");
    home.scrollIntoView({ behavior: "smooth" });
    closeModal();
  };

  const handleClkAbout = (e) => {
    e.preventDefault();
    const about = document.getElementById("about");
    about.scrollIntoView({ behavior: "smooth" });
    closeModal();
  };
  const handleClkProj = (e) => {
    e.preventDefault();
    const project = document.getElementById("project");
    project.scrollIntoView({ behavior: "smooth" });
    closeModal();
  };
  const handleClkContact = (e) => {
    e.preventDefault();
    const contact = document.getElementById("contact");
    contact.scrollIntoView({ behavior: "smooth" });
    closeModal();
  };
  return (
    <nav className="max-w-full w-full pt-7 flex items-center justify-between tab:fixed tab:bg-[#5f9ea0] tab:z-50">
      <Link to="/" className="pl-6 text-xl tab:text-3xl tab:pl-2">
        <b className="text-[#a05f5f]">AG</b>
      </Link>
      <div className="flex gap-12 text-2xl tab:hidden">
        <NavLink to="">
          <b className="text-[#a05f5f] nav_hover">Home</b>
        </NavLink>
        <NavLink to="" onClick={handleClkAbout}>
          <b className="text-[#a05f5f] nav_hover">About</b>
        </NavLink>
        <NavLink to="" onClick={handleClkProj}>
          <b className="text-[#a05f5f] nav_hover">Project</b>
        </NavLink>
        <NavLink to="" onClick={handleClkContact}>
          <b className="text-[#a05f5f] nav_hover">Contact</b>
        </NavLink>
      </div>
      <div>
        <a href="https://docs.google.com/document/d/1hCQySGY1ORO-isPXWFPGk1XVM2UareCS/edit?usp=sharing&ouid=114566911831569896258&rtpof=true&sd=true" target="blank">
          <button className="w-[250px] h-[50px] bg-[#a05f5f] rounded-[50px] text-center text-white text-2xl font-bold mr-6 tab:w-[200px] tab:text-xl tab:mr-0">
            Look CV
          </button>
        </a>
      </div>
      <div
        className={
          showModal
            ? "fixed left-0 bottom-0 w-full h-full bg-[#a05f5f] ease-in-out duration-500 z-50"
            : "fixed bottom-[-100%]"
        }>
        <div className="flex flex-col gap-12 text-4xl items-center pt-[30%]">
          <NavLink>
            <b
              className="text-[#fff] hover:text-[#5f9ea0]"
              onClick={handleClkHome}>
              Home
            </b>
          </NavLink>
          <NavLink>
            <b
              className="text-[#fff] hover:text-[#5f9ea0]"
              onClick={handleClkAbout}>
              About
            </b>
          </NavLink>
          <NavLink>
            <b
              className="text-[#fff] hover:text-[#5f9ea0]"
              onClick={handleClkProj}>
              Project
            </b>
          </NavLink>
          <NavLink>
            <b
              className="text-[#fff] hover:text-[#5f9ea0]"
              onClick={handleClkContact}>
              Contact
            </b>
          </NavLink>
        </div>
      </div>
      <div className="hidden tab:block z-50">
        {showModal ? (
          <MdClose
            size={60}
            color="white"
            className="cursor-pointer"
            onClick={closeModal}
          />
        ) : (
          <BiMenu
            size={60}
            color="white"
            className="cursor-pointer"
            onClick={handleShowModal}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
