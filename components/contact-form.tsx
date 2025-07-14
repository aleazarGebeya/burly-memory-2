import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const isEmail = (v: string) => /^\S+@\S+\.\S+$/.test(v);

export const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "success" | "error" | "loading">(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) errs.name = "Name required";
    if (!isEmail(email)) errs.email = "Valid email required";
    if (!message.trim()) errs.message = "Message required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow max-w-lg mx-auto p-8 space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold mb-2 text-center">Let’s Connect</h2>
      <div>
        <label className="block mb-1 font-medium text-gray-700">Name</label>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" type="text" className="mb-1" />
        {errors.name && <span className="text-rose-600 text-xs ml-1">{errors.name}</span>}
      </div>
      <div>
        <label className="block mb-1 font-medium text-gray-700">Email</label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" type="email" className="mb-1" />
        {errors.email && <span className="text-rose-600 text-xs ml-1">{errors.email}</span>}
      </div>
      <div>
        <label className="block mb-1 font-medium text-gray-700">Message</label>
        <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message..." rows={4} className="mb-1 resize-none" />
        {errors.message && <span className="text-rose-600 text-xs ml-1">{errors.message}</span>}
      </div>
      <Button type="submit" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
      {status === "success" && <p className="text-green-700 pt-2 text-center">Thank you! I’ll get back to you soon.</p>}
      {status === "error" && <p className="text-rose-700 pt-2 text-center">Something went wrong. Please try again!</p>}
    </form>
  );
};
