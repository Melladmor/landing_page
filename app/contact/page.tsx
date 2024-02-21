import React from "react";
import TopPageComponent from "../components/TopPageComponent/TopPageComponent";

import ContactForm from "@/app/components/Contact/Contact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "We specialize in helping you build a team of expert developers.",
};
const Contact = () => {
  return (
    <div>
      <TopPageComponent
        title="Contact"
        content="We specialize in helping you build a team of expert developers."
      />
      <section className="pagesPadding py-16 sm:px-5 xs:px-5">
        <h2 className="h2">Get in touch</h2>
        <p className="p2 lg:w-[700px] text-start uppercase">
          Please feel free to get in touch with us via any convenient means
          (phone, whatsapp, email, submit a contact form). We will be glad to
          answer your questions as soon as possible.
        </p>
      </section>

      <ContactForm />
    </div>
  );
};

export default Contact;
