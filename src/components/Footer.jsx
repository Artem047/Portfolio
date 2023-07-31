import { Link } from "react-router-dom";
import { HiArrowUp } from "react-icons/hi";
import { useArrowContext } from "./ArrowContext";

const Footer = () => {
  const { showArrow } = useArrowContext();

  const handleClk = () => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  };
  return (
    <div className="w-full h-[150px] mt-[200px] bg-[#FFFFFF70]">
      {showArrow && (
        <div className="relative">
          <HiArrowUp
            onClick={handleClk}
            size={50}
            className="bottom-0 right-40 cursor-pointer absolute"
          />
        </div>
      )}
      <div className="flex gap-10 justify-center pt-8">
        <button className="w-[50px] h-[50px] bg-white rounded-xl text-2xl text-[#00A3FF] font-bold hover:bg-[#00A3FF] hover:text-white">
          <Link
            to="https://podolsk.hh.ru/resume/0280e604ff0b8fdd0a0039ed1f303764526569"
            target="blank">
            HH
          </Link>
        </button>
        <button className="w-[50px] h-[50px] bg-white rounded-xl text-2xl text-[#00A3FF] font-bold hover:bg-[#00A3FF] hover:text-white">
          <Link to="https://github.com/Artem047" target="blank">
            GH
          </Link>
        </button>
        <button className="w-[50px] h-[50px] bg-white rounded-xl text-2xl text-[#00A3FF] font-bold hover:bg-[#00A3FF] hover:text-white">
          <Link to="https://t.me/agleboov" target="blank">
            TG
          </Link>
        </button>
      </div>
      <p className="text-center text-2xl pt-5">
        ©️2023 Artem Glebov. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
