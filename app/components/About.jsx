const About = () => {
  return (
    <div
      id="about"
      className="relative w-full min-h-screen flex items-center text-center"
    >
      <section className="max-w-[1240px] min-w-[400px] m-auto ">
        <h2 className="md:text-2xl sm:text-xl text-md md:tracking-[18px] tracking-[10px] pb-2 uppercase">
          About
        </h2>
        <div className="px-10 md:px-40 flex flex-col gap-5">
          <p className="py-4 md:text-xl sm:text-md text-md">
            Thank you for visiting my portfolio! I just finished my remote
            Software Engineering Imnersive at General Assembly. I am now looking
            for opportunities in the tech industry as React Developer and
            Software Engineer! Feel free to check out some of my projects below!
          </p>
          <p className="py-4 md:text-xl sm:text-md text-md">
            Before I got into coding, I was studying law in Germany and Master
            of Business Administration (MBA) at RMIT in Vietnam (yes, I studied
            at an Austrialian University in Vietnam - fun story!).
          </p>
          <p className="py-4 md:text-xl sm:text-md text-md">
            Why the career change? I love new challenges and I find my values
            align better with the work as a software engineer than in the legal
            field.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
