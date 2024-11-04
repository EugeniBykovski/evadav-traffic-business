"use client";

import { FC, memo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { schema } from "./schema";
import { FormData } from "./types";
import Subtitle from "@/components/Subtitle/Subtitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";

const ContactForm: FC = memo(() => {
  const t = useTranslations("contact-section");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (formData: FormData) => {
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { success, error } = await response.json();

      if (success) {
        toast.success("Your inquiry has been submitted!");
        reset();
      } else {
        console.error("Error:", error);
        toast.error("Error while submitting your inquiry.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }

    setSubmitting(false);
  };

  const fields: (keyof FormData)[] = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "subject",
    "message",
  ];

  return (
    <section id="contacts" className="p-8">
      <Subtitle>{t("title")}</Subtitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-lg mx-auto"
      >
        {fields.map((field) => (
          <div key={field}>
            <Input
              {...register(field)}
              placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
              className="w-full p-5 rounded cursor-pointer hover:shadow-md transition text-xs"
            />
            {errors[field] && (
              <Label className="text-red-500">{errors[field]?.message}</Label>
            )}
          </div>
        ))}
        <div className="flex justify-between items-center">
          <Button
            type="reset"
            variant="destructive"
            size="lg"
            onClick={() => reset()}
            disabled={submitting}
          >
            {t("reset")}
          </Button>
          <Button
            type="submit"
            variant="default"
            size="lg"
            disabled={submitting}
          >
            {t("submit")}
          </Button>
        </div>
      </form>
    </section>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;
