import React, { useContext, useState } from "react";
import Wrapper from "../assets/wrapper/JobListing";
import JobListingComponent from "./JobListingComponent";
import { useJobs } from "../hooks/useJobs";

const JobListing = () => {
  const { isLoading, allJobs } = useJobs();

  return (
    <Wrapper>
      {allJobs.map((job) => (
        <JobListingComponent key={job.id} job={job} />
      ))}
    </Wrapper>
  );
};

export default JobListing;
