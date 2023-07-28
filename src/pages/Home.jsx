import Typewriter from "typewriter-effect";
import memoji from "../assets/images/Memoji.png";
import dataImage from "../utils/data/image.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full px-[200px] text-white pt-[150px]">
      <div className="flex">
        <div>
          <div className="text-5xl mt-12">
            Hi there, I am
            <b className="text-[#a05f5f]">
              <Typewriter
                options={{ loop: true }}
                onInit={(tw) => {
                  tw.typeString("Artem Glebov👋")
                    .start()
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString("Frontend Developer💻")
                    .pauseFor(3000);
                }}
              />
            </b>
          </div>
          <p className="text-2xl pt-6">
            As a Frontend Architect, my mission is to build a robust code
            foundation for interactive and user-friendly websites that stand the
            test of time, providing a delightful user experience.
          </p>
          <p className="text-2xl text-[#a05f5f] font-bold mt-8">
            Let's work together?
          </p>
          <div className="mt-7 flex gap-4">
            <Link>
              <button className="w-[230px] h-[70px] border-2 rounded-[45px] border-[#a05f5f] text-2xl">
                GET IN TOUCH
              </button>
            </Link>
            <Link>
              <button className="w-[230px] h-[70px] rounded-[45px] bg-[#a05f5f] text-2xl">
                VIEW MY WORK
              </button>
            </Link>
          </div>
        </div>
        <img src={memoji} alt="" />
      </div>
      <h3 className="text-5xl text-center">Teck Stack</h3>
      <div className="flex mt-10 justify-between">
        {dataImage.map((data, index) => {
          return (
            <img src={data.image} alt="" key={index} className="max-w-full" />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
