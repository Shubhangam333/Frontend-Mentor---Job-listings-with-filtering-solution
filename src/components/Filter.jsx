import React from "react";
import Wrapper from "../assets/wrapper/Filter";
import FilterTags from "./FilterTags";
import { useFilter } from "../hooks/useFilter";

const Filter = () => {
  const { filteredArray, clearFilter } = useFilter();
  return (
    <>
      {" "}
      {filteredArray.length > 0 && (
        <Wrapper>
          <FilterTags />
          <button className="clear" onClick={() => clearFilter()}>
            clear
          </button>
        </Wrapper>
      )}
    </>
  );
};

export default Filter;
