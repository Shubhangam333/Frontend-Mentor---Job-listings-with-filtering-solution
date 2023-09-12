import styled from "styled-components";

const Wrapper = styled.div`
  margin: -25px 5rem 0px 5rem;
  background-color: #fff;
  border-radius: 5px;
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;

  button.clear {
    font-size: 1.1rem;
    color: var(--dark-grayish-cyan);
    text-transform: capitalize;
    cursor: pointer;
  }
  button.clear:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    margin: -25px 3rem 0px 3rem;
    padding: 1.5rem 1.5rem;
  }
`;

export default Wrapper;
