import React from 'react';
import Article from './Article'

const Articles = (props) => {
    return(
      <div className="news-container">
        <h1 className="articles-title">News Feed</h1>
        <ul className="articles-list">
          {console.log(props)}
          {props.articles.map((article, index) => <li key={article.title}><Article article={article} /></li>)}
        </ul>
      </div>
    )
}
export default Articles;