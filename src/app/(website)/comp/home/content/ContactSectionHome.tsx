import { getPayload } from "payload";
import config from "@payload-config";
import ContactForm from "../../reuse/ContactForm";

const ContactSectionHome = async () => {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "forms",
    where: { title: { equals: "Time to not be like everyone else!" } }, // match whatever you name it in /admin
    limit: 1,
  });

  const form = docs[0];

  if (!form) {
    return <p>Contact form not found — create one in /admin first.</p>;
  }
  return (
    <section
      className={`border border-black-Mirage dark:border-white-LinkWater w-[calc(100%-4rem)] lg:max-w-5xl mx-auto p-5 sm:p-10 md:p-20 my-10 md:my-14 lg:my-24 grid grid-cols-1  gap-5 md:gap-10 rounded-lg`}
    >
      <div>
        <h2 className="font-lexend uppercase tracking-widest leading-9 text-center md:leading-16 font-extralight text-[1.60rem] md:text-5xl">
          Lets make <wbr /> your brand <br />
          <span className="font-redaction-50 tracking-normal text-[2.65rem] md:text-7xl text-red-CoralRed uppercase">
            stand out <br />
          </span>
        </h2>
      </div>
      <ContactForm form={form} />
    </section>
  );
};

export default ContactSectionHome;
