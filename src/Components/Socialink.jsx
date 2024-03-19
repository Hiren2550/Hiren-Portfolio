import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";

const Socialink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin
          <FaLinkedin size={30} className="text-blue-800 bg-white " />
        </>
      ),
      href: "https://linkedin.com/in/hirenshah2540",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub size={30} className="text-black" />
        </>
      ),
      href: "https://github.com/Hiren2550",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} className="text-red-600" />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} className="text-gray-800" />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[32%] left-0 fixed ">
      <ul>
        {links.map(({ id, href, child, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px]   hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex items-center justify-between w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socialink;
