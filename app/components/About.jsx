const About = () => {
  return (
    <div
      id="about"
      className="relative w-full md:h-screen flex items-center text-center"
    >
      <section className="max-w-[1240px] min-w-[400px] m-auto ">
        <h2 className="md:text-2xl sm:text-xl text-md md:tracking-[18px] tracking-[10px] pb-2 uppercase">
          About
        </h2>
        <div className="px-40 flex flex-col gap-5">
          <p className="py-4 md:text-xl sm:text-md text-md">
            Glad to see you on my portfolio! I just finished my remote Software
            Engineering Imemrsive at General Assembly. I am now looking for
            opportunitues in the tech field as react developer and software
            engineer! Feel free to check out some of my profects below this
            section!
          </p>
          <p className="py-4 md:text-xl sm:text-md text-md">
            Before I got into coding, I was studying law in Germany and an MBA
            at RMIT in Vietnam (it is an Austrialian University though - long
            story!).
          </p>
          <p className="py-4 md:text-xl sm:text-md text-md">
            Why the career change? I love new challenges and felt that my values
            have better alignment in this industry than in the business and
            legal field.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
