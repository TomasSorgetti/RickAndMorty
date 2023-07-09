import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { BiLogoReact } from "react-icons/bi";

const Footer = () => {
  return (
    <section className="flex w-full items-center justify-center h-32 gap-20">
      <a
        className="flex flex-col justify-center items-center gap-4"
        href="https://www.linkedin.com/in/tomas-sorgetti/"
        target="blank"
      >
        <BiLogoLinkedin size={"2rem"} />
        Linkedin
      </a>
      <a
        className="flex flex-col justify-center items-center gap-4"
        href="https://github.com/TomasSorgetti"
        target="blank"
      >
        <BsGithub size={"2rem"} />
        GitHub
      </a>
      <a
        className="flex flex-col justify-center items-center gap-4"
        href="https://portfolio-six-mu-29.vercel.app/"
        target="blank"
      >
        <BiLogoReact size={"2rem"} />
        Portfolio
      </a>
    </section>
  );
};

export default Footer;
