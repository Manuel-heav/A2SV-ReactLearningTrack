"use client";
import { BookMarkFilledIcon, BookMarkIcon } from "@/lib/icons";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import Cookie from "js-cookie";

interface JobType {
  id?: string;
  title?: string;
  desc?: string;
  location?: string;
  company?: string;
  logo?: string;
  isBookmarked?: boolean;
}

const JobCard = ({
  title,
  desc,
  location,
  company,
  logo,
  id,
  isBookmarked: initialBookmarked,
}: JobType) => {
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);

  const handleBookmark = async () => {
    const accessToken = Cookie.get("hireHubAccessToken");

    try {
      const response = await axios.post(
        `https://akil-backend.onrender.com/bookmarks/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
      setIsBookmarked(true);
    } catch (error) {
      console.error("Error bookmarking the post:", error);
    }
  };

  const unhandleBookmark = async () => {
    const accessToken = Cookie.get("hireHubAccessToken");
    try {
      const response = await axios.delete(
        `https://akil-backend.onrender.com/bookmarks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
      setIsBookmarked(false);
    } catch (error) {
      console.error("Error unbookmarking the post:", error);
    }
  };

  return (
    <div className="flex items-start gap-4 mt-5 border p-5 rounded-[30px] justify-start">
      <img className="h-12 w-12" src={logo || "/job1.png"} alt="" />

      <div>
        <div className="flex justify-between items-start">
          <Link href={`/jobs/${id}`}>
            <h1 className="font-bold text-[#25324B] my-2">{title}</h1>
            <p className="text-[#7C8493] my-2">
              {company}, <span>{location}</span>
            </p>
          </Link>

          {isBookmarked ? (
            <button
              type="button"
              className="cursor-pointer"
              onClick={unhandleBookmark}
              data-id="unbookmark"
            >
              <BookMarkFilledIcon />
            </button>
          ) : (
            <button
              data-id="bookmark"
              data-testid="bookmark-button"
              type="button"
              className="cursor-pointer"
              onClick={handleBookmark}
            >
              <BookMarkIcon />
            </button>
          )}
        </div>
        <Link href={`/jobs/${id}`}>
          <p className="text-[#25324B]">{desc}</p>
          <div className="flex gap-2 mt-5 text-sm">
            <p className="bg-[#56CDAD] bg-opacity-10 text-[#56CDAD] py-1 px-2 rounded-full font-semibold">
              In Person
            </p>
            <p className="border border-[#FFB836] bg-opacity-15 text-[#FFB836] py-1 px-2 rounded-full">
              Education
            </p>
            <p className="border border-[#4640DE] bg-opacity-15 text-[#4640DE] py-1 px-5 rounded-full">
              IT
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
