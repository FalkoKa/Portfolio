import Image from 'next/image';
const TechStack = ({ stack }) => {
  return (
    <div className="flex">
      {stack.map((src, idx) => (
        <Image key={idx} src={src[1]} alt="/" width={30} height={30} />
      ))}
    </div>
  );
};
export default TechStack;
