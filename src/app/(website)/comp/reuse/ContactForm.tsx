"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RichText } from "@/app/(website)/comp/blog/RichText";
import type { Form as PayloadForm } from "@/types/payload-types.ts";
import type { Resolver } from "react-hook-form";

type FormFieldBlock = NonNullable<PayloadForm["fields"]>[number];
type InputFieldBlock = Exclude<FormFieldBlock, { blockType: "message" }>;

function isInputField(field: FormFieldBlock): field is InputFieldBlock {
  return field.blockType !== "message";
}

function buildSchema(fields: InputFieldBlock[]) {
  const shape: Record<string, z.ZodTypeAny> = {};

  fields.forEach((field) => {
    let validator: z.ZodTypeAny = z.string();

    if (field.blockType === "email") {
      validator = z.string().email("Enter a valid email");
    }

    if (!field.required) {
      validator = validator.optional().or(z.literal(""));
    } else {
      validator = (validator as z.ZodString).min(1, "This field is required");
    }

    shape[field.name] = validator;
  });

  shape._honeypot = z.string().optional();

  return z.object(shape);
}

function widthToSpan(width: number | null | undefined) {
  return width === 50 ? "col-span-2 sm:col-span-1" : "col-span-2";
}

function FieldHeader({
  label,
  required,
}: {
  label: string;
  required?: boolean;
}) {
  const { error } = useFormField();

  return (
    <div className="flex items-baseline justify-between gap-2">
      <FormLabel>
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </FormLabel>
      {error?.message && (
        <span className="hidden sm:inline text-destructive text-sm text-right">
          {String(error.message)}
        </span>
      )}
    </div>
  );
}

export const ContactForm = ({ form }: { form: PayloadForm | undefined }) => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const inputFields = form?.fields?.filter(isInputField) ?? [];
  const schema = buildSchema(inputFields);

  type FormValues = Record<string, string>;

  const rhf = useForm<FormValues>({
    resolver: zodResolver(schema) as unknown as Resolver<FormValues>,
    defaultValues: {
      ...Object.fromEntries(
        inputFields.map((f) => [
          f.name,
          f.blockType === "select" && f.defaultValue ? f.defaultValue : "",
        ]),
      ),
      _honeypot: "",
    },
  });

  if (!form) {
    return <p>Contact form is not available right now.</p>;
  }

  const onSubmit = async (data: Record<string, string>) => {
    if (data._honeypot) {
      setStatus("success");
      return;
    }

    setStatus("idle");

    const submissionData = Object.entries(data)
      .filter(([field]) => field !== "_honeypot")
      .map(([field, value]) => ({ field, value }));

    const res = await fetch("/api/form-submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ form: form.id, submissionData }),
    });

    if (res.ok) {
      setStatus("success");
      rhf.reset();
    } else {
      setStatus("error");
    }
  };

  if (status === "success") {
    setTimeout(() => setStatus("idle"), 3000);
    return (
      <>
        <RichText
          className="font-lexend text-lg font-light w-[85%] max-w-wide lg:w-[75%] mx-auto"
          data={form.confirmationMessage}
        />
        {!form.confirmationMessage && (
          <p className="font-lexend">
            Thanks — I&apos;ll get back to you soon.
          </p>
        )}
      </>
    );
  }

  return (
    <Form {...rhf}>
      <form onSubmit={rhf.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          <div className="hidden" aria-hidden="true">
            <label htmlFor="_honeypot">Leave this field empty</label>
            <input
              id="_honeypot"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...rhf.register("_honeypot")}
            />
          </div>

          {inputFields.map((field) => {
            const placeholder =
              (field.blockType === "text" || field.blockType === "textarea") &&
              field.defaultValue
                ? field.defaultValue
                : undefined;

            return (
              <FormField
                key={field.id ?? field.name}
                control={rhf.control}
                name={field.name}
                render={({ field: rhfField }) => (
                  <FormItem className={widthToSpan(field.width)}>
                    <FieldHeader
                      label={field.label ?? field.name}
                      required={!!field.required}
                    />
                    <FormControl>
                      {field.blockType === "textarea" ? (
                        <Textarea placeholder={placeholder} {...rhfField} />
                      ) : field.blockType === "select" ? (
                        <Select
                          onValueChange={rhfField.onChange}
                          value={rhfField.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            {field.options?.map((opt) => (
                              <SelectItem
                                key={opt.id ?? opt.value}
                                value={opt.value}
                              >
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <Input
                          type={field.blockType === "email" ? "email" : "text"}
                          placeholder={placeholder}
                          {...rhfField}
                        />
                      )}
                    </FormControl>
                    <FormMessage className="sm:hidden" />
                  </FormItem>
                )}
              />
            );
          })}
        </div>

        <Button type="submit" disabled={rhf.formState.isSubmitting}>
          {rhf.formState.isSubmitting
            ? "Sending..."
            : form.submitButtonLabel || "Submit"}
        </Button>

        {status === "error" && (
          <p className="text-red-CoralRed text-sm">
            Something went wrong — please try again.
          </p>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;
