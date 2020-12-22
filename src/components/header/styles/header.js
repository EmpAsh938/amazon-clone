import styled from "styled-components/macro";
import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.div`
  color: #fff;
  box-sizing: border-box;
`;

export const Navbar = styled.div`
  background: #052126;
  display: flex;
  height: 70px;
  width: 100vw;
  justify-content: space-between;
  position: relative;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  color: #fff;
`;

export const Logo = styled.img`
  width: 200px;
  margin-left: -25px;
  filter: brightness(1) invert(1);
`;

export const NavBox = styled.div`
  display: flex;
  column-gap: 0.2em;
  align-items: center;
  margin-left: -25px;
  z-index: 1;

  @media (max-width: 1000px) {
    ${({ location }) =>
      location &&
      `
        position: absolute;
        top: 180%;
        width: 100vw;
        height: 60px;
        margin: auto;
        background: #052126;
        column-gap: .5em;
        padding-left: 10px;

        ${Icon} {
            margin-top: 0;
        }
        
        ${Wrapper} {
            flex-direction: row;
            column-gap: .5em;
        }
        `}
  }

  @media (max-width: 500px) {
    ${({ location }) =>
      location &&
      `
      display: none;
      `
  }
}
`;

export const Icon = styled.div`
  font-size: 1.4rem;
  margin-top: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    ${({ dontShowOnSmallScreen }) => dontShowOnSmallScreen && `display: none;`}
  }
`;

export const SmallText = styled.p`
  font-weight: 300;
`;

export const BigText = styled.p`
  font-weight: bold;
`;

export const NavCenter = styled.div`
    height: 100%:
    margin-top: 15px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    flex: 1;

    @media (max-width: 1000px) {
        position: absolute;
        top: 100%;
        width: 100vw;
        margin: auto;
        height: 60px;
        background: #052126;
    }
    
`;

export const Form = styled.form`
  width: 100%;
  background: #fff;
  border-radius: 5px;
  height: 40px;
  display: flex;

  @media (max-width: 1000px) {
    width: 90%;
    margin: auto;
  }
  @media (max-width: 500px) {
    width: 98%;
  }
`;

export const Select = styled.select`
  color: rgba(0, 0, 0, 0.9);
`;

export const Option = styled.option`
  width: 3px;
`;

export const Input = styled.input`
  width: 90%;
  background: transparent;
  border: none;
  padding: 0 5px;
  font-size: 1rem;

`;

export const SearchButton = styled.button`
  width: 50px;
  border: none;
  background: #e9f582;
  padding: 0 8px;
  cursor: pointer;
  border-radius: 0 5px 5px 0;

  ${Icon} {
    margin-top: 5px;
    margin-left: -2px;
  }
`;

export const SigninBar = styled.div`
  display: none;
  background: white;
  height: 100px;
  width: 200px;
  position: absolute;
  top: 100%;
  left: -40%;
  border-radius: 4px;
  color: black;
  text-align: center;
  padding: 10px 20px;
  z-index: 100;

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
    top: -8.5%;
    left: 82%;
  }
  ${NavBox} {
    margin: 0;
    margin-top: 10px;
    justify-content: center;
    font-size: 0.7rem;
    letter-spacing: 0.5px;
  }
`;

export const NavRight = styled.div`
  display: flex;
  margin: 0 15px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  column-gap: 0.4em;

  ${NavBox} {
    margin-left: 0;
    column-gap: 0;

    @media (max-width: 1050px) {
      &:first-child {
        display: none;
      }
    }
    
    &:last-child {
      position: relative;

      ${Icon}:first-child > svg {
        font-size: 2.3rem;
      }
    }
  }

  ${Icon} {
    font-size: 1.1rem;

    &:last-of-type {
      font-size: 1.3rem;
    }
  }

  ${Wrapper} {
    font-size: 0.9rem;

    @media (max-width: 500px) {
      font-size: 0.8rem;
    }

    ${NavBox} {
      align-items: center;
      column-gap: 0;

      &:hover > ${SigninBar}{
        display: block;
      }

      & > span {
        margin-top: 4px;
        font-size: 1.1rem;
      }
    }
  }
`;

export const Items = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  position: absolute;
  top: 17%;
  left: 17%;
  background: #052126;
  height: 19px;
  width: 13px;
  text-align: center;
`;



export const Button = styled.button`
  border: none;
  padding: 4px 20px;
  border-radius: 4px;
  margin-top: 5px;
  letter-spacing: 1px;
  cursor: pointer;
  background: linear-gradient(
    rgba(233, 221, 145, 1),
    rgba(226, 208, 82, 0.9345938204383316),
    rgba(233, 227, 69, 1)
  );
  transition: background .4s ease;

  &:hover {
    background: linear-gradient(
      rgba(233, 227, 69, 1),
      rgba(233, 227, 69, 1)
    );
  }
`;
export const Sign = styled.p`
  margin-right: 2px;
`;
export const SignUp = styled.p`
  margin-left: 2px;
  color: #f29811;
  cursor: pointer;
`;

