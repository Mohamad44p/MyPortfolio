import Image from "next/image";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import ProjectsHero from "./ProjectsHero";
import SkillsHero from "./SkillsHero";
import AboutHero from "./AboutHero";
import ContactHero from "./ContactHero";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#282C33]">
      <div className="hero h-[100vh]">
        <div className="hero-content flex-col lg:flex-row-reverse  text-[#FFF]">
          <div className="relative">
            <Image
              src={"/Heroimage.png"}
              className="bg-[#282C33] max-w-sm rounded-lg shadow-2xl"
              alt="hero"
              width={500}
              height={500}
            />
            <div className="absolute border border-[#7d7c7c] w-full p-3 flex justify-start items-center bottom-0 lg:top-[100%] ">
              <div className="w-3 h-3 bg-[#a867ba] mr-2"></div>
              <p className="text-[#cac9c9]">
                Currently working on{" "}
                <span className="text-[#FFF]">Portfolio</span>{" "}
              </p>
            </div>
          </div>

          <div className="md:max-w-[50%] max-w-[100%]">
            <h1 className="text-3xl font-bold line-clamp-2">
              Mohamad is a <span className="text-[#C778DD]">Web Developer</span>{" "}
              and <span className="text-[#C778DD]">Full Stack Developer</span>{" "}
            </h1>
            <p className="py-6 text-[#cac9c9]">
              he crafts and builds websites and web applications where
              technologies meet creativity
            </p>
            <Link href="/contacts" className="btn btn-outline border-[#C778DD] bg-[#282C33] text-[#FFF] hover:bg-[#C778DD]">
              Contact Me !!
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div>
          <ProjectsHero />
        </div>

        <div>
          <SkillsHero />
        </div>

        <div>
          <AboutHero />
        </div>

        <div>
          <ContactHero />
        </div>
      </div>
    </section>
  );
}
