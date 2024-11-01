"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { schema } from "./schema";
import { FormData } from "./types";

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
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-lg mx-auto"
      >
        {fields.map((field) => (
          <div key={field}>
            <input
              {...register(field)}
              placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
              className="w-full p-2 border rounded"
            />
            {errors[field] && (
              <p className="text-red-500">{errors[field]?.message}</p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-purple-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
