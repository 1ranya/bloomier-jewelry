import styled from "styled-components";
import { flexRow } from "../../CommonCss";
import { BsPerson } from "react-icons/bs";

export const HeaderContainer = styled.div`
    ${flexRow}
    justify-content: space-between;
    align-items: center;
    margin: 1rem 1rem;
`
export const Logo = styled.img`
    width: 40px;
    height: 40px;

    &:hover{
        cursor: pointer;
    }
`
export const CenterMenu = styled.div`
    ${flexRow}
    gap: 4rem
`
export const RightMenu = styled.div``
export const ShopLink = styled.div``
export const StoryLink = styled.div``
export const Profile = styled(BsPerson)`
    width: 20px;
    height: 20px;

    &:hover {
        cursor: pointer
    }
`