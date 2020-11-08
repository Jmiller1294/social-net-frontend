import React from 'react'

const Articles = (props) => {
    return(
      <ul>
        <h2>Current News</h2>
          {props.articles.map((article,index) => <li key={index}><a href={article.url}>{article.title}</a></li>)}
      </ul>
    )
}
export default Articles;