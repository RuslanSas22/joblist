import React from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="w-full flex justify-center mb-6">
      <div className="paggination  flex flex-col items-center justify-center rounded-lg h-10 shadow-lg  bg-white min-w-fit w-4/12">
        <div className=" divide-black flex items-center w-4/6 justify-center border-x">
          {pageNumbers.map((number) => (
            <div key={number} className="page-item mx-3 ">
              <button
                className=" focus:text-focusedPage focus:underline font-bold text-xl  h-6 text-paggination  "
                onClick={() => paginate(number)}
              >
                {number}
              </button>
              <div>Hello</div>
              <div>GoodBye</div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Pagination;
