import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-[130px] max-w-[1320px] mx-auto">
      <h2 className="text-[48px] font-bold text-center">Featured Jobs</h2>
      <p className="text-center leading-[26px] text-[#757575]">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-6 mt-7">
        {jobs.slice(0, dataLength).map((job, idx) => (
          <Job key={idx} job={job}></Job>
        ))}
      </div>
      <div
        className={dataLength === jobs.length ? "hidden" : "text-center mt-9"}
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="bg-[#7E90FE] hover:bg-gray-500 px-5 py-3 text-white rounded-md mt-5"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
