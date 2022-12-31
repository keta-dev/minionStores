import React from 'react'
import styled from 'styled-components'
import logo from "../assets/storelogo.svg";

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        &nbsp; <span>All rights reserved</span>
      </h5>
      <span>
        <img src={logo} alt="" className='image' />
      </span>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  img {
    width: 5rem;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
