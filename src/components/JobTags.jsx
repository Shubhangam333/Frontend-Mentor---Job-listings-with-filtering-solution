import React from "react";
import Wrapper from "../assets/wrapper/JobTags";
import { useFilter } from "../hooks/useFilter";

const JobTags = ({ tags, tools }) => {
  const { filteredArray, addFilter } = useFilter();

  const no = () => {};
  return (
    <Wrapper>
      {tags.map((tag) => {
        const isSelected = filteredArray.includes(tag);
        const onClick = isSelected ? no() : () => addFilter(tag);
        return (
          <button key={Math.random() * 100} onClick={onClick}>
            {tag}
          </button>
        );
      })}
      {tools &&
        tools.map((tool) => {
          const isSelected = filteredArray.includes(tool);
          const onClick = isSelected ? no() : () => addFilter(tool);
          return (
            <button key={Math.random() * 100} onClick={onClick}>
              {tool}
            </button>
          );
        })}
    </Wrapper>
  );
};

export default JobTags;
