import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black-100/55 text-white flex flex-col items-center gap-4">
      <h4 className="text-[16px] font-semibold bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">Let’s connect</h4>
      <div className="flex justify-center gap-6 flex-wrap">
      <a
        href="mailto:anwarhussain.compsci@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Anwar,%20"
        title="Email"
        aria-label="Email Anwar"
      >
        <FaEnvelope size={24} />
      </a>
      <a
        href="tel:+923409899909"
        title="Call +92 340 9899909"
        aria-label="Call Anwar at +92 340 9899909"
      >
        <FaPhone size={24} />
      </a>
      <a
        href="https://github.com/Aanwar04"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <FaGithub size={24} />
      </a>
      <a 
        href="https://www.linkedin.com/in/anwar04" 
        target="_blank" 
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
      </div>
    </footer>
  );
};

export default Footer;