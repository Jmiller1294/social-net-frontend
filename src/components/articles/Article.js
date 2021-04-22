import React from 'react';
import styled from 'styled-components';

export const ArticleCard = styled.div`
  border-radius: 5px;
  background-color: rgb(245,245,245); 
  margin-top: 15px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

export const ArticleTitle = styled.p`
  margin: 10px 10px 0px 10px;
`
export const ArticleLink = styled.a`
  
`
export const ArticleImage = styled.img`
width: 100%;
height: 250px;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
`

const Article = (props) => {
  return (
    <ArticleCard>
      <ArticleTitle>{props.article.title}</ArticleTitle>
      <ArticleLink href={props.article.url} target="_blank" rel="noreferrer"><ArticleImage className='article-img' src={props.article.urlToImage} alt='article'></ArticleImage></ArticleLink>
    </ArticleCard>
  )
}
export default Article;