import Navbar from "./Navbar";
import styled from "styled-components";

const StyledShowcase = styled.div`
  background-color: rgba(16, 16, 15,.7);
  height: 100vh;
  width: 100%;


.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 10rem;
  margin-top: 12rem;
  color: var(--white);
  text-transform: uppercase;

  h3 {
    font-size: 2rem;
  }

  h1 {
    font-size: 5rem;
  }
}

@media (max-width: 400px) {
  .welcome h3 {
    font-size: .9rem;
  }
  .welcome h1 {
    font-size: 2.3rem;
  }
}
`;

export default function Showcase() {
  return (
    <StyledShowcase className="showcase">
      <Navbar />
      <div className="welcome">
        <h3>Welcome to</h3>
        <h1><span className="span-color">Anchor</span> Concepts</h1>
      </div>
    </StyledShowcase>
  );
}

