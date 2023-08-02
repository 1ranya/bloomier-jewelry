// src/components/Card.js
import styled from 'styled-components';
import { flexCol, flexRow } from '../../CommonCss';

export const CardContainer = styled.div`
    ${flexCol}
    position: relative;
    justify-content: space-between;
    align-items: center;
    flex-basis: calc(30% - 16px); /* Set the initial size for each card -> 3 cards by row*/
    
    margin: 16px;
    width: 25rem;
    height: 40rem;

    &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 94%;
    background-image: ${(props) => `url(${props.replaceImage})`};
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 5s ease;
    cursor: pointer;
    }
    &:hover {
        &:before {
        opacity: 1;
        }
    }
    /* Responsive */
    @media (min-width: 817px) and (max-width: 912px) {
        flex-basis: calc(45%); 
        flex-wrap: nowrap
    }
    @media (max-width: 815px) {
        flex-basis: calc(100%);
    }
    @media (max-width: 540px) {
        margin: 1rem;
        width: auto;
        height: auto;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 16px;
`;

export const CardDescription = styled.div`
    ${flexRow}
    justify-content: space-between;

    text-align: center;
    width: 100%;

    color: #000
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CardButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Title = styled.span``; 
export const Price = styled.span``; 