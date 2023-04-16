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
      <h3 className="absolute top-36 uppercase tracking-[20px] justify-center text-gray-500 text-xl md:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col relative items-center">
        

        <div className="flex flex-col space-y-2 ">
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
          className="flex flex-col mt-10 mx-auto w-[300px]  md:w-[500px] justify-between space-y-2 justify-evenly caret-white z-20"
        >
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

          <input
            {...register("subject", { required: true })}
            placeholder="Subject"
            className="contactInput"
            type="text"
            id="subject"
            aria-required="true"
            aria-label="Subject"
          />

          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className="flex flex-col bg-gray-800 outline-none rounded-sm border-b py-5 border-[#242424] text-gray-50 placeholder-gray-500 transition-all focus:border-white focus:text-white hover:border-white px-3"
            minLength={10}
            required
            typeof="text"
            id="message"
            aria-required="true"
            aria-label="Message"
          />

          <button
            type="submit"
            className="bg-[#5572af]  py-4 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
