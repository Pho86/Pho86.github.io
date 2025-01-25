"use client";
import { useState } from "react";
import Button from "../Button";
import emailjs from "@emailjs/browser";
emailjs.init(process.env.NEXT_PUBLIC_EMAIL_KEY!);

export default function ContactForm() {
  const [message, setMessage] = useState({
    to_name: "Philip",
    from_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [buttontxt, setButtonTxt] = useState("Send Email");
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setButtonTxt("Sending...");
    setDisabled(true);
    e.preventDefault();
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_GMAIL_KEY!,
        process.env.NEXT_PUBLIC_EMAILTEMPLATE_KEY!,
        message
      );
      setButtonTxt("Sent!");
    } catch (error) {
        console.log(error)
      setButtonTxt("Sent.");
    }
    setDisabled(false);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMessage({ ...message, [event.target.name]: event.target.value });
  };
  return (
    <form
      className="flex justify-center align-center flex-col gap-5 w-full"
      onSubmit={handleSubmit}
    //   @ts-expect-error handleChange is not assignable to type 'EventHandler'
      onChange={handleChange}
    >
      <div className="grid grid-cols-2 gap-5">
        <div className="flex gap-2 justify-center flex-col">
          <div className="relative z-0">
            <input
              type="text"
              name="from_name"
              id="from_name"
              required
              className="block rounded py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-text focus:bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
            />
            <label
              htmlFor="from_name"
              className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Name
            </label>
          </div>
        </div>
        <div className="flex gap-2 justify-center flex-col">
          <div className="relative z-0">
            <input
              type="text"
              name="email"
              id="email"
              required
              className="block rounded py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-text focus:bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-center flex-col">
        <div className="relative z-0">
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className="block rounded py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-text focus:bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
          />
          <label
            htmlFor="subject"
            className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Subject
          </label>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-start flex-col">
        <div className="relative z-0 w-full">
          <textarea
            name="message"
            id="message"
            required
            rows={5}
            className="block rounded py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-text focus:bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
          />
          <label
            htmlFor="message"
            className="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-text peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Message
          </label>
        </div>
      </div>
      <div className="flex justify-center items-center my-4">
        <Button
          type="submit"
          disabled={disabled}
          className="w-full"
        >
            {buttontxt}
        </Button>
      </div>
    </form>
  );
}
