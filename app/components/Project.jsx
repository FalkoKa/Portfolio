import Link from 'next/link';
import Image from 'next/image';
import { GoLinkExternal } from 'react-icons/go';
import { IoLogoGithub } from 'react-icons/io';
import TechStack from './TechStack';

const Project = ({ project, selected }) => {
  return (
    <article
      className={`relative flex flex-col gap-1 items-center justify-center flex-shrink-0 w-full md:w-[80%] px-8 md:px-24 md:bg-gray-200 md:rounded-xl transition-opacity duration-200 m-0 pb-10 space-y-3 md:space-y-0 ${
        selected ? 'opacity-100' : 'opacity-40'
      }`}
    >
      <h3 className="m-4">{project.name}</h3>
      <Image src={project.img} alt={project.name} height={300} width={500} />
      <p className="text-sm">{project.description}</p>
      <TechStack stack={project.stack} />
      <div className="flex gap-2 absolute top-0 right-[10%] md:top-6 lg:top-8">
        <Link
          href={project.githubLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          <IoLogoGithub size={30} />
        </Link>
        {project.projectLink.length > 0 ? (
          <Link
            href={project.projectLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <GoLinkExternal size={30} />
          </Link>
        ) : (
          ''
        )}
      </div>
    </article>
  );
};
export default Project;
