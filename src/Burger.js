import {useState} from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 2.45rem;
  height: 2.45rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  margin-right: 40px;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }

    div {    
      width: 2.45rem;
      height: .2rem;
      ${'' /* margin: 10px 0px; */}
      border-radius: 10px;
      transition: all .2s ease-in;    
      background-color: ${({ open }) => open ? 'var(--dark)' : 'var(--blue)'};
      transform-origin: 1px;

      &:nth-child(1) {
        transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0deg)'};
      }
      &:nth-child(2) {
        transform: ${({open}) => open ? 'translateX(100%)' : 'translate(0%)'};
        opacity: ${({open}) => open ? 0 : 1};
      }
      &:nth-child(3) {
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0deg)'};
      }
    }


`;

export default function Burger() {

  const [open, setOpen] = useState(false);
  
  return (
    <>
    <StyledBurger className='menu-btn' open={open} onClick={() => setOpen(!open)}>
      <div className='bar bar-1'></div>
      <div className='bar bar-2'></div>
      <div className='bar bar-3'></div>
    </StyledBurger>
    <RightNav open={open}/>
    </>
  );
}
