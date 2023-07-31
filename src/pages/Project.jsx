import { Link } from "react-router-dom";
import { dataWorks } from "../utils/dataWorks";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

const Project = () => {
  return (
    <div
      className="w-full h-full px-[100px] bglat:px-[50px] tab:px-0"
      id="project">
      <h1 className="text-[#a05f5f] text-6xl font-bold text-center">
        .portfolio
      </h1>
      <h2 className="text-white text-4xl text-center pt-5 bglat:text-3xl lat:text-2xl tab:text-xl">
        Each project is unique piece of development
      </h2>
      <div className="flex flex-col">
        {dataWorks.map((data) => {
          return data.consulting
            .map((dat, index) => {
              return (
                <div
                  className="flex pt-[100px] lat:pt-10 lat:flex-col lat:items-center"
                  key={index}>
                  <img
                    src={dat.image}
                    alt=""
                    className="bglat:w-[500px] h-full"
                  />
                  <div className="pt-10">
                    <h3 className="text-5xl text-[#a05f5f] font-bold text-center bglat:text-4xl">
                      {dat.heading}
                    </h3>
                    <p className="text-2xl text-white pt-5 bglat:text-xl tab:text-base tab:pt-0">
                      {dat.text}
                    </p>
                    <div className="flex gap-10 justify-center pt-10 bglat:pt-5">
                      {dat.stack.map((s, index) => {
                        return (
                          <p
                            key={index}
                            className="text-[#A05F5F] text-3xl font-bold bglat:text-2xl">
                            {s.stacks}
                          </p>
                        );
                      })}
                    </div>
                    <div className="flex gap-10 justify-center py-10 tab:flex-col tab:py-5 tab:gap-5 tab:items-center">
                      <Link
                        to="https://github.com/Artem047/GD_Consulting"
                        target="blank">
                        <button className="w-[150px] h-16 border-2 border-black rounded-2xl flex items-center justify-center">
                          <p className="text-xl font-bold pr-2">code</p>
                          <BsGithub size={35} />
                        </button>
                      </Link>
                      <Link
                        to="https://gd-consulting.vercel.app/"
                        target="blank2">
                        <button className="w-[220px] h-16 border-2 border-black rounded-2xl flex items-center justify-center">
                          <p className="text-xl font-bold pr-2">Live Demo</p>
                          <HiOutlineExternalLink size={35} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
            .concat(
              data.tuning.map((dat, index) => {
                return (
                  <div
                    className="flex py-[100px] lat:pt-10 lat:flex-col-reverse lat:items-center"
                    key={index}>
                    <div className="pt-10">
                      <h3 className="text-5xl text-[#a05f5f] font-bold text-center bglat:text-4xl">
                        {dat.heading}
                      </h3>
                      <p className="text-2xl text-white pt-5 bglat:text-xl tab:text-base tab:pt-0">
                        {dat.text}
                      </p>
                      <div className="flex gap-10 justify-center pt-10 bglat:pt-5">
                        {dat.stack.map((s, index) => {
                          return (
                            <p
                              key={index}
                              className="text-[#A05F5F] text-3xl font-bold bglat:text-2xl">
                              {s.stacks}
                            </p>
                          );
                        })}
                      </div>
                      <div className="flex gap-10 justify-center pt-10 tab:flex-col tab:py-5 tab:gap-5 tab:items-center">
                        <Link
                          to="https://github.com/Artem047/just-tuning"
                          target="blank">
                          <button className="w-[150px] h-16 border-2 border-black rounded-2xl flex items-center justify-center">
                            <p className="text-xl font-bold pr-2">code</p>
                            <BsGithub size={35} />
                          </button>
                        </Link>
                        <Link
                          to="https://just-tuning.vercel.app/"
                          target="blank2">
                          <button className="w-[220px] h-16 border-2 border-black rounded-2xl flex items-center justify-center">
                            <p className="text-xl font-bold pr-2">Live Demo</p>
                            <HiOutlineExternalLink size={35} />
                          </button>
                        </Link>
                      </div>
                    </div>
                    <img
                      src={dat.image}
                      alt=""
                      className="bglat:w-[500px] h-full"
                    />
                  </div>
                );
              })
            );
        })}
      </div>
    </div>
  );
};

export default Project;
