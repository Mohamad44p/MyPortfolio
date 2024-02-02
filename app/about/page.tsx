import Image from "next/image";

export default function page() {
  return (
    <div className="w-full max-w-7xl  mx-auto bg-[#282C33]">
      <h1 className="flex justify-start  items-center  text-2xl font-bold text-[#FFF]">
        <span className="text-[#C778DD]">/</span>about-me
      </h1>
      <p className="text-[#cac9c9]">Who am i?</p>

      <div className=" grid gap-4 sm:grid-cols-2 md:gap-6  lg:grid-cols-2 lg:gap-36 pt-8">
        <div>
          <h1>Hello, I am Mohamad!</h1>
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
        </div>
        <div>
          <Image
            src="/Aboutimage.png"
            alt="Great image"
            width={300}
            height={300}
          />
        </div>
      </div>

      <h1 className="flex justify-start items-center gap-4 text-2xl font-bold mt-40 mb-0 text-[#FFF]">
        <div className="flex justify-start items-center">
          <span className="text-[#C778DD]">#</span> Skills{" "}
        </div>
      </h1>

      <div className="w-full grid gap-4 sm:grid-cols-2 md:gap-6  lg:grid-cols-5 lg:gap-32 pt-8">
        <div className="flex flex-col border border-[#7d7c7c]  w-full  md:w-[250px] md:h-[100px]  ">
          <div className="border border-[#7d7c7c] flex justify-start">
            <h1 className="p-2 text-center text-[#FFF] font-bold">Languages</h1>
          </div>
          <p className="p-2 text-[#cac9c9] text-sm">
            typescript javascript c++ python
          </p>
        </div>
        <div className="flex flex-col border border-[#7d7c7c]  w-full  md:w-[250px] md:h-[100px]  ">
          <div className="border border-[#7d7c7c] flex justify-start">
            <h1 className="p-2 text-center text-[#FFF] font-bold">Databases</h1>
          </div>
          <p className="p-2 text-[#cac9c9] text-sm">MySQL mongoDB PostgreSQL</p>
        </div>
        <div className="flex flex-col border border-[#7d7c7c]  w-full  md:w-[250px] md:h-[100px] ">
          <div className="border border-[#7d7c7c] flex justify-start">
            <h1 className="p-2 text-center text-[#FFF] font-bold">Tools</h1>
          </div>
          <p className="p-2 text-[#cac9c9] text-sm">
            Vscode git github jira Linux firebase supbase vercel dasyui
          </p>
        </div>
        <div className="flex flex-col border border-[#7d7c7c] w-full  md:w-[250px] md:h-[100px] ">
          <div className="border border-[#7d7c7c] flex justify-start">
            <h1 className="p-2 text-center text-[#FFF] font-bold">
              Frameworks
            </h1>
          </div>
          <p className="p-2 text-[#cac9c9] text-sm">
            React Next.js Flask Node.js express
          </p>
        </div>
        <div className="flex flex-col border border-[#7d7c7c] w-full  md:w-[250px] md:h-[100px] ">
          <div className="border border-[#7d7c7c] flex justify-start">
            <h1 className="p-2 text-center text-[#FFF] font-bold">Other</h1>
          </div>
          <p className="p-2 text-[#cac9c9] text-sm">
            Html CSS Tailwind Scss Rest EJS JQuery
          </p>
        </div>
      </div>

      <h1 className="flex justify-start items-center gap-4 text-2xl font-bold mt-60 mb-0 text-[#FFF]">
        <div className="flex justify-start items-center">
          <span className="text-[#C778DD]">#</span> My-fun-facts{" "}
        </div>
      </h1>
      <div className="flex flex-wrap gap-4 pt-8 mb-32">
        <div className="flex flex-col border border-[#7d7c7c] w-full md:w-[480px]">
          <p className="p-2 text-[#cac9c9] text-sm">
            I like to play Warzone and Grand Theft Auto V most of the time.
          </p>
        </div>
        <div className="flex flex-col border border-[#7d7c7c] w-full md:w-[580px]">
          <p className="p-2 text-[#cac9c9] text-sm">
            I often play with my friends.
          </p>
        </div>
     
        <div className="flex flex-col border border-[#7d7c7c] w-full md:w-[480px]">
          <p className="p-2 text-[#cac9c9] text-sm">
            I like Shawarma and Pizza.
          </p>
        </div>
        <div className="flex flex-col border border-[#7d7c7c] w-full md:w-[580px]">
          <p className="p-2 text-[#cac9c9] text-sm">
            I love programming and learning new things.
          </p>
        </div>
        <div className="flex flex-col border border-[#7d7c7c] w-full md:w-[480px]">
          <p className="p-2 text-[#cac9c9] text-sm">
            My favorite movie is El Haram El Rabea.
          </p>
        </div>
        <div className="flex flex-col border border-[#7d7c7c] w-full md:w-[580px]">
          <p className="p-2 text-[#cac9c9] text-sm">
            I am still studying computer science in college..
          </p>
        </div>
          <Image
            src="/alharem4.jpg"
            alt="Great image"
            className="relative bottom-0  left-0 lg:left-[21rem]"
            width={300}
            height={300}
          />
      </div>
    </div>
  );
}
