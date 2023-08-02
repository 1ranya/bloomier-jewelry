import React,{useState} from 'react';
import { HeaderContainer, Logo, CenterMenu, ShopLink, StoryLink, RightMenu, Profile} from './Header.style';
import logo from '../../miniLogo.png'
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate()

    const handleProfileClick = () => {
        console.log('clicked')
        navigate('/authentication')
    }
    const backToHome = () => {
        console.log('home')
        navigate('/')
    }

    return (
      <HeaderContainer>
        <Logo 
            src={logo} alt='bloomier jewelry logo'
            onClick={backToHome}
        ></Logo>
        <CenterMenu>
            <Link 
                style={{ textDecoration: "none"}}
                to={'/Shop'}
            >shop</Link>
            <StoryLink>the story</StoryLink>
        </CenterMenu>
        <RightMenu>
            <Profile onClick={handleProfileClick}/>
        </RightMenu>
      </HeaderContainer>
    );
  };
  
  export default Header;