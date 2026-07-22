// components/ContactForm.tsx
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
import type { Form as PayloadForm } from "@/types/payload-types.ts";

function buildSchema(fields: PayloadForm["fields"]) {
  const shape: Record<string, z.ZodTypeAny> = {};

  fields?.forEach((field) => {
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

  return z.object(shape);
}

function widthToSpan(width: number | null | undefined) {
  return width === 50 ? "col-span-2 sm:col-span-1" : "col-span-2";
}

type ContactFormField = NonNullable<PayloadForm["fields"]>[number];

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
        {required && <span className="text-destructive">*</span>}
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

  const fields: ContactFormField[] = form?.fields ?? [];
  const formId = form?.id ?? "";
  const schema = buildSchema(fields);

  const rhf = useForm<Record<string, unknown>>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...Object.fromEntries(
        fields.map((field) => [
          field.name,
          field.blockType === "select" &&
          "defaultValue" in field &&
          field.defaultValue
            ? field.defaultValue
            : "",
        ]),
      ),
      _honeypot: "", // not a real Payload field — never sent to submissionData
    },
  });

  const onSubmit = async (data: Record<string, unknown>) => {
    const { _honeypot, ...formValues } = data;

    if (typeof _honeypot === "string" && _honeypot) {
      setStatus("success"); // fake success, no error shown, no request sent
      return;
    }

    setStatus("idle");

    const submissionData = Object.entries(formValues).map(([field, value]) => ({
      field,
      value,
    }));

    const res = await fetch("/api/form-submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ form: formId, submissionData }),
    });

    if (res.ok) {
      setStatus("success");
      rhf.reset();
    } else {
      setStatus("error");
    }
  };

  if (!form) {
    return <p>Contact form is not available right now.</p>;
  }

  if (status === "success") {
    setTimeout(() => setStatus("idle"), 5000);
    return (
      <p className="font-lexend">
        {form.confirmationMessage.root.children[0].children[0].text}
      </p>
    );
  }

  return (
    <Form {...rhf}>
      <form onSubmit={rhf.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          {form.fields?.map((field) => {
            const placeholder =
              "defaultValue" in field && field.defaultValue
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
                      label={field.label}
                      required={field.required}
                    />
                    <FormControl>
                      {field.blockType === "textarea" ? (
                        <Textarea placeholder={placeholder} {...rhfField} />
                      ) : field.blockType === "select" ? (
                        <Select
                          onValueChange={rhfField.onChange}
                          value={rhfField.value ?? ""}
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
