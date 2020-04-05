import styled from "styled-components";

export const Container = styled.div`
  padding: 0 4%;
`;

export const AllForm = styled.div`
  margin-top: -6.875rem;
  background: #fff;
  box-sizing: border-box;
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 0 9px 46px 8px rgba(0, 0, 0, 0.02),
    0 24px 38px 3px rgba(0, 0, 0, 0.04), 0 11px 15px -7px rgba(0, 0, 0, 0.05);
`;

export const Welcome = styled.div`
  background: linear-gradient(90deg, #f65e38 0, #f68a39 51%, #f65e38);
  padding: 3rem 4%;
  .title-welcome {
    margin-bottom: 0.625rem;
    color: #fff;
  }
  .description-welcome {
    color: #fff;
  }
`;

export const Media = styled.div`
  margin-top: 3rem;
`;

export const MediaTitle = styled.h3`
  margin: 1.5rem 0 0.875rem;
  font-size: 1.125rem;
`;

export const MediaContent = styled.p`
  color: #555;
`;

export const ListSocial = styled.div`
  margin-top: 2rem;
  button {
    background: none;
    border: 1px solid #e6e6e6;
    color: #555;
    display: block;
    width: 100%;
    border-radius: 50px;
    font-family: "LatoVi", sans-serif;
    position: relative;
    cursor: pointer;
    outline: none;
    &:hover {
      ${SocialLogin} {
        color: #f65e39;
      }
    }
    &:last-child{
        margin-top: 1rem;
    }
  }
`;

export const SocialLogin = styled.div`
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  transition: 0.3s all;
`;

export const SocialLogo = styled.img`
  width: 16px;
  position: absolute;
  top: 50%;
  right: 1.275rem;
  transform: translateY(-50%);
`;
