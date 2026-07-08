import ContactForm from "../../reuse/ContactForm";

const ContactSectionHome = () => {
  return (
    <section
      id="contact"
      className={`bg-blue-NileBlue w-[calc(100%-4rem)] lg:max-w-5xl mx-auto p-5 sm:p-10 md:p-20 my-10 md:my-14 lg:my-24 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 justify-between rounded-lg text-white-LinkWater font-lexend`}
    >
      <div>
        <h2 className="font-lexend uppercase tracking-widest leading-9 text-center lg:text-left md:leading-none font-extralight text-[1.60rem] md:text-5xl">
          Lets make <br /> your brand <br />
          <span className="font-redaction-50 tracking-normal text-[2.65rem] md:text-6xl text-red-CoralRed uppercase">
            stand out <br />
          </span>
        </h2>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSectionHome;
