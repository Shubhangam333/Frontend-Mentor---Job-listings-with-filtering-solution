import React, { useContext, useEffect, useState } from "react";
import { JobContext } from "../context/JobsContextProvider";

export const useJobs = () => {
  const { allJobs, isLoading, filteredArray } = useContext(JobContext);

  const jobs =
    allJobs &&
    allJobs.filter((job) =>
      filteredArray.every(
        (f) => job.languages.includes(f) || job.tools.includes(f)
      )
    );

  return {
    allJobs: jobs,
    isLoading: false,
    filteredArray,
  };
};
