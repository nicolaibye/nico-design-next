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
      <div className="font-lexend max-w-wide sm:w-3/4 lg:w-1/2 sm:pt-10">
        <h1 className="text-3xl sm:text-5xl mb-8">
          Time to not be like{" "}
          <strong className="text-red-CoralRed font-redaction-50 uppercase">
            everyone
          </strong>{" "}
          else
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
