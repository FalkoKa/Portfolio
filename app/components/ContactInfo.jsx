import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import Link from 'next/link';

const ContactInfo = () => {
  return (
    <div className="space-y-6 font-sans">
      <div className="pl-5 md:pl-0">
        <div className="flex items-center justify-left space-x-5 my-1 w-max">
          <IoLocationSharp className="text-xl md:text-2xl" />
          <p className="text-md">Germany - happy to relocate!</p>
        </div>
        <Link href={'mailto:falkokammel@googlemail.com'}>
          <div className="flex items-center justify-left space-x-5 my-1 w-fit">
            <IoIosMail className="text-xl md:text-2xl" />
            <p className="text-md">falkokammel@googlemail.com</p>
          </div>
        </Link>
        <Link
          href={'https://github.com/FalkoKa/'}
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="flex items-center justify-left space-x-5 my-1 w-fit">
            <IoLogoGithub className="text-xl md:text-2xl" />
            <p className="text-md">github.com/FalkoKa</p>
          </div>
        </Link>
        <Link
          href={'https://www.linkedin.com/in/falko-kammel/'}
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="flex items-center justify-left space-x-5 my-1 w-fit">
            <IoLogoLinkedin className="text-xl md:text-2xl" />
            <p className="text-md">linkedin.com/in/falko-kammel</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
