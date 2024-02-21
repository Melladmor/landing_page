import Image from "next/image";
import React from "react";

type Props = {
  image: string;
};

const TechonlogiesCard = (props: Props) => {
  return (
    <div className="min-w-[210px] rounded-md h-[160px] flex justify-center items-center shadow-lg">
      <Image
        alt={props.image}
        src={props.image}
        className="w-[70px] h-[70px]"
        height={1024}
        width={1024}
        loading="lazy"
      />
    </div>
  );
};

export default TechonlogiesCard;
