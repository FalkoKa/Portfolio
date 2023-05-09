import Skill from './Skill';

const skills = [
  ['Javascript', '/../public/assets/skills/javascript.png'],
  ['ReactJS', '/../public/assets/skills/react.png'],
  ['ExpressJS', '/../public/assets/skills/expressjs.png'],
  ['NodeJS', '/../public/assets/skills/node.png'],
  ['NextJS', '/../public/assets/skills/nextjs.png'],
  ['HTML', '/../public/assets/skills/html.png'],
  ['CSS', '/../public/assets/skills/css.png'],
  ['Tailwind CSS', '/../public/assets/skills/tailwind.png'],
  ['MongoDB', '/../public/assets/skills/mongo.png'],
  ['PostgreSQL', '/../public/assets/skills/postgresql.png'],
  ['Firebase', '/../public/assets/skills/firebase.png'],
  ['Git', '/../public/assets/skills/git.png'],
];

const Skills = () => {
  return (
    <div className="relative w-full md:h-screen p-2">
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
