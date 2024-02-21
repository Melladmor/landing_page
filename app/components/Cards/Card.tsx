"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import { CardsT } from "../../data/data.d";
type Props = {
  data: CardsT;
  type: "row" | "column";
};

const Card = (props: Props) => {
  const { data, type } = props;
  const cardStyle = useMemo(() => {
    return type === "row" ? "cardDefaultStyle" : "cardColumnStyle";
  }, [type]);
  const imageStyle = useMemo(() => {
    return type === "column" ? "w-[80px] h-[80px]" : "w-[300px] h-[60px] ";
  }, [type]);
  return (
    <div
      className={`max-w-[350px] min-w-[300px]  p-4 rounded-[6px] ${cardStyle}`}>
      <div className="bg-primary_yellow rounded-[8px] mt-2">
        <Image
          width={1024}
          height={1024}
          src={data.image}
          alt={data.image}
          loading="lazy"
          className={imageStyle}
        />
      </div>
      <div className="mb-1">
        <h2 className="font-semibold text-[24px] text-primary">{data.title}</h2>
        <p className="p2  text-[14px] font-normal text-primary">
          {data.content}
        </p>
      </div>
    </div>
  );
};

export default Card;
