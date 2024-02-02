import Image from "next/image"
import Link from "next/link";
import { FaFacebookF , FaGithub , FaLinkedin , FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer p-10 border-t border-[#7d7c7c] bg-[#282C33] text-[#FFF]">
    <aside>
      <Image src="/Logo.svg" width={40} height={40} alt="logo"/>
      <p className="font-bold">
        Mohamad Abu Omar <br/>mohamadamy44@gmail.com
      </p> 
      <p>Copyright © 2024 - Made with ❤️ by Mohamad</p>
    </aside> 
    <nav>
      <div className="grid grid-flow-col gap-4">
        <Link href='https://www.facebook.com/mohamad4xp?mibextid=nwBsNb' target="_blank"><FaFacebookF className="w-6 h-6"/></Link>
        <Link href='https://github.com/Mohamad44p' target="_blank"><FaGithub className="w-6 h-6"/></Link>
        <Link href='https://www.linkedin.com/in/mohamad-abuomar-0878772a1/' target="_blank"><FaLinkedin className="w-6 h-6"/></Link>
        <Link href='https://www.instagram.com/mohamad.69s?igsh=MWg0YjdsaGl5a2NpYQ==' target="_blank"><FaInstagram className="w-6 h-6"/></Link>
      </div>
    </nav>
  </footer>
  )
}
