import React from "react";
import Wrapper from "../assets/wrapper/JobListingComponent";
import JobTags from "./JobTags";

const JobListingComponent = ({ job }) => {
  return (
    <Wrapper className={job.id < 3 ? "latest" : ""}>
      <div className="container">
        <img src={job.logo} className="image" />
        <div className="content">
          <p className="title">
            {job.company}{" "}
            {job.id < 4 ? (
              <>
                <span className="new">new!</span>
              </>
            ) : (
              <></>
            )}
            {job.id < 3 ? (
              <>
                <span className="featured">featured</span>
              </>
            ) : (
              <></>
            )}
          </p>
          <h3>{job.position}</h3>
          <div className="info">
            <p className="day">{job.postedAt}</p>
            <p className="time">{job.contract}</p>
            <p className="location">{job.location}</p>
          </div>
        </div>
      </div>
      <JobTags tags={job.languages} tools={job.tools} key={job.id} />
    </Wrapper>
  );
};

export default JobListingComponent;
