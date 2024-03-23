import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onSiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onSiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h2 className="text-center text-[32px] font-medium pt-[120px] pb-[140px] bg-[#f9f8ff] mb-[130px]">
        Applied Jobs
      </h2>

      <div className="max-w-[1320px] mx-auto flex flex-col items-end mb-6">
        <details className="dropdown">
          <summary className="m-1 btn text-xl font-semibold">
            Filter By ⌄
          </summary>
          <ul className="p-2 shadow menu dropdown-content text-base z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="space-y-6 max-w-[1320px] mx-auto">
        {displayJobs.map((job, idx) => (
          <AppliedJob key={idx} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
