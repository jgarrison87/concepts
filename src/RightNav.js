import styled from "styled-components";

const ML = styled.div`  
  position: fixed;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(200%)'};
  padding-top: 12rem;
  top: 0;
  right: 0;
  background-color: var(--blue);
  width: 30%;
  height: 100vh;
  transition: all .4s ease-in-out;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      width: 300px;
      text-align: center;
      padding: 10px;
      margin-bottom: 40px;
      font-size: 2rem;
      transition: all .3s ease;
      
      a {
        color: var(--white);
        width: 100%;

      &:hover {
        color: var(--dark);
      }
    }
 
    &:hover {
      border-right: 3px solid var(--dark);
      border-left: 3px solid var(--dark);
    }
  }
}

@media (max-width: 400px) {
      width: 100%;
      transform: ${({open}) => open ? 'translateY(0)' : 'translateY(200%)'};
    }
  
`;

export default function RightNav({ open }) {
  return (
    <ML className='menu-list' open={open}>
      <ul>
        <li><a href="https://jgarrison87.github.io/anchorTester/">Portfolio</a></li>
        <li><a href="https://jgarrison87.github.io/anchorTester/">About</a></li>
        <li><a href="https://jgarrison87.github.io/anchorTester/">Contact</a></li>
      </ul>
    </ML>
  );
}