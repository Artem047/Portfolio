import me from "../assets/images/Me.png";
import { FaBirthdayCake } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const About = () => {
  return (
    <div
      className="px-[100px] w-full h-screen lat:px-0 tab:h-full tab:my-20"
      id="about">
      <h1 className="text-[#a05f5f] text-6xl font-bold text-center">.about</h1>
      <div className="flex gap-5 pt-[100px] lat:flex-col lat:items-center lat:pt-10">
        <img src={me} alt="" className="w-full h-full bglat:w-[400px]" />
        <div className="pt-[80px] text-white bglat:pt-0">
          <h2 className="text-5xl bglat:text-4xl lat:text-center lat:text-3xl">
            Hi, I’m <b className="text-[#A05F5F]">Artem</b>
          </h2>
          <br />
          <p className="text-xl lat:text-base">
            Welcome! I’m a Junior Front-end Developer with expertise in HTML,
            CSS, JavaScript, React, Vite, Figma, Tailwind, and SCSS. I am fueled
            by a passion for crafting exceptional digital experiences. With
            meticulous attention to detail and a commitment to precision, I
            strive to deliver outstanding results.
          </p>
          <br />
          <p className="text-xl lat:text-base">
            I am skilled in creating seamless user interfaces with HTML, CSS,
            and JavaScript, as well as utilizing frameworks like React and Vite
            for diverse projects. With a strong focus on design and tools like
            Figma, I create visually stunning and intuitive interfaces.
          </p>
          <br />
          <p className="text-xl lat:text-base">
            By optimizing performance and responsiveness through CSS with
            Tailwind and SCSS, I build engaging, user-centric websites. Let's
            embark on this exciting journey of innovation together!
          </p>
          <div className="pt-[100px] flex gap-10 justify-center bglat:pt-12">
            <button className="flex items-center">
              <FaBirthdayCake size={35} color="black" />
              <p className="text-2xl bglat:text-xl">January 30, 2004</p>
            </button>
            <button className="flex items-center">
              <IoLocationSharp size={35} color="black" />
              <p className="text-2xl bglat:text-xl">Moscow, Russia</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
