import styled from "styled-components";
import { PrimaryTextColor, FadedGreyColor, flexCol, flexRow, LightColor, DarkColor } from "../../CommonCss";

export const ArticleContainer = styled.div`
    ${flexRow}
    justify-content: space-between;

    /* Responsive */
    /* largest phone screen : 540px */
    @media (max-width: 540px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const ArticleImage = styled.img`
    width: 100%;
    height: 100%;

     /* Responsive */
    @media (min-width: 768px) and (max-width: 940px){
        height: 38rem;
        width: 28rem;
    }
    @media (min-width: 940px){
        height: 38rem;
        width: 28rem;
    }
`;

export const ArticleDescription = styled.div`
    ${flexCol}
`;

export const ImageBlock  = styled.div`
    width: 50%;
    margin: 0 4rem;

    /* Responsive */
    @media (max-width: 540px) {
        width: 100%;
    }

    @media (min-width: 768px) and (max-width: 940px){
        height: 38rem;
        width: 28rem;
        margin: 0 2rem;
    }
`;

export const RightBlock = styled.div`
    ${flexCol}
    width: 50%;
    margin: 0 4rem;

    @media (max-width: 540px) {
        width: 100%;
    }
    @media (min-width: 768px) and (max-width: 940px){
        height: 38rem;
        margin: 0 2rem;
    }
`;

export const Title = styled.span`
    font-size: 40px;

    /* Smallest screen */
    @media (max-width: 280px) {
        font-size: 20px;
    }
`;

export const Price = styled.span`

    /* Smallest screen */
    @media (max-width: 280px) {
        font-size: 15px;
    }
`;

export const Description = styled.span`

    /* Smallest screen */
    @media (max-width: 280px) {
        font-size: 15px;
    }
`;

export const AddToCartButton = styled.button`
    font-family: inherit;
    background: transparent;
    height: 3rem;
    background-color: ${DarkColor};
    color: ${LightColor};
    width: 65%;
    &:hover{
        cursor: pointer;
        color: ${DarkColor};
        background-color: ${LightColor};
        border: 1px solid ${PrimaryTextColor};
    }

    /* Largest screen */
    @media (max-width: 540px) {
        width: 100%;
    }

    /* Smallest screen */
    @media (max-width: 280px) {
        font-size: 15px;
        width: 100%;
    }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

export const CountDisplay = styled.span`
  margin: 0 20px;
  font-size: 20px;
  color: ${DarkColor};

  /* Smallest screen */
  @media (max-width: 280px) {
        font-size: 10px;
    }
`;

export const Actions = styled.div`
    ${flexRow}
    justify-content: space-between;
    
    /* Largest screen */
    @media (max-width: 540px) {
        flex-wrap: wrap;
        justify-content: center;
    }

    /* Smallest screen */
    @media (max-width: 280px) {
        flex-wrap: wrap;
    }
`;

export const CountButton = styled.div`
    ${flexRow}
    align-items: center;
    gap: 10px;

    /* Largest screen */
    @media (max-width: 540px) {
        width: 100%;
        justify-content: center;
    }

    /* Smallest screen */
    @media (max-width: 280px) {
        font-size: 10px;
        width: 100%;
        justify-content: space-between;
    }
`;
