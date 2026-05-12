"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  budget: string;
  timeline: string;
  message: string;
};

type SubmitStatus =
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | null;

const BUDGET_OPTIONS = [
  "Under £1,000",
  "£1,000 – £3,000",
  "£3,000 – £5,000",
  "£5,000 – £10,000",
];

const TIMELINE_OPTIONS = [
  "Within 1 month",
  "1 - 3 months",
  "3 - 6 months",
  "6+ months",
];

function useTimedState<T>(duration = 4000) {
  const [value, setValue] = useState<T | null>(null);

  useEffect(() => {
    if (!value) return;
    const timer = setTimeout(() => setValue(null), duration);
    return () => clearTimeout(timer);
  }, [value, duration]);

  return [value, setValue] as const;
}

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useTimedState<SubmitStatus>(4000);

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      budget: "",
      timeline: "",
    },
  });

  useEffect(() => {
    if (!Object.keys(errors).length) return;
    const timer = setTimeout(() => clearErrors(), 4000);
    return () => clearTimeout(timer);
  }, [errors, clearErrors]);

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log("Form Data:", data);
      setSubmitStatus({
        type: "success",
        message: "Message sent! I'll be in touch soon.",
      });
      reset();
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong, please try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex flex-col gap-1 w-full">
          <input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
            type="text"
            placeholder="Your Name"
            className="w-full"
          />
          {errors.name && (
            <p className="text-white-LinkWater text-xs font-lexend">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1 w-full">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            type="email"
            placeholder="Your Email"
            className="w-full"
          />
          {errors.email && (
            <p className="text-white-LinkWater text-xs font-lexend">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex flex-col gap-1 w-full">
          <select
            {...register("budget", {
              required: "Please select a budget range",
              validate: (v) => v !== "" || "Please select a budget range",
            })}
            className="w-full"
          >
            <option value="">Est. Budget (GBP)</option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p className="text-white-LinkWater text-xs font-lexend">
              {errors.budget.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1 w-full">
          <select
            {...register("timeline", {
              required: "Please select a timeline",
              validate: (v) => v !== "" || "Please select a timeline",
            })}
            className="w-full"
          >
            <option value="">Est. Timeline</option>
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.timeline && (
            <p className="text-white-LinkWater text-xs font-lexend">
              {errors.timeline.message}
            </p>
          )}
        </div>
      </div>
      <textarea
        {...register("message")}
        placeholder="Your Project"
        rows={5}
        className="w-full"
      />
      <div className="flex flex-col gap-1 w-full">
        <button
          type="submit"
          className="cursor-pointer py-2 px-4 inline-block rounded-lg border border-white-LinkWater hover:bg-white-LinkWater hover:text-black-Mirage font-lexend uppercase"
        >
          Send Message
        </button>
        {submitStatus && (
          <p
            className={`text-xs font-lexend ${submitStatus.type === "success" ? "text-green-500" : "text-white-LinkWater"}`}
          >
            {submitStatus.message}
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
