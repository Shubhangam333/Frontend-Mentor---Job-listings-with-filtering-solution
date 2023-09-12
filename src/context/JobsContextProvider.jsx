import { createContext, useState } from "react";

import { data } from "../Data.js";

const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  const [filterArray, setfilterArray] = useState([]);

  const addFilter = (keyword) => {
    setfilterArray([...filterArray, keyword]);
  };
  const removeFilter = (keyword) => {
    const filter = filterArray.filter((f) => f !== keyword);
    setfilterArray(filter);
  };
  const clearFilter = () => {
    setfilterArray([]);
  };

  const initialState = {
    allJobs: data,
    isLoading: false,
    filteredArray: filterArray,
    addFilter,
    removeFilter,
    clearFilter,
  };

  return (
    <JobContext.Provider value={initialState}>{children}</JobContext.Provider>
  );
};

export { JobContextProvider, JobContext };
