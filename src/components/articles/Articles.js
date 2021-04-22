import React from 'react';
import styled from 'styled-components';
import Article from './Article';

export const ArticlesContainer = styled.div`
`
export const ArticlesTitle = styled.h1`
  text-align: center;
`
export const ArticlesList = styled.div`
  list-style-type: none;
  width: 100%;
  padding: 0; 
`

const Articles = (props) => {
    return(
      <ArticlesContainer>
        <ArticlesTitle>News Feed</ArticlesTitle>
        <ArticlesList>
          {props.articles.map((article, index) => <li key={article.title}><Article article={article} /></li>)}
        </ArticlesList>
      </ArticlesContainer>
    )
}
export default Articles;