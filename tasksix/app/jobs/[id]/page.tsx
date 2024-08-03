"use client";
import { Job } from "@/types/job";
import Left from "./components/Left";
import Right from "./components/Right";
import { useEffect, useState } from "react";
import Loading from "@/app/components/Loading";

interface JobPost {
  params: { id: string };
}

const JobPost = ({ params }: JobPost) => {
  const { id } = params;
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `https://akil-backend.onrender.com/opportunities/${id}`
        );
        const result = await res.json();
        setJob(result.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  console.log(job);

  if (job) {
    const {
      description,
      responsibilities,
      idealCandidate,
      whenAndWhere,
      datePosted,
      createdAt,
      endDate,
      deadline,
      location,
      startDate,
      title,
      categories,
      requiredSkills,
    } = job;

    const datePostedConverted = new Date(datePosted);
    const startDateConverted = new Date(startDate);
    const endDateConverted = new Date(endDate);
    const deadlineConverted = new Date(deadline);

    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };

    if (loading) {
      return <Loading />;
    }
    return (
      <div className="grid grid-cols-4 py-8">
        <div className="col-span-3">
          <Left
            title={title}
            desc={description}
            responsibilities={responsibilities}
            ideal_candidate={idealCandidate}
            when_where={whenAndWhere}
          />
        </div>

        <div className="col-span-1">
          <Right
            posted_on={datePostedConverted.toLocaleDateString("en-US", options)}
            deadline={deadlineConverted.toLocaleDateString("en-US", options)}
            location={location[0]}
            start_date={startDateConverted.toLocaleDateString("en-US", options)}
            end_date={endDateConverted.toLocaleDateString("en-US", options)}
            categories={categories}
            required_skills={requiredSkills}
          />
        </div>
      </div>
    );
  }
};

export default JobPost;
