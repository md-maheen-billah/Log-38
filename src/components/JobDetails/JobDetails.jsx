import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast.success("You have applied successfully");
  };

  return (
    <div>
      <h2 className="text-center text-[32px] font-medium pt-[120px] pb-[140px] bg-[#f9f8ff] mb-[130px]">
        Job Details
      </h2>
      <div className="flex gap-6 max-w-[1320px] mx-auto">
        <div className="space-y-6 w-7/12">
          <p className="text-[#757575] leading-8">
            <span className="font-bold text-black">Job Description: </span>
            {job.job_description}
          </p>
          <p className="text-[#757575] leading-8">
            <span className="font-bold text-black">Job Responsibility: </span>
            {job.job_responsibility}
          </p>
          <div className="space-y-2">
            <p className="font-bold text-black leading-8">
              Educational Requirements:
            </p>
            <p className="text-[#757575] leading-8">
              {job.educational_requirements}
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-black leading-8">Experiences:</p>
            <p className="text-[#757575] leading-8">{job.experiences}</p>
          </div>
        </div>
        <div className="w-5/12">
          <div className="bg-[#f4f1ff] p-[30px] rounded-lg ">
            <h2 className="text-xl font-bold">Job Details</h2>
            <hr className="my-6 border-1" />
            <div className="flex gap-2 items-center mb-4">
              <img src="/icons/money.png" alt="" />
              <p className="text-[#474747] text-xl">
                <span className="font-bold">Salary: </span>
                {job.salary} (Per Month)
              </p>
            </div>
            <div className="flex gap-2 items-center mb-8">
              <img src="/icons/calendar.png" alt="" />
              <p className="text-[#474747] text-xl">
                <span className="font-bold">Job Title: </span> {job.job_title}
              </p>
            </div>
            <h2 className="text-xl font-bold">Contact Information</h2>
            <hr className="my-6 border-1" />
            <div className="flex gap-2 items-center mb-4">
              <img src="/icons/phone.png" alt="" />
              <p className="text-[#474747] text-xl">
                <span className="font-bold">Phone: </span>
                {job.contact_information.phone}
              </p>
            </div>
            <div className="flex gap-2 items-center mb-4">
              <img src="/icons/email.png" alt="" />
              <p className="text-[#474747] text-xl">
                <span className="font-bold">Email: </span>
                {job.contact_information.email}
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <img src="/icons/location2.png" alt="" />
              <p className="text-[#474747] text-xl">
                <span className="font-bold">Address: </span>{" "}
                {job.contact_information.address}
              </p>
            </div>
          </div>
          <button
            onClick={handleApplyJob}
            className="bg-[#7E90FE] text-xl font-bold hover:bg-gray-500  text-white rounded-md mt-6 w-full py-4"
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
