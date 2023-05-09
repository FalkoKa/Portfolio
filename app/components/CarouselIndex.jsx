import { GoPrimitiveDot } from 'react-icons/go';

const CarouselIndex = ({ projects, selectedIndex, scrollTo }) => {
  return (
    <div
      id="embla_lines"
      className="flex space-x-2 z-100 absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 "
    >
      {projects.map((project, idx) => (
        <div
          key={idx}
          onClick={() => scrollTo(idx)}
          className={`cursor-pointer ${
            idx === selectedIndex ? 'opacity-100' : 'opacity-50'
          }`}
        >
          <GoPrimitiveDot size={20} />
        </div>
      ))}
    </div>
  );
};

export default CarouselIndex;
