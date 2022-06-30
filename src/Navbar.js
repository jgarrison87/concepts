import Burger from './Burger';
import styled from 'styled-components';

export default function Navbar() { 

  const Navbar = styled.div`
      color: var(--white);
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 4rem;
      padding: 50px;
      width: 100%;

    .logo {
      margin-left: 40px;
    }

    @media (max-width: 400px) {
      .navbar {
        height: 4rem;
        padding: 0px;
        margin: 0px;
      }
      .logo {
        display: none;
      }
     }
  `;

  return(
    <Navbar className="navbar">
      <div className='logo'>
        <h1>AC</h1>
      </div>
      <Burger />      
    </Navbar>
  );
}