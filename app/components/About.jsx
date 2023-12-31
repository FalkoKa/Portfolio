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
            Thank you for visiting my portfolio! I am a solution focused
            software engineer with background in law and business. I am
            currently working as Software Engineer at Hypoport SE, a network of
            technology companies in the credit, real estate and insurance
            industry. My values and international experience enable me to engage
            and easily integrate myself into diverse, intercultural teams.
            Combining my strong cultural skills, critical thinking, technical
            knowledge and business mindset, I am seeking opportunities as a
            software engineer. Feel free to check out some of my projects below!
          </p>
          <p className="py-4 md:text-xl sm:text-md text-md">
            Before I got into coding, I was studying law in Germany and Master
            of Business Administration (MBA) at the Australian RMIT University
            Vietnam (it is an Australian University though).
          </p>
          <p className="py-4 md:text-xl sm:text-md text-md">
            Why the career change? I love new challenges and I find my values
            align better with the work as a software engineer than in the legal
            field. I graduated from the General Assembly Software Engineering
            Immersive and just recently finished a Solidity Bootcamp, as I am
            very interested in the blockchain technology.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
