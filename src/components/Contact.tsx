"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all the fields");
      return;
    }

    console.log({ name, email, message });

    // Confirm this object data
    alert(
      "Name: " +
        name +
        "\nEmail: " +
        email +
        "\nMessage: " +
        message +
        "\nMessage sent successfully!",
    );

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-4 bg-white px-8 py-5 pb-20 text-black md:px-10">
      <h2 className="font-lexend_deca text-2xl font-semibold md:text-4xl">
        Contact Us
      </h2>
      <div className="flex flex-col justify-between gap-2 rounded-2xl border-4 border-[#28BE46] px-6 py-5 shadow-lg md:flex-row-reverse md:gap-5 md:px-8 md:pb-5 md:pt-8">
        <Image
          src="/assets/contact.png"
          alt="contact"
          width={403}
          height={352}
          className="w-80"
        />
        <form
          className="font-lexend_deca flex flex-col gap-2 md:gap-3"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              className="rounded-lg border-2 border-[#28BE46] p-2"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              className="rounded-lg border-2 border-[#28BE46] p-2"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-lg font-medium">
              Message
            </label>
            <textarea
              name=""
              id="message"
              className="rounded-lg border-2 border-[#28BE46] p-2"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-2 flex justify-end">
            <button className="noto-serif-tc-regular rounded-lg bg-[#1DC74D] px-7 py-1 text-white">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
