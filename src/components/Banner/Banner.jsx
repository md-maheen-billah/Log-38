const Banner = () => {
  return (
    <div className="bg-[#f9f8ff]">
      <div className="max-w-[1320px] mx-auto flex items-center pt-[40px]">
        <div className="w-6/12">
          <h2 className="text-[80px] font-bold leading-[100px]">One Step</h2>
          <h2 className="text-[80px] font-bold leading-[100px]">
            Closer To Your
          </h2>
          <h2 className="text-[80px] text-[#8a84fe] font-bold leading-[100px]">
            Dream Job
          </h2>
          <p className="w-3/4 mt-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="bg-[#7E90FE] hover:bg-gray-500 text-lg font-bold px-5 py-3 text-white rounded-md mt-8">
            Get Started
          </button>
        </div>
        <div>
          <img src="/images/user.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
