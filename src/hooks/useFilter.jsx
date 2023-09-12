import { useContext } from "react";
import { JobContext } from "../context/JobsContextProvider";

export const useFilter = () => {
  const { filteredArray, addFilter, removeFilter, clearFilter } =
    useContext(JobContext);

  return {
    filteredArray,
    addFilter,
    removeFilter,
    clearFilter,
  };
};
