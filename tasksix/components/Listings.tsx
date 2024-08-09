"use client";
import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { Job } from "@/types/job";
import Loading from "./Loading";
import Cookie from "js-cookie";
import axios from "axios";

const Listings = () => {
  const [jobs, setJobs] = useState<Job[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = Cookie.get("hireHubAccessToken");

      if (!accessToken) {
        console.log("No Access Token");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          "https://akil-backend.onrender.com/opportunities/search",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const result = await res.json();
        setJobs(result.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (jobs === null) {
    return <div>No job listings found.</div>;
  }

  return (
    <div className="w-[60%] pl-24 py-8 font-paras">
      <div className="flex justify-between">
        <div>
          <h1 className="header">Opportunities</h1>
          <p className="text-[#7C8493]">Showing {jobs.length} results</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-[#7C8493] cursor-pointer">
            Sort by:{" "}
            <span className="text-[#25324B] font-semibold">Most relevant</span>
          </p>
          <img className="w-4 h-4 cursor-pointer" src="/dropdown.png" alt="" />
        </div>
      </div>

      <div>
        {jobs.map((job) => (
          <JobCard
            id={job.id}
            key={job.id}
            title={job.title}
            desc={job.description}
            location={job.location[0]}
            company={job.orgName}
            logo={job.logoUrl}
            isBookmarked={job.isBookmarked}
          />
        ))}
      </div>
    </div>
  );
};

export default Listings;
