// app/(website)/contact/page.tsx
import { getPayload } from "payload";
import config from "@payload-config";
import ContactForm from "@/app/(website)/comp/reuse/ContactForm.tsx";

const Review = async () => {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "forms",
    where: { title: { equals: "Review Form" } }, // match whatever you name it in /admin
    limit: 1,
  });

  const form = docs[0];

  if (!form) {
    return <p>Contact form not found — create one in /admin first.</p>;
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen z-2000">
      <div className="font-lexend max-w-wide sm:w-3/4 lg:w-1/2 p-5 pt-18 sm:pt-10">
        <h1 className="font-redaction-50 uppercase tracking-normal leading-9 sm:leading-16 text-[2.65rem] sm:text-7xl mb-5 sm:mb-8 text-red-CoralRed">
          Review form
        </h1>
        <p className="text-lg mb-8">
          Thank you for your review! I look forward to hearing about your next
          project.
        </p>
        <ContactForm form={form} />
      </div>
    </section>
  );
};

export default Review;
