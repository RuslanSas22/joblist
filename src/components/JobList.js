import React from "react";
import { Link } from "react-router-dom";
import path from "../images/CombinedShape.png";

import save from "../images/Rectangle31.png";
import star from "../images/Star Copy 5.png";
import Pagination from "./Pagination";

function JobList({ jobs, postsPerPage, totalPosts, paginate }) {
  const listOfJobs = jobs.map((job) => {
    console.log(job.id);
    return (
      <div
        key={job.id}
        className="box box-border se:justify-around text-start py-6 px-2 bg-white border-solid border rounded-lg shadow-md w-full h-28 mt-2 flex flex-row items-center  gap-2 sm:flex-col-reverse sm:h-36 sm:px-1 "
      >
        <div className="box-content flex w-4/5 items-center p-0 gap-6 h-28 se:items-start">
          <img
            className="place  h-20 w-20 rounded-full md:w-16  md:h-14  "
            src={job.pictures[0]}
            alt="place"
          />
          <div className="details flex flex-col items-start p-0 gap-2 opacity-80 w-3/4">
            <Link to={`/${job.id}`}>
              <h2 className="title not-italic font-bold text-base tracking-tight text-title  m-0  md:font-semibold  se:text-xs  ">
                {job.title}
              </h2>
            </Link>
            <h6 className="subtitle font-normal w-5/6 text-sm text-subtitle se:text-xxs">
              {job.name}
            </h6>
            <div className="location flex">
              <img
                src={path}
                alt="path"
                className="h-5 w-3.5 mr-2  md:h-3 md:w-2"
              />
              <div className="location-name text-sm font-normal text-location se:text-xxs">
                {job.address}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center se:w-full  se:justify-between ">
          <div className="rates flex w-24 justify-center se:w-16 se:ml-28 ">
            <img
              className="w-4 h-4 sm:w-2 sm:h-2 md:w-3 md:h-3"
              src={star}
              alt="rates"
            />
            <img
              className="w-4 h-4 sm:w-2 sm:h-2 md:w-3 md:h-3"
              src={star}
              alt="rates"
            />
            <img
              className="w-4 h-4 sm:w-2 sm:h-2 md:w-3 md:h-3"
              src={star}
              alt="rates"
            />
            <img
              className="w-4 h-4 sm:w-2 sm:h-2 md:w-3 md:h-3"
              src={star}
              alt="rates"
            />
            <img
              className="w-4 h-4 sm:w-2 sm:h-2 md:w-3 md:h-3"
              src={star}
              alt="rates"
            />
          </div>
          <div className="info flex flex-col items-end justify-between h-20 w-52 sm:flex-row sm:text-xs sm:w-32 sm:h-4">
            <img className="h-4 w-4 sm:h-0 sm:w-0" src={save} alt="save" />
            <span className="text-subtitle text-sm">
              Posted {job.createdAt.slice(0, 10)}
            </span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="box-container flex flex-col items-start p-0 gap-2 ">
      <div className="mb-6">{listOfJobs}</div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
      />
    </div>
  );
}

export default JobList;
