import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import IconEmail from "../icons/IconEmail";
import IconPhone from "../icons/IconPhone";
import FormElements from "./components/FormElements";
import IconInfo from "./components/IconInfo";

const CustomerService = () => {
  const refForm = useRef();
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const renderAlert = () => (
    <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
      <p>Your message submitted successfully</p>
    </div>
  );
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    const serviceId = "service_9k9cl6l";
    const templateId = "template_pcqgobs";
    const apiKey = "HWw_8wwno3q3sYZDx";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => setStatus("SUCCESS"))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
        reset();
      }, 3000);
    }
  }, [status]);

  return (
    <div className="xl:container mx-auto mb-32">
      <div
        className="flex justify-center "
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(255,117,16,1) 100%",
          height: "250px",
        }}
      >
        <h1 className=" text-4xl sm:text-7xl text-white uppercase pt-12 ">
          Customer Service
        </h1>
      </div>

      <div className="p-4 sm:w-2/3 mx-auto">
        <div className="rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6 ">
          <div className="grid  grid-cols-2 gap-x-6 mb-12 mx-auto">
            <a href="mailto:dayicruz1401@gmail.com">
              <IconInfo icon={<IconEmail />} text={"dayicruz1401@gmail.com"} />
            </a>
            <a href="https://web.whatsapp.com//send?phone=+34604248563&text=Hello, I have seen your website and I would like to contact you">
              <IconInfo icon={<IconPhone />} text={"+34 604 248 563"} />
            </a>
          </div>
          {status && renderAlert()}
          <form ref={refForm} id="form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="user_name"
              id="user_name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormElements
                  type="text"
                  label="Name"
                  placeholder="Enter name here..."
                  fieldRef={field}
                  hasError={errors.user_name?.type === "required"}
                />
              )}
            />

            <Controller
              name="user_email"
              id="user_email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormElements
                  type="email"
                  label="Email"
                  placeholder="Enter email here..."
                  fieldRef={field}
                  hasError={errors.user_email?.type === "required"}
                />
              )}
            />

            <Controller
              name="message"
              id="message"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormElements
                  type="textarea"
                  label="Message"
                  placeholder="Enter message here..."
                  fieldRef={field}
                  hasError={errors.message?.type === "required"}
                />
              )}
            />
            <button
              type="submit"
              id="button"
              value="Send Email"
              className="w-full px-6 py-3 bg-orange-500 text-white font-medium uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-700 focus:outline-none  focus:ring-0 active:bg-orange-800"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
