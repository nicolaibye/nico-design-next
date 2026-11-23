import React from "react";

const processStages = [
  {
    title: "Discovery",
    duration: "1-2 weeks",
    description:
      "A deep dive into what makes your business tick. Expect a lot of questions, and close collaboration to ensure I understand your vision and goals. This is where we lay the foundation for a successful project.",
  },
  {
    title: "Design",
    duration: "2-3 weeks",
    description:
      "Time for me and my led to explore and bring your vision to life. This is where the magic happens, and where I get to show off my skills and creativity.",
  },
  {
    title: "Launch",
    duration: "1-2 weeks",
    description:
      "Deliverables are handed over, and the champagne is popped! As I eagerly await to see your project come to life.",
  },
];

const ProcessSection = () => {
  return (
    <section>
      <h2 className="font-lexend tracking-widest leading-11 sm:leading-13 md:leading-16 font-extralight text-[2.0rem] sm:text-[2.5rem] md:text-5xl uppercase">
        My process
      </h2>
      <p>
        All projects has it&apos;s quirks and kinks, but ultimately, the way I
        approach every project breaks down into three main stages.
      </p>
      <ul className="grid grid-cols-1 h-full gap-10 md:gap-30 mb-6 mt-16">
        {processStages.map((stage, index) => (
          <li key={index} className="flex flex-col md:flex-row justify-between md:items-end gap-4 sm:gap-none border-b pb-10">
            <div className="flex flex-col gap-5">
              <p className="text-xs font-semibold text-red-CoralRed uppercase tracking-[0.25rem]">
                {stage.duration}
              </p>
            <h3 className="leading-7 md:leading-11 font-redaction-50 tracking-normal text-[2.65rem] md:text-5xl lg:text-7xl text-red-CoralRed">
              {stage.title}
            </h3>
          </div>
          <p className="md:w-2/5">
            {stage.description}
          </p>
        </li>
        ))}
      </ul>
      <p className="text-sm">
        *if you have any questions, feel free to pop me a message!
      </p>
    </section>
  );
};

export default ProcessSection;