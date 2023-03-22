import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import Error from "next/error";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:james.hunter0423@gmail.com?subject=${formData.subject}& body=Hi, my name is ${formData.name}.${formData.message}(${formData.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:flex-flow max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] justify-center text-gray-500 text-xl md:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col relative items-center">
        <h4 className=" text-md text-center font-semibold md:mb-12 hidden xl:flex items-center  justify-evenly">
          I have got just what you need.{" "}
          <span className="flex decoration-[#5572af]/50 underline ">
            {" "}
            Lets Talk
          </span>
        </h4>

        <div className="flex flex-col  space-y-2 mb-20 sm:mb-0">
          <div className="flex space-x-5">
            <PhoneIcon className="text-[#5572af] h-7 w-7 animate-pulse" />
            <p>(905) 328-2058</p>
          </div>
          <div className="flex space-x-5 ">
            <EnvelopeIcon className="text-[#5572af] h-7 w-7 animate-pulse" />
            <p>James.hunter0423@gmail.com</p>
          </div>
          <div className="flex  space-x-5 ">
            <MapPinIcon className="text-[#5572af] h-7 w-7 animate-pulse" />
            <p>Welland, ON</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mt-10 mx-auto w-[250px] md:w-[500px] justify-between space-y-4 caret-white"
        >
          <label htmlFor="name"></label>
          <input
            {...register("name", { required: true })}
            placeholder="Name"
            className="contactInput"
            type="text"
            minLength={3}
            maxLength={40}
            required
            id="name"
            aria-required="true"
            aria-label="Name"
          />

          <label htmlFor="email"></label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            placeholder="Email"
            className="contactInput"
            type="email"
            required
            id="email"
            aria-required="true"
            aria-label="Email"
          />

          <label htmlFor="subject"></label>
          <input
            {...register("subject", { required: true })}
            placeholder="Subject"
            className="contactInput"
            type="text"
            id="subject"
            aria-required="true"
            aria-label="Subject"
          />

          <label htmlFor="message"></label>
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className="contactInput"
            minLength={10}
            required
            typeof="text"
            id="message"
            aria-required="true"
            aria-label="Message"
          />

          <button
            type="submit"
            className="bg-[#5572af] py-2 md:py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
