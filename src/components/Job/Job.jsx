import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  return (
    <div className="rounded-xl w-[648px] bg-base-100 shadow-xl p-[40px]">
      <figure>
        <img src={job.logo} />
      </figure>
      <div className="">
        <h2 className="text-[24px] card-title mt-5">{job.job_title}</h2>
        <p className="text-[#757575] text-[20px] mt-2">{job.company_name}</p>
        <div className="space-x-3 mt-4">
          <button className="border-2 border-[#7E90FE] px-3 py-1 rounded-md text-[#7E90FE]">
            {job.remote_or_onsite}
          </button>
          <button className="border-2 border-[#7E90FE] px-3 py-1 rounded-md text-[#7E90FE]">
            {job.job_type}
          </button>
        </div>
        <div className="flex gap-4 items-center mt-4">
          <div className="flex gap-1 items-center">
            <img src="/icons/Location.png" alt="" />
            <p className="text-[#757575]">{job.location}</p>
          </div>
          <div className="flex gap-1 items-center">
            <img src="/icons/money2.svg" alt="" />
            <p className="text-[#757575]">Salary: {job.salary}</p>
          </div>
        </div>
        <div>
          <Link to={`/job/${job.id}`}>
            <button className="bg-[#7E90FE] hover:bg-gray-500 px-4 py-2 text-white rounded-md mt-5">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
