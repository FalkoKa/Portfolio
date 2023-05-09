import Image from 'next/image';

const Skill = ({ skill, img }) => {
  return (
    <div className="group relative shadow-md w-[150px] h-[150px] hover:scale-105 flex flex-col justify-center rounded-md object-contain items-center overflow-hidden">
      <Image
        src={img}
        alt={skill}
        width="200"
        height="200"
        className="object-over filter group-hover:opacity-[20%] transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out items-center h-full font-sans font-bold text-center flex">
        <p className="opacity-100">{skill}</p>
      </div>
    </div>
  );
};

export default Skill;
