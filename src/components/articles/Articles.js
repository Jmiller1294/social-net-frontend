import React from 'react';
import Article from './Article'

const Articles = (props) => {
    return(
      <div className="news-container">
        <ul className="articles-list">
          {console.log(props)}
          {props.articles.map((article, index) => <li><Article key={index} article={article} /></li>)}
        </ul>
      </div>
    )
}
export default Articles;