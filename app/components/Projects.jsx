'use client';
import Project from './Project';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselIndex from './CarouselIndex';
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from 'react-icons/md';
import { useState, useCallback, useEffect } from 'react';

const stack = [
  '/../public/assets/skills/javascript.png',
  '/../public/assets/skills/react.png',
  '/../public/assets/skills/expressjs.png',
  '/../public/assets/skills/node.png',
  '/../public/assets/skills/nextjs.png',
  '/../public/assets/skills/html.png',
  '/../public/assets/skills/css.png',
  '/../public/assets/skills/tailwind.png',
  '/../public/assets/skills/mongo.png',
  '/../public/assets/skills/postgresql.png',
  '/../public/assets/skills/firebase.png',
  '/../public/assets/skills/git.png',
];

const [
  js,
  react,
  express,
  node,
  nextjs,
  html,
  css,
  tailwind,
  mongodb,
  postgres,
  firebase,
  git,
] = stack;

const projects = [
  {
    name: 'E-Commerce Clone',
    img: '/../public/assets/projects/e-com-clone.png',
    description:
      'Zalando e-commerce clone, built with ReactJS. NodeJS, ExpressJS REST API as the backend. JWT for authentication, bcrypt for password encryption.',
    githubLink: 'https://github.com/FalkoKa/e-commerce_clone_react',
    projectLink: 'https://zalando-clone.netlify.app/',
    stack: [js, react, express, node, css, mongodb],
  },
  {
    name: 'Weather App',
    img: '/../public/assets/projects/e-com-clone.png',
    description:
      'React weather app (open weather API) with Alan AI voice command and EmailJS temperature drop reminder.',
    githubLink: 'https://github.com/FalkoKa/weather-app',
    projectLink: '',
    stack: [js, react, css, git],
  },

  {
    name: 'Shop Inventory App',
    img: '/../public/assets/projects/shop-inventory.png',
    description:
      'SSR inventory app with built with EJS with NodeJS and ExpressJS backend and sessions for login, bcrypt for password encryption.',
    githubLink: 'https://github.com/FalkoKa/Shop-Inventory',
    projectLink: 'https://shopinventoryapp.onrender.com/',
    stack: [js, node, express, css, postgres],
  },
  {
    name: 'Servo API',
    img: '/../public/assets/projects/shop-inventory.png',
    description:
      'App utilyzing google maps API to show where you are and find the closest service gas station based off the location you search (for Australia). Commodities API. PostgreSQL for storing gas stations.',
    githubLink: 'https://github.com/FalkoKa/servo_api',
    projectLink: '',
    stack: [js, react, css, postgres, git],
  },
  {
    name: 'Tic Tac Toe',
    img: '/../public/assets/projects/tic-tac-toe.png',
    description:
      '2-Player Tic Tac Toe game, built with Vanilla JS, HTML and CSS.',
    githubLink: 'https://github.com/FalkoKa/Project-Tic-Tac-Toe',
    projectLink: '',
    stack: [js, html, css],
  },
  {
    name: 'Etch A Sketch',
    img: '/../public/assets/projects/etch-a-sketch.png',
    description:
      'Etch a sketch drawing bord, changable field size and different color modes. Built with Vanilla JS, HTML and CSS.',
    githubLink: 'https://github.com/FalkoKa/Etch-a-Sketch',
    projectLink:
      'https://rawcdn.githack.com/FalkoKa/Etch-a-Sketch/576eab97f4056f3042da24b37bd1e3acba55335a/index.html',
    stack: [js, html, css],
  },
];

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div id="projects" className="my-20 w-full overflow-hidden relative">
      <h2 className="md:text-2xl sm:text-xl text-md md:tracking-[18px] tracking-[10px] pb-2 uppercase text-center my-10">
        Projects
      </h2>
      <div id="embla" ref={emblaRef}>
        <div
          id="embla_container"
          className="flex space-x-5 min-h-[60vh] max-h-fit"
        >
          {projects.map((project, idx) => (
            <Project
              key={idx}
              project={project}
              selected={idx === selectedIndex}
            />
          ))}
        </div>
      </div>
      {prevBtnEnabled && (
        <MdKeyboardDoubleArrowLeft
          className="absolute z-100 top-[55%] left-[3%] md:left-[10%] disabled:opacity-0"
          onClick={scrollPrev}
          size={50}
        />
      )}
      {nextBtnEnabled && (
        <MdKeyboardDoubleArrowRight
          className="absolute z-100 top-[55%] right-[3%] md:right-[10%] disabled:opacity-0"
          onClick={scrollNext}
          size={50}
        />
      )}
      <CarouselIndex
        projects={projects}
        selectedIndex={selectedIndex}
        scrollTo={scrollTo}
      />
    </div>
  );
};

export default Projects;
