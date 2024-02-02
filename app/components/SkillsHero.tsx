import Image from "next/image";
import Link from "next/link";
import { TiArrowRightThick } from "react-icons/ti";

export default function SkillsHero() {
  return (
    <div className="w-full max-w-7xl  mx-auto bg-[#282C33] divide-y divide-gray-700 mb-20">
      <div className="flex justify-between items-center mx-auto max-w-7xl space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="flex justify-center items-center gap-4 text-2xl font-bold leading-9 tracking-tight text-[#FFF]">
          <div className="flex justify-start items-center">
            <span className="text-[#C778DD]">#</span> Skills{" "}
          </div>
          <div className="border border-[#9157a1] md:w-[20rem] w-[4rem]"></div>
        </h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 pt-8">
      <div className="lg:col-span-2">
          <Image src="/Skillsimage.png" alt="skills" width={500} height={500} />
        </div>        <div className="grid gap-8 lg:grid-cols-1 lg:gap-10">
          <div className="flex flex-col border border-[#7d7c7c]  w-[300px] h-[100px] ">
            <div className="border border-[#7d7c7c] flex justify-start">
              <h1 className="p-2 text-center text-[#FFF] font-bold">
                Languages
              </h1>
            </div>
            <p className="p-2 text-[#cac9c9] text-sm">
              typescript javascript c++ python
            </p>
          </div>
          <div className="flex flex-col border border-[#7d7c7c]  w-[300px] h-[100px] ">
            <div className="border border-[#7d7c7c] flex justify-start">
              <h1 className="p-2 text-center text-[#FFF] font-bold">
                Databases
              </h1>
            </div>
            <p className="p-2 text-[#cac9c9] text-sm">
              MySQL mongoDB PostgreSQL
            </p>
          </div>
          <div className="flex flex-col border border-[#7d7c7c]  w-[300px] h-[100px] ">
            <div className="border border-[#7d7c7c] flex justify-start">
              <h1 className="p-2 text-center text-[#FFF] font-bold">
                Tools
              </h1>
            </div>
            <p className="p-2 text-[#cac9c9] text-sm">
              Vscode git github jira Linux firebase supbase  vercel dasyui
            </p>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-1 lg:gap-10">
          <div className="flex flex-col border border-[#7d7c7c]  w-[300px] h-[100px] ">
            <div className="border border-[#7d7c7c] flex justify-start">
              <h1 className="p-2 text-center text-[#FFF] font-bold">
                Frameworks
              </h1>
            </div>
            <p className="p-2 text-[#cac9c9] text-sm">
              React Next.js Flask Node.js express
            </p>
          </div>
          <div className="flex flex-col border border-[#7d7c7c]  w-[300px] h-[100px] ">
            <div className="border border-[#7d7c7c] flex justify-start">
              <h1 className="p-2 text-center text-[#FFF] font-bold">
                Other
              </h1>
            </div>
            <p className="p-2 text-[#cac9c9] text-sm">
              Html CSS Tailwind Scss Rest EJS JQuery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
