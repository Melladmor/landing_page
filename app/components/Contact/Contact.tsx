import Image from "next/image";
import React from "react";
import FormContact from "./FormContact";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="relative grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:pagesPadding">
      <div>
        <Image
          width={1024}
          height={1024}
          src="/images/contact.png"
          alt="contact"
          className="lg:h-[700px] md:h-[560px] sm:h-[560px] xs:h-[550px] "
        />
      </div>
      <div className="section_form_contact">
        <FormContact />
      </div>
    </div>
  );
};

export default Contact;
