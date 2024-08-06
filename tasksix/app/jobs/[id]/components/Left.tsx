import React from "react";
import CheckCont from "./CheckCont";

interface PropType {
  title: string;
  desc: string;
  responsibilities: string;
  ideal_candidate: string;
  when_where: string;
}

const Left = ({
  title,
  desc,
  responsibilities,
  ideal_candidate,
  when_where,
}: PropType) => {
  console.log(ideal_candidate);
  return (
    <div className="px-24 font-paras">
      <div className="mb-12">
        <h1 className="header py-4">{title}</h1>
        <p>{desc}</p>
      </div>

      <div className="mb-12">
        <h1 className="header py-4">Responsibilities</h1>
        <pre className="font-paras">{responsibilities}</pre>
      </div>

      <div className="mb-12">
        <h1 className="header py-4">Ideal Candidate We want</h1>
        <ul className="list-disc flex flex-col gap-2">{ideal_candidate}</ul>
      </div>

      <div>
        <h1 className="header py-4">When & Where</h1>
        <div className="flex gap-2 items-center">
          <LocationIcon />
          <p>{when_where}</p>
        </div>
      </div>
    </div>
  );
};

function LocationIcon() {
  return (
    <div className="border p-2 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#26A4FF"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          stroke-linejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          stroke-linejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    </div>
  );
}

export default Left;
