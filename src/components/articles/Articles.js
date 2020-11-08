import React from 'react';

const Articles = (props) => {
    return(
      <ul className="articleslist">
        <h2>Current News</h2>
        <hr></hr>
          {props.articles.map((article,index) => <li key={index}><hr></hr><a href={article.url}>{article.title}</a></li>)}
      </ul>
    )
}
export default Articles;