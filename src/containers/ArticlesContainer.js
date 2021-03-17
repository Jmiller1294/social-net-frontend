import React, { Component } from 'react';
import Articles from '../components/articles/Articles'

class ArticlesContainer extends Component {

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
            articles: articles.results.slice(0,10).map(article => ({ title: article.title, url: article.url }))
        })) 
    }
    

    render() { 
        return (
            <>
                <Articles articles={this.state.articles}/>
            </>
        )
    }
}
export default ArticlesContainer;