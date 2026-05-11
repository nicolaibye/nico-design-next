"use client";

import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  budget: number;
  timeline: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // handle your submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex flex-col gap-1 w-full">
          <input
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Name must be at least 3 characters" },
            })}
            type="text"
            placeholder="Your Name"
            className="w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-xs font-lexend">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1 w-full">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
            })}
            type="email"
            placeholder="Your Email"
            className="w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-xs font-lexend">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex flex-col gap-1 w-full">
          <input
            {...register("budget", {
              required: "Budget is required",
              valueAsNumber: true,
              validate: (v) => !isNaN(v) || "Budget must be a number",
              min: { value: 0, message: "Budget must be a positive number" },
            })}
            type="number"
            placeholder="Est. Budget (GBP)"
            className="w-full"
          />
          {errors.budget && (
            <p className="text-red-500 text-xs font-lexend">{errors.budget.message}</p>
          )}
        </div>
        <input
          {...register("timeline")}
          type="text"
          placeholder="Est. Timeline"
          className="w-full"
        />
      </div>
      <textarea
        {...register("message")}
        placeholder="Your Message"
        rows={5}
        className="w-full"
      />
      <button
        type="submit"
        className="cursor-pointer py-2 px-4 inline-block rounded-lg border border-white-LinkWater hover:bg-white-LinkWater hover:text-black-Mirage font-lexend uppercase"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;