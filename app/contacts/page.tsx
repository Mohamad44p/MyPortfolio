import Link from "next/link";
import { FaYahoo } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedin, FaInstagram , FaDiscord , } from "react-icons/fa";
import { Links } from "./links";
import React from "react";

const linksData: Links[] = [
  {
    id: 1,
    name: "Facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/mohamad4xp?mibextid=nwBsNb",
  },
  {
    id: 2,
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/Mohamad44p",
  },
  {
    id: 3,
    name: "Linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/mohamad-abuomar-0878772a1/",
  },
  {
    id: 4,
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/mohamad.69s?igsh=MWg0YjdsaGl5a2NpYQ==",
  },
  {
    id: 5,
    name: "Discord",
    icon: FaDiscord,
    link: "https://discord.com/users/1076945924854665238",
  },
  {
    id: 6,
    name: "Email",
    icon: MdOutlineEmail,
    link: "mailto:mohamadamy44@gmail.com",
  }
];
export default function contactsPage() {
  return (
    <div className="w-full max-w-7xl h-[185vh] mx-auto bg-[#282C33]">
      <h1 className="flex justify-start  items-center mt-32  text-2xl font-bold text-[#FFF]">
        <span className="text-[#C778DD]">/</span>contacts
      </h1>
      <p className="text-[#cac9c9]">What do you want?</p>

      <div className="grid gap-4 sm:grid-cols-2 md:gap-6   lg:grid-cols-2 lg:gap-36 pt-8">
        <div className="flex flex-col text-[#cac9c9] my-5">
          <p>I am intrested in freelance opportunities. However,</p>
          <p>if you have other request or question, please dont </p>
          <p>hesitate to contact me.</p>
        </div>
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

      <h1 className="flex justify-start  items-center mt-32  text-2xl font-bold text-[#FFF]">
        <span className="text-[#C778DD]">#</span>all-media
      </h1>
      <div className="w-full h-[100vh] grid gap-8 md:grid-cols-2  lg:grid-cols-3 lg:gap-10 pt-8">
      {linksData.map((link) => (
          <div key={link.id} className="flex flex-col">
            {link.link.startsWith("mailto:") ? (
               <a className="flex flex-col justify-center items-center gap-3 z-[100] card">
               <h1 className="p-2 text-center text-[#FFF] font-bold">{link.name}</h1>
               {React.createElement(link.icon, { className: "w-6 h-6 text-white" })}
             </a>
            ) : (
              <Link href={link.link} target="_blank" className="flex flex-col justify-center items-center gap-3 z-[100] card">
                <h1 className="p-2 text-center text-[#FFF] font-bold">{link.name}</h1>
                {React.createElement(link.icon, { className: "w-6 h-6 text-white" })}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
