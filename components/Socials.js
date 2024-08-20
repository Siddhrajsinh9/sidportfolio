// links
import Link from "next/link";
import { HiArrowDownCircle, HiDevicePhoneMobile, HiHandThumbUp, HiLink, HiOutlineLink, HiOutlineRocketLaunch } from "react-icons/hi2";

// icons
import {
  RiBehanceLine, 
  RiExternalLinkFill, 
  RiLink, 
  RiLinkedinFill,
  RiLinkM,
  RiLinksFill,
  RiMailFill,
  RiWhatsappLine,
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <a href="https://www.linkedin.com/in/siddhrajsinh-rathod-356991286" className="hover:text-accent transition-all duration-300" target="_blank" rel="noopener noreferrer">
            <RiLinkedinFill />
      </a>

      <a href="mailto:siddhrajsinhh7@gmail.com" className="hover:text-accent transition-all duration-300" target="_blank" rel="noopener noreferrer">
          <RiMailFill />
      </a>

      <a href="https://wa.me/9510576734?text=Hello%20there!" className="hover:text-accent transition-all duration-300" target="_blank" rel="noopener noreferrer">
          <RiWhatsappLine />
      </a>
      <Link 
        href={'/Sids_Resume.pdf'} 
        target="_blank"
        className="hover:text-accent transition-all duration-300 flex items-center justify-center bg-transparent border-2 border-white text-white p-0.5 px-2 rounded-lg text-lg font-semibold hover:bg-transparent hover:text-accent border-solid border-transparent hover:border-accent"
        download={true}
      >
        Resume <RiExternalLinkFill className="w-6"  />
      </Link>
    </div>
  );
};

export default Socials;
