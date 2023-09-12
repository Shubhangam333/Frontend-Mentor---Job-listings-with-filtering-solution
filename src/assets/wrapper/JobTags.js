import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  button {
    padding: 9px;
    color: var(--desaturated-dark-cyan);
    font-weight: 500;
    font-size: 1.2rem;
    cursor: pointer;
  }
  button:hover {
    background-color: var(--desaturated-dark-cyan);
    color: var(--light-grayish-cyan);
    border-radius: 5px;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 10px;

    button {
      margin-left: -10px;
    }
  }
`;

export default Wrapper;
