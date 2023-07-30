import me from "../assets/images/Me.png";
import { FaBirthdayCake } from "react-icons/fa";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="px-[100px] w-full h-screen" id="about">
      <h1 className="text-[#a05f5f] text-6xl font-bold text-center">.about</h1>
      <div className="flex gap-5 pt-[100px]">
        <img src={me} alt="" className="w-full h-full" />
        <div className="pt-[80px] text-white">
          <h2 className="text-5xl">
            Hi, I’m <b className="text-[#A05F5F]">Artem</b>
          </h2>
          <br />
          <p className="text-xl">
            Welcome! I’m a Junior Front-end Developer with expertise in HTML,
            CSS, JavaScript, React, Vite, Figma, Tailwind, and SCSS. I am fueled
            by a passion for crafting exceptional digital experiences. With
            meticulous attention to detail and a commitment to precision, I
            strive to deliver outstanding results.
          </p>
          <br />
          <p className="text-xl">
            I am skilled in creating seamless user interfaces with HTML, CSS,
            and JavaScript, as well as utilizing frameworks like React and Vite
            for diverse projects. With a strong focus on design and tools like
            Figma, I create visually stunning and intuitive interfaces.
          </p>
          <br />
          <p className="text-xl">
            By optimizing performance and responsiveness through CSS with
            Tailwind and SCSS, I build engaging, user-centric websites. Let's
            embark on this exciting journey of innovation together!
          </p>
          <div className="pt-[100px] flex gap-10">
            <button className="flex items-center">
              <FaBirthdayCake size={35} color="black" />
              <p className="text-2xl">January 30, 2004</p>
            </button>
            <button className="flex items-center">
              <IoLocationSharp size={35} color="black" />
              <p className="text-2xl">Moscow, Russia</p>
            </button>
            <button className="flex items-center">
              <IoMail size={35} color="black" />
              <Link
                to="email:glebov.as047@gmail.com"
                target="blank"
                className="text-2xl underline">
                glebov.as047@gmail.com
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
