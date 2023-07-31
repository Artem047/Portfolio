import Typewriter from "typewriter-effect";
import memoji from "../assets/images/Memoji.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { dataImage } from "./../utils/dataImage";

const Home = () => {
  const handleClkContact = (e) => {
    e.preventDefault();
    const contact = document.getElementById("contact");
    contact.scrollIntoView({ behavior: "smooth" });
  };
  const handleClkProj = (e) => {
    e.preventDefault();
    const project = document.getElementById("project");
    project.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="w-full px-[200px] h-screen text-white pt-[150px] bglat:px-[100px] lat:px-12 tab:px-3 tab:pt-[100px] tab:h-full"
      id="home">
      <motion.div
        className="flex tab:flex-col-reverse tab:items-center"
        initial={{ opacity: 1, x: -2000 }}
        animate={{ x: 0 }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
        <div>
          <div className="text-5xl mt-12 bglat:text-4xl tab:text-center tab:mt-5 tab:text-3xl">
            Hi there, I am
            <b className="text-[#a05f5f]">
              <Typewriter
                options={{ loop: true }}
                onInit={(tw) => {
                  tw.pauseFor(2000)
                    .typeString("Artem Glebov")
                    .start()
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString("Frontend Developer")
                    .pauseFor(3000);
                }}
              />
            </b>
          </div>
          <p className="text-2xl pt-6 bglat:text-xl bglat:pt-4 tab:text-base">
            As a Frontend Architect, my mission is to build a robust code
            foundation for interactive and user-friendly websites that stand the
            test of time, providing a delightful user experience.
          </p>
          <p className="text-2xl text-[#a05f5f] font-bold mt-8 bglat:text-xl bglat:mt-5 tab:text-center tab:mt-0">
            Let`s work together?
          </p>
          <div className="mt-7 flex gap-4 tab:justify-center tab:mt-3">
            <Link onClick={handleClkContact}>
              <button className="w-[230px] h-[70px] border-2 rounded-[45px] border-[#a05f5f] text-2xl bglat:w-[180px] bglat:h-[50px] bglat:text-xl tab:w-[150px] tab:text-lg">
                GET IN TOUCH
              </button>
            </Link>
            <Link onClick={handleClkProj}>
              <button className="w-[230px] h-[70px] rounded-[45px] bg-[#a05f5f] text-2xl bglat:w-[180px] bglat:h-[50px] bglat:text-xl tab:w-[150px] tab:text-lg">
                VIEW MY WORK
              </button>
            </Link>
          </div>
        </div>
        <img
          src={memoji}
          alt=""
          className="bglat:w-[400px] lat:w-[300px] h-full"
        />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-5xl text-center mt-5 bglat:text-4xl tab:text-3xl">
        Teck Stack
      </motion.h3>
      <motion.div
        className="flex mt-10 justify-between tab:mt-5 tab:flex-wrap tab:gap-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}>
        {dataImage.map((data, index) => {
          return (
            <img
              src={data.image}
              alt=""
              key={index}
              className="max-w-full bglat:w-[70px] tab:w-[50px]"
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Home;
