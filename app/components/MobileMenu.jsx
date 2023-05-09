import Link from 'next/link';
import Image from 'next/image';
import Logo from './../../public/assets/logo.png';
import { AiOutlineClose } from 'react-icons/ai';

const MobileMenu = ({ handleNav }) => {
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <Image src={Logo} width={100} alt="/" />
        <div
          onClick={handleNav}
          className="hover:opacity-40 ease-in duration-100"
        >
          <AiOutlineClose size={25} />
        </div>
      </div>
      <div className="py-4 flex flex-col ">
        <ul className="uppercase">
          <Link href="/">
            <li className="py-4 text-sm">Intro</li>
          </Link>
          <Link href="/">
            <li className="py-4 text-sm">About</li>
          </Link>
          <Link href="/">
            <li className="py-4 text-sm">Skills</li>
          </Link>
          <Link href="/">
            <li className="py-4 text-sm">Projects</li>
          </Link>
          <Link href="/">
            <li className="py-4 text-sm">Contact</li>
          </Link>
          <Link href="/">
            <li className="py-4 text-sm">Resume</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
