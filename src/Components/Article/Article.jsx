import React,{useState} from 'react';
import { ArticleContainer, ArticleImage, ArticleDescription, ImageBlock, Title, Price, AddToCartButton, RightBlock, Description,
    IconButton, CountDisplay, Actions, CountButton} from './Article.style';
import masterpiece2 from '../../masterpiece1.JPG'
const Article = ({ image, title, description, price=20 }) => {
    const [count, setCount] = useState(1);

    const handleDecrease = () => {
        if (count > 0) {
        setCount(count - 1);
        }
    };

    const handleIncrease = () => {
        setCount(count + 1);
    };

  const totalPrice = count * price;
    return (
      <ArticleContainer>
        <ImageBlock>
            <ArticleImage src={masterpiece2} alt="Article" />
        </ImageBlock>
        <RightBlock>
            <ArticleDescription>
                <Title>{title ?? "test "}</Title>
                <Price>{price}</Price>
                <Description>{description ?? 'desc'}</Description>
            </ArticleDescription>
            <Actions>
                <AddToCartButton>
                    ADD TO CART
                </AddToCartButton>
                <CountButton>
                    <IconButton onClick={handleDecrease}>-</IconButton>
                    <CountDisplay>{count}</CountDisplay>
                    <IconButton onClick={handleIncrease}>+</IconButton>
                </CountButton>
            </Actions>
        </RightBlock>
      </ArticleContainer>
    );
  };
  
  export default Article;