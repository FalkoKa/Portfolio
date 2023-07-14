import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Footer from './Footer';

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative w-full min-h-screen flex items-center text-center m-auto"
    >
      <section className="max-w-[1240px] min-w-[400px] m-auto">
        <h2 className="md:text-2xl sm:text-xl text-md md:tracking-[18px] tracking-[10px] pb-2 uppercase">
          Contact
        </h2>
        <div className="relative w-full flex flex-col md:flex-row md:space-x-40 lg:space-x-60 space-y-4 md:space-y-0 items-center md:items-start mt-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;
