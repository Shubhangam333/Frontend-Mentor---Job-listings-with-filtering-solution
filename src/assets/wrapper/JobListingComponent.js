import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
  border-radius: 10px;
  box-shadow: 0 15px 15px -4px hsla(180, 29%, 50%, 0.3);
  padding-left: 12px;

  .container {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 45px 0px;
  }

  .container > .content > p {
    font-size: 1rem;
    color: var(--desaturated-dark-cyan);
    font-weight: 700;
  }
  h3 {
    font-size: 1.3rem;
    color: var(--very-dark-grayish-cyan);
    font-weight: 700;
    cursor: pointer;
  }
  h3:hover {
    color: var(--desaturated-dark-cyan);
  }
  .content .info {
    display: flex;
    justify-content: space-between;
    color: var(--dark-grayish-cyan);
    gap: 1rem;
  }
  .title {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
  .new {
    background-color: var(--desaturated-dark-cyan);
    color: white;
    padding: 5px;
    border-radius: 20px;
    text-transform: uppercase;
    font-size: 0.8rem;
  }
  .featured {
    background-color: var(--very-dark-grayish-cyan);
    color: white;
    padding: 5px;
    border-radius: 20px;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    .container {
      flex-direction: column;
      align-items: flex-start;
      gap: 0rem;
    }
    .content {
      padding: 0;
    }

    .content .info {
      gap: 0rem;
    }

    img {
      width: 4rem;
    }
  }
`;

export default Wrapper;
