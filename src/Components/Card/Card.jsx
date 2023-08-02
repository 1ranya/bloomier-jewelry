import React, {useState} from 'react';
import { CardActions, CardButton, CardContainer, CardImage, CardDescription,
Title, Price } from './Card.style';
import masterpiece1 from '../../masterpiece1.JPG'
import masterpiece2 from '../../masterpiece2.JPG'
import Article from '../Article/Article';
import { useNavigate } from 'react-router-dom';


const Card = ({ image, description, price, id=1 }) => {
  const [isOverView, setIsOverView] = useState(false)
  const navigate = useNavigate();
  const showArticleDetails = (id) => {
    setIsOverView(true)
    navigate(`/articles/1`)
  }
    return (
      <div>
      <CardContainer replaceImage={masterpiece1} onClick={showArticleDetails}>
        <CardImage src={masterpiece2} alt="Article" />
        <CardDescription>
            <Title>{description ?? "test "}</Title>
            <Price>{price ?? "test "}</Price>
        </CardDescription>
      </CardContainer>
        {isOverView && (<Article/>)}
      </div>
    );
  };
  
  export default Card;