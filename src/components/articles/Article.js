import React from 'react';

const Article = (props) => {
  return (
    <div className='article-card'>
      <p>{props.article.title}</p>
      <img className='article-img' src={props.article.urlToImage} alt='article'></img>
      
    </div>
  )
}
export default Article;