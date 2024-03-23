import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  return (
    <div className="rounded-xl  bg-base-100 shadow-xl p-[40px] flex items-center justify-between">
      <div className="flex items-center gap-8">
        <figure className="bg-[#f4f4f4] px-[47px] py-[94px] rounded-md">
          <img src={job.logo} />
        </figure>
        <div className="">
          <h2 className="text-[24px] card-title">{job.job_title}</h2>
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
        </div>
      </div>
      <div>
        <Link to={`/job/${job.id}`}>
          <button className="bg-[#7E90FE] text-lg font-bold hover:bg-gray-500 px-5 py-3 text-white rounded-md">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedJob;
