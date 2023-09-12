import React from "react";
import Wrapper from "../assets/wrapper/FilterTags";
import { useFilter } from "../hooks/useFilter";

const FilterTags = () => {
  const { filteredArray, removeFilter } = useFilter();
  return (
    <Wrapper>
      {filteredArray.map((filter) => (
        <>
          <div className="filter-btn">
            <h2>{filter}</h2>
            <button
              onClick={() => removeFilter(filter)}
              key={Math.random() * 100}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </>
      ))}
    </Wrapper>
  );
};

export default FilterTags;
