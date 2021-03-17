import React from 'react';

const Articles = (props) => {
    return(
      <div className="news-container">
        <ul className="articles-list">
          <h2>Current News</h2>
          <hr></hr>
            {props.articles.map((article,index) => <li key={index}><hr></hr><a href={article.url}>{article.title}</a></li>)}
        </ul>
      </div>
    )
}
export default Articles;