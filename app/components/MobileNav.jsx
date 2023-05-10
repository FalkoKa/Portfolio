import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';

import Link from 'next/link';

const MobileNav = ({ handleNav }) => {
  return (
    <ul className="flex md:hidden space-x-4 justify-center items-center">
      <Link href={'mailto:falkokammel@googlemail.com'}>
        <li>
          <IoIosMail size={35} />
        </li>
      </Link>
      <Link
        href={'https://github.com/FalkoKa'}
        target="_blank"
        rel="noreferrer noopener"
      >
        <li>
          <IoLogoGithub size={35} />
        </li>
      </Link>
      <Link
        href={'https://www.linkedin.com/in/falko-kammel/'}
        target="_blank"
        rel="noreferrer noopener"
      >
        <li>
          <IoLogoLinkedin size={35} />
        </li>
      </Link>
      <li onClick={handleNav}>
        <AiOutlineMenu size={35} />
      </li>
    </ul>
  );
};

export default MobileNav;
