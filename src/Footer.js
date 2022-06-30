import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: var(--dark);
  height: 200px;
  display: flex;
  justify-content: space-between;
  padding: 0px 100px;

  .footer-left {
    width: 35%;
    padding: 20px 30px;
    h1 {
      text-align: center;
      font-size: 3rem;
      padding: 10px;
      color: var(--white);
    }
    .social {
      display: flex;
      justify-content: space-around;
      width: 100%;
      padding: 10px;

      a {
        color: var(--blue);
        
        &:hover {
          color: var(--white);
        }
      }

    }
  }

  .footer-right {
    width: 35%;
    padding: 20px 30px;

    .footer-links {
      display: flex;
      justify-content: space-around;
      width: 100%;
      font-size: 1.75rem;
      padding: 10px;

      a{
        color: var(--blue);

        &:hover {
          color: var(--white);
        }
      }
    }

    h3 {
      font-size: .9rem;
      text-align: center;
      padding: 20px 0px;
      color: var(--gray);
    }
  }

  @media (max-width: 760px) {
    padding: 0px;

    .footer-left {
      width: 50%;

      h1 {
        font-size: 2.6rem;
      }
    }

    .footer-right {
      width: 50%;

      .footer-links {
        font-size: 1.2rem;
        margin-top: 12px;
      }

      h3 {
        font-size: .7rem;
        padding: 20px 50px;
      }
    }

    
  }

  @media (max-width:400px) {
    flex-direction: column;
    height: 100%;
    padding: 50px 25px;

    .footer-left {
      text-align: center;
      width: 100%;
      padding: 10px;

      h1 {
        font-size: 2rem;
      }
    }

    .footer-right {
      width: 100%;

      .footer-links {
        font-size: 1rem;
      }

      h3 {
        font-size: 1.05rem;
      }
    }

  }
`;

export default function Footer() {
  return (
    <StyledFooter className="Footer">
      <div className="footer-left">
        <h1><span className="span-color">Anchor</span>Concepts</h1>
        <div className="social">
          <a href="https://www.linkedin.com/in/josiah-garrison">
            <i class="fa-brands fa-linkedin fa-2x"></i>
          </a>
          <a href="https://www.github.com/jgarrison87">
            <i class="fa-solid fa-envelope fa-2x"></i>
          </a>
          <a href="https://www.github.com/jgarrison87">
            <i class="fa-brands fa-github fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="footer-right">
        <div class="footer-links">
          <a href="https://www.github.com/jgarrison87">Portfolio</a>
          <a href="https://www.github.com/jgarrison87">About</a>
          <a href="https://www.github.com/jgarrison87">Contact</a>
        </div>
        <h3 class="footer-item">&copy; 2022 Anchor Enterprises LLC All Rights Reserved</h3>
      </div>
    </StyledFooter>
  );
}

