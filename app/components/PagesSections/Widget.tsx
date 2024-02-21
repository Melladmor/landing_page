import Image from "next/image";
import { WidgetProcessT } from "../../data/data.d";
import React from "react";

type Props = WidgetProcessT;

const Widget = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center mb-5">
      <Image
        height={1024}
        width={1024}
        className="h-[138px] w-[138px]"
        alt={props.image}
        src={props.image}
      />
      <p className="h3 mt-3">{props.content}</p>
    </div>
  );
};

export default Widget;
