import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full h-full px-[150px]" id="contact">
      <h1 className="text-[#a05f5f] text-6xl font-bold text-center">
        .contact
      </h1>
      <div className="flex gap-10 pt-14">
        <div>
          <h2 className="text-5xl text-white font-bold">Get in Touch</h2> <br />
          <p className="text-2xl text-white">
            Welcome to the contact page! If you have any questions or
            interesting projects related to Frontend development, I will be
            happy to listen to you.
          </p>
          <br />
          <p className="text-2xl text-white">
            Please fill out the contact form below and I will reply to you as
            soon as possible.
          </p>
          <button className="flex items-center pt-10">
            <IoMail size={35} />
            <Link
              to="email:glebov.as047@gmail.com"
              target="blank"
              className="text-white text-xl underline pl-2">
              glebov.as047@gmail.com
            </Link>
          </button>
          <div className="pt-10 flex gap-10">
            <button className="w-[50px] text-white h-[50px] bg-[#00A3FF] hover:bg-white hover:text-[#00A3FF]">
              <Link
                to="https://podolsk.hh.ru/resume/0280e604ff0b8fdd0a0039ed1f303764526569"
                target="blank"
                className="font-bold text-2xl ">
                HH
              </Link>
            </button>
            <Link
              className="hover:bg-white rounded-full"
              to="https://github.com/Artem047"
              target="blank">
              <AiOutlineGithub size={55} />
            </Link>
            <Link
              to="https://t.me/agleboov"
              target="blank"
              className="hover:bg-white rounded-full">
              <FaTelegram size={55} color="#00A3FF" />
            </Link>
          </div>
        </div>
        <div className="w-full h-[500px] bg-white rounded-3xl shadow-inner">
          <h1 className="p-[35px] text-4xl font-bold text-[#00A3FF]">
            Send me a message
          </h1>
          <form className="px-[35px] flex flex-col">
            <label className="text-[#00A3FF]">Your name*</label>
            <input
              type="name"
              placeholder="Enter your name"
              className="outline-none pt-3 border-b-2 border-black w-full"
            />
            <label className="text-[#00A3FF] pt-5">Your email*</label>
            <input
              type="name"
              placeholder="Enter your email"
              className="outline-none pt-3 border-b-2 border-black w-full"
            />
            <label className="text-[#00A3FF] pt-5">Your message*</label>
            <textarea
              type="name"
              placeholder="Enter your message"
              className="outline-none pt-3 border-b-2 border-black max-h-28 w-full"
            />
            <button
              type="submit"
              className="w-[175px] h-[50px] rounded-3xl bg-[#00A3FF] text-white text-xl flex items-center justify-center gap-5 mt-10">
              <p>SUBMIT</p>
              <FaAngleRight size={30} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
