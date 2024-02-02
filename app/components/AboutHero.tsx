import Image from "next/image";
import Link from "next/link";
import { TiArrowRightThick } from "react-icons/ti";

export default function AboutHero() {
  return (
    <div className="w-full max-w-7xl  mx-auto bg-[#282C33] divide-y divide-gray-700 mb-20">
      <div className="flex justify-between items-center mx-auto max-w-7xl space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="flex justify-center items-center gap-4 text-2xl font-bold leading-9 tracking-tight text-[#FFF]">
          <div className="flex justify-start items-center">
            <span className="text-[#C778DD]">#</span> about-me{" "}
          </div>
          <div className="border border-[#9157a1] md:w-[20rem] w-[4rem]"></div>
        </h1>
      </div>
      <div className="grid  gap-4 sm:grid-cols-2 md:gap-6  lg:grid-cols-2 lg:gap-14 pt-8">
        <div className="flex flex-col border border-[#7d7c7c] w-full  lg:h-[600px]  ">
          <div className="border border-[#7d7c7c] flex justify-start">
            <h1 className="p-2 text-center text-[#FFF] font-bold">
              Hello, i am Mohamad!
            </h1>
          </div>
          <p className="p-2 text-[#cac9c9] text-sm">
            I am a passionate Web Developer and Full Stack Developer based in
            Palestine. My journey in the world of technology began at Palestine
            Polytechnic University, where I am currently pursuing a degree in
            Computer Science. With a solid foundation in both front-end and
            back-end development, I specialize in crafting responsive websites
            from scratch and transforming them into modern, user-friendly web
            experiences. My dedication to creating robust and scalable solutions
            is fueled by a genuine love for coding and problem-solving.
          </p>
          <p className="p-2 text-[#cac9c9] text-sm">
            As a Full Stack Developer, I thrive on the challenges of building
            end-to-end solutions. My expertise includes leveraging JavaScript,
            React, and Node.js to bring ideas to life. The ever-evolving nature
            of web development inspires me to stay updated with the latest
            industry trends, ensuring that the solutions I deliver are at the
            forefront of technology. I approach each project with creativity and
            attention to detail, striving to exceed expectations and create
            digital experiences that leave a lasting impact.
          </p>
          <p className="p-2 text-[#cac9c9] text-sm">
            Beyond my technical skills, I am committed to continuous learning
            and growth. I believe in the power of collaboration and am always
            eager to contribute to innovative projects. If you are seeking a
            dedicated and versatile Full Stack Developer who can turn your
            vision into reality, I would love to discuss how we can work
            together to achieve your goals.
          </p>
          <div className="flex justify-center items-center">
            <Link href="/about" className="btn btn-outline w-[130px] my-6 rounded-md border-[#C778DD] bg-[#282C33] text-[#FFF] hover:bg-[#C778DD]">
              Lern more <TiArrowRightThick />
            </Link>
          </div>
        </div>
        <Image src="/Aboutimage.png" alt="skills" width={500} height={500} />
      </div>
    </div>
  );
}
