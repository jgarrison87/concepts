import styled from "styled-components";
import IntroTumbnail from '../img/intro-thumbnail.jpg';

const StyledIntro = styled.div`
  position: relative;
  background-color: var(--dark);
  height: 100%;
  color: var(--white);
  display: flex;
  justify-content: space-between;
  padding: 50px 150px;

  .phone-img {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    img {
      width: 320px;
      height: 650px;
      border: 10px solid #fff;
      border-radius: 50px;
    }
  }

  .intro-text {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 4rem;
      padding: 20px 0px;
    }
    p {
      width: 60%;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    padding: 50px 25px;

    .phone-img {
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      width: 250px;
      height: 500px;
      border: 10px solid #fff;
      border-radius: 50px;
    }
  }

    .intro-text {
      margin: 0px auto;
    }
  }

  @media (max-width: 400px) {
    
   display: flex;
   flex-direction: column;
   padding: 50px 25px;

  .phone-img {
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      width: 250px;
      height: 500px;
      border: 10px solid #fff;
      border-radius: 50px;
    }
  }

  .intro-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 0px;

    h1 {
      font-size: 2rem;
    }
    p {
      width: 100%;
      line-height: 1.5rem;
    }
   }
  }
`;


export default function Intro() {
  return (
    <StyledIntro className="intro-section">
      <div className="phone-img">
        <img src={IntroTumbnail}></img>
      </div>
      <div className="intro-text">
        <h1>Make better <span className="span-color">financial</span> decisions with Malaa</h1>
        <p>Managing financial matters, tracking expenses, or even investing is not easy. Malaa gives you a single place to manage your money, connect all your accounts, manage, save and invest or even apply for a loan.</p>
      </div>

      
    </StyledIntro>
  );
}