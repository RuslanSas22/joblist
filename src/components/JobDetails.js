import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import path from "../images/CombinedShape.png";
import map from "../images/Map.png";
import save from "../images/Rectangle31.png";
import share from "../images/Shape icon.png";
import back from "../images/angle-left.png";

function JobDetails({ jobs }) {
  const { jobId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const job = jobs.find((jobs) => jobs.id === jobId);
  const jobDescription = job.description;
  const employment = job.employment_type.map((item) => {
    return (
      <div className="border mx-2 shadow-md w-56 h-12 flex text-employmentText text-sm font-bold items-center justify-center rounded-lg bg-employment se:mb-2">
        <p>{item}</p>
      </div>
    );
  });
  const benefits = job.benefits.map((item) => {
    return (
      <div className="border mx-2  shadow-md text-benefitsText text-sm font-bold  w-56 h-12 flex items-center justify-center rounded-lg bg-benefits  se:mb-2">
        {item}
      </div>
    );
  });
  const images = job.pictures.map((item) => {
    return (
      <img
        className="w-48 h-32 m-3 se:w-24 se:h-16 rounded-lg se:m-2"
        src={item}
        alt="attached"
      />
    );
  });
  return (
    <div className="details-group rounded-md flex  m-2 bg-white se:flex-col se:w-full">
      <div className="up-page flex flex-col  w-2/3 ml-4 se:w-full">
        <div className="job-detailes w-5/6 se:order-1">
          <div className="detail-header">
            <div className="header-header flex flex-col  m-2">
              <div className="save-share flex justify-between border-b mb-6 se:flex-col se:w-full se:border-0 se:items-start">
                <div className="font-bold text-xxl se:border-b se:w-full se:text-left">
                  Job Detailes
                </div>
                <div className="flex items-center se:mt-3">
                  <div className="flex items-center p-1 mx-6 se:mx-0">
                    <img className="w-4 h-5" src={save} alt="save" />
                    <span className="mx-3">Save to my list</span>
                  </div>
                  <div className="flex items-center p-1 ">
                    <img className="w-5 h-5" src={share} alt="share" />
                    <span className="ml-3">Share</span>
                  </div>
                </div>
              </div>
              <button className="bg-button hover:bg-button text-white  py-2 px-4 h-12 text-xs box-border w-32 rounded-lg se:hidden">
                APPLY NOW
              </button>
            </div>
            <div className="job-main-description flex flex-col mb-4">
              <div className="info-upper flex justify-between se:flex-col">
                <div className="job-aside-left w-3/5 flex flex-col items-start ml-2 se:w-full">
                  <span className="job-title text-xl font-bold text-left text-title">
                    {job.title}
                  </span>
                  <span className="text-subtitle text-sm ">
                    Posted {job.createdAt.slice(0, 10)}
                  </span>
                </div>
                <div className="salary-info flex items-start  flex-col se:items-end">
                  <span className="font-bold text-base text-title">
                    $ {job.salary}
                  </span>
                  <span>Brutto, per year</span>
                </div>
              </div>
              <p className="job-description whitespace-pre-wrap text-title text-lg text-start ml-2 font-semibold ">
                {jobDescription}
              </p>
              <div className="flex se:justify-center">
                <button className="bg-button hover:bg-button  ml-2  text-white  py-2 px-4 h-12 text-xs box-border w-32 rounded-lg se:mb-12">
                  APPLY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" se:flex se:flex-col-reverse se:w-5/6 se:order-2">
          <div className="additional-info w-full flex flex-col items-start se:mb-10">
            <h1 className="font-bold text-xxl border-b text-title w-4/6 text-left se:w-full">
              Additional Info
            </h1>
            <div className="employment-type mt-4 flex flex-col items-start">
              <h4 className="font-normal text-lg text-title se:mb-2">
                Employment Type
              </h4>
              <div className="flex w-fit se:flex-col">{employment}</div>
            </div>
            <div className="Benefits employment-type mt-4 flex flex-col items-start">
              <h4 className="font-normal text-lg text-title se:mb-2">
                Benefits
              </h4>
              <div className="flex w-fit se:flex-col ">{benefits}</div>
            </div>
          </div>
          <div className="attached-images flex flex-col items-start w-full mt-7 se:mb-10">
            <h2 className="font-bold text-xxl border-b text-title w-4/6 text-left se:w-full">
              Attached Images
            </h2>
            <div className="flex se:justify-center">{images}</div>
          </div>
        </div>
        <Link to="/">
          <div className="se:flex se:justify-end">
            <button className=" flex flex-row-reverse justify-center items-center shadow-md border-2  hover:bg-employment font-semibold text-xs se:text-xxs se:w-28 se:h-7 text-title w-48 h-12  my-8 se:mt-2 se:mb-4 se:mx-6 bg-background   px-4  rounded-lg se:order-0">
              <span>RETURN TO JOB</span>
              <img className="h-5 se:h-3 " src={back} alt="back"></img>
            </button>
          </div>
        </Link>
      </div>
      <div className="down-page  w-1/3 se:w-full">
        <div className="contacts-wrapper box-conte w-full flex flex-col items-start  bg-button rounded-lg h-64 text-white ">
          <span className="font-bold text-xl pb-1 ml-8 se:text-lg">
            {job.name}
          </span>
          <div className="location flex ml-8 ">
            <img
              className=" h-4 w-3 se:h-3 se:w-2 mr-1"
              src={path}
              alt="path"
            />
            <div className="location-name  text-base se:text-sm font-normal text-contactsAddress">
              {job.address}
            </div>
          </div>
          <div className="phone ml-8 font-normal text-base se:text-sm text-contactsAddress">
            {job.phone}
          </div>
          <div className="email ml-8 font-normal text-base se:text-sm text-contactsAddress mb-3">
            {job.email}
          </div>
          <img className="rounded-lg w-full se:h-3/5" src={map} alt="map" />
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
