import React, { Component } from 'react'
import Articles from '../components/Articles'

class NewsContainer extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        this.fetchNews()
    }

    fetchNews() {
        fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=UALpeYtc7riGUG5XKXU7kr8fYCeyodyZ') 
        .then(resp => resp.json())
        .then(articles => this.setState({
            articles: articles.results.slice(0,20).map(article => ({ title: article.title, url: article.url }))
        })) 
    }
    

    render() { 
        return (
            <div className='articles-container'>
                <Articles articles={this.state.articles}/>
            </div>
        )
    }
}
export default NewsContainer;