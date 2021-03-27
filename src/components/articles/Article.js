import React from 'react';

const Article = (props) => {
  return (
    <div className='article-card'>
      <p>{props.article.title}</p>
      <a href={props.article.url} target="_blank" rel="noreferrer"><img className='article-img' src={props.article.urlToImage} alt='article'></img></a>
    </div>
  )
}
export default Article;