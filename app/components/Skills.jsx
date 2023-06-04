import Skill from './Skill';
import js from './../../public/assets/skills/javascript.png';
import reactjs from './../../public/assets/skills/react.png';
import expressjs from './../../public/assets/skills/expressjs.png';
import nodejs from './../../public/assets/skills/node.png';
import nextjs from './../../public/assets/skills/nextjs.png';
import html from './../../public/assets/skills/html.png';
import css from './../../public/assets/skills/css.png';
import tailwindcss from './../../public/assets/skills/tailwind.png';
import mongodb from './../../public/assets/skills/mongodb.png';
import postgresql from './../../public/assets/skills/postgresql.png';
import git from './../../public/assets/skills/git.png';
import typescript from './../../public/assets/skills/typescript.png';

export const skills = [
  ['Javascript', js],
  ['TypeScript', typescript],
  ['ReactJS', reactjs],
  ['ExpressJS', expressjs],
  ['NodeJS', nodejs],
  ['NextJS', nextjs],
  ['HTML', html],
  ['CSS', css],
  ['Tailwind CSS', tailwindcss],
  ['MongoDB', mongodb],
  ['PostgreSQL', postgresql],
  ['Git', git],
];

const Skills = () => {
  return (
    <div id="skills" className="relative w-full md:h-screen p-2">
      <section className="max-w-[700px] m-auto text-center flex flex-col justify-center h-full">
        <h2 className="md:text-2xl sm:text-xl text-md md:tracking-[18px] tracking-[10px] pb-2 uppercase">
          Skills
        </h2>
        <div className="mx-auto my-5 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, idx) => {
            return <Skill key={idx} skill={skill[0]} img={skill[1]} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Skills;
