import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: var(--desaturated-dark-cyan);
  gap: 5px;

  .filter-btn {
    display: flex;
  }

  button {
    background-color: var(--desaturated-dark-cyan);
    color: white;
    font-size: 1.4rem;
    cursor: pointer;
    padding: 5px 10px;
  }
  @media (max-width: 600px) {
    button {
      padding: 5px;
    }
  }
`;

export default Wrapper;
