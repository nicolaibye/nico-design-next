// app/(website)/contact/page.tsx
import { getPayload } from "payload";
import config from "@payload-config";
import ContactForm from "@/app/(website)/comp/reuse/ContactForm.tsx";

const ContactPage = async () => {
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
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="font-lexend max-w-wide sm:w-3/4 lg:w-1/2 p-5 pt-18 sm:pt-10">
        <h1 className="font-lexend uppercase tracking-widest leading-9 sm:leading-16 font-extralight text-[1.60rem] sm:text-5xl mb-5 sm:mb-8">
          &quot;To not be like <wbr /> <br />
          <span className="font-redaction-50 tracking-normal text-[2.65rem] sm:text-7xl text-red-CoralRed uppercase">
            everyone&quot;
          </span>
        </h1>
        <p className="text-lg mb-8">
          Are you ready for your next creative partner? Fill out the form below
          and let&apos;s schedule a talk to see if we are the right fit for
          eachother! I look forward to hearing about your next project.
        </p>
        <ContactForm form={form} />
      </div>
    </section>
  );
};

export default ContactPage;
