import { MdOutlineEmail } from "react-icons/md";
import { FaYahoo } from "react-icons/fa6";

export default function ContactHero() {
  return (
    <div className="w-full max-w-7xl  mx-auto bg-[#282C33] divide-y divide-gray-700 my-28">
      <h1 className="flex justify-start my-7 items-center gap-4 text-2xl font-bold leading-9 tracking-tight text-[#FFF]">
        <div className="flex justify-start items-center">
          <span className="text-[#C778DD]">#</span> Contacts{" "}
        </div>
        <div className="border border-[#9157a1] md:w-[20rem] w-[4rem]"></div>
      </h1>

      <div className="grid justify-center items-center  gap-4 sm:grid-cols-2 md:gap-6  lg:grid-cols-2 lg:gap-14 pt-8">
        <p className="p-2 text-[#cac9c9] text-sm">
          i am interested in freelance opportunities.
          <br />
          However, if you have other requests or questions dont hesitate to
          contact me.
        </p>

        <div className="flex flex-col justify-center items-center border border-[#7d7c7c] w-full md:w-[400px] lg:h-[150px]  ">
          <h1 className="p-2 text-center text-[#FFF] font-bold">
            Message me here
          </h1>
          <div className="flex flex-col justify-center items-center ">
            <p className="p-2 flex justify-center items-center gap-3 text-[#cac9c9]">
              <MdOutlineEmail /> mohamadamy44@gmail.com
            </p>
            <p className="p-2 flex justify-center items-center gap-3 text-[#cac9c9]">
              Or
            </p>
            <p className="flex justify-center items-center gap-3 text-[#cac9c9]">
              <FaYahoo />
              mohamad44p@yahoo.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
