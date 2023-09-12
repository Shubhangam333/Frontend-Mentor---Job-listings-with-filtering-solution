import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url("./images/bg-header-desktop.svg");
  height: 150px;
  background-color: var(--desaturated-dark-cyan);

  @media (max-width: 600px) {
    background-image: url("./images/bg-header-mobile.svg");
  }
`;

export default Wrapper;
