import Link from 'next/link';
import Image from 'next/image';
import { GoLinkExternal } from 'react-icons/go';
import { IoLogoGithub } from 'react-icons/io';
import TechStack from './TechStack';

const Project = ({ project, selected }) => {
  return (
    <article
      className={`relative flex flex-col items-center justify-center flex-shrink-0 w-full md:w-[85%] px-8 md:px-14 md:bg-gray-200 md:rounded-xl transition-opacity duration-200 m-0 pb-10 space-y-3 md:space-y-0 ${
        selected ? 'opacity-100' : 'opacity-40'
      }`}
    >
      <Image src={project.img} alt={project.name} height={200} width={300} />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <TechStack stack={project.stack} />
      <div className="">
        <Link href={project.githubLink}>
          <IoLogoGithub />
        </Link>
        <Link href={project.projectLink}>
          <GoLinkExternal />
        </Link>
      </div>
    </article>
  );
};
export default Project;
