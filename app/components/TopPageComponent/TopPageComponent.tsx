import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  content?: string;
};

const TopPageComponent = (props: Props) => {
  return (
    <div className="relative h-[408px]">
      <div className="absolute top-0 left-0 w-full h-full bg-[#131313] opacity-50 z-2"></div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full px-5">
        <h1 className="h1 text-white mb-3">{props.title}</h1>
        <p className="p1 text-white">{props.content}</p>
      </div>
      <Image
        width={1920}
        height={1080}
        className="w-full h-[408px] lg:object-fill md:object-cover sm:object-cover xs:object-cover"
        src="/images/mainImage.jpg"
        alt="mainImage"
        quality={100}
        loading="lazy"
      />
    </div>
  );
};

export default TopPageComponent;
