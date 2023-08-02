import styled from "styled-components";
import { PrimaryFont, LogoColor, LightColor, flexCol, PrimaryTextColor } from "../../CommonCss";


export const AuthContainer = styled.div`
  ${flexCol}
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin: 10px;

  border: 1px solid ${PrimaryTextColor};
  ${PrimaryFont}
`;

export const CreateAccountButton = styled.button`
  padding: 10px 20px;
  background-color: ${LogoColor};
  color: ${LightColor};
  border: none;
  cursor: pointer;
  ${PrimaryFont}
  margin: 1rem 0;
`;

export const Title = styled.h1`
    font-weight: normal;
`;