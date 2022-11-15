import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import JobList from "./components/JobList";
import { token } from "./common/token.js";
import JobDetails from "./components/JobDetails";

function App() {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const jobsApi = async () => {
    try {
      const data = await axios.get(
        `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=${token}`
      );

      setJobs(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    jobsApi();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = jobs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="wrapper w-full max-w-2xl  text-center">
      <div className="inline-block my-0 mx-auto flex-col items-center justify-center gap-2 box-border w-3/4 sm:w-11/12">
        <Routes>
          <Route
            path="/"
            element={
              <JobList
                jobs={currentPosts}
                postsPerPage={postsPerPage}
                totalPosts={jobs.length}
                paginate={paginate}
              />
            }
          />
          <Route path=":jobId" element={<JobDetails jobs={jobs} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
