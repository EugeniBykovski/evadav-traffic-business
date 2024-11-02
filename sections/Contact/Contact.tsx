"use client";

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

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message.");
    }
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
      <Subtitle>Contact Us</Subtitle>
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
        <Button
          type="submit"
          variant={"default"}
          size={"lg"}
          className="text-white text-md flex justify-start"
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
