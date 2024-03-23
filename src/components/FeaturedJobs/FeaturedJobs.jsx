import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-[130px]">
      <h2 className="text-[48px] font-bold text-center">Featured Jobs</h2>
      <p className="text-center leading-[26px] text-[#757575]">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-6 mt-7">
        {jobs.map((job, idx) => (
          <Job key={idx} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
