import React, { Component } from 'react';
import PostInput from '../components/posts/PostInput';
import Posts from '../components/posts/Posts';
import Articles from '../components/articles/Articles';
import FriendsList from '../components/friends/FriendsList';
import { connect } from 'react-redux';
import { deletePost } from '../actions/deletePost';
import styled from 'styled-components';
import Weather from '../components/Weather';

export const Grid = styled.div`
`

export const Row = styled.div`
  display: flex;
`

export const Col = styled.div`
  flex: ${ (props) => props.size};
  height: 100%;
  padding: 10px;
`

export const Header = styled.h2`
  padding-top: 0;
  text-align: center;
`

class Homepage extends Component {
    state = {
        articles: [],
        weather: '',
        allPosts: false
    }

    getNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        fetch(url)
        .then(resp => resp.json())
        .then(data => this.setState({
            articles: data.articles
        }))
    }
    
    getWeather() {
        console.log("weather")
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=40.7128&lon=-74.0060&units=imperial&exclude=minutely,hourly,daily,alerts&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
        fetch(url)
        .then(resp => resp.json())
        .then(data => this.setState({
            weather: data.current
        }))
    }

    componentDidMount() {
        this.getWeather()
        this.getNews()
    }
    
    render() {
        //const user = this.props.users[this.props.match.params.id - 1]
        console.log(this.props)
        return (
            <Grid>
                <Row>
                    <Col size={1}>
                        <Posts user={this.props.user} posts={this.props.posts} delete={this.props.deletePost} allPosts={this.state.allPosts}/>
                    </Col>
                    <Col size={2}>
                        <Header>Hello, {this.props.user.name}</Header>
                        <Weather weather={this.state.weather}/>
                        <PostInput user={this.props.user} posts={this.props.posts}/>
                        <Articles articles={this.state.articles}/>
                    </Col>
                    <Col size={1}>
                        <FriendsList friends={this.props.friends}/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
export default connect(null, { deletePost })(Homepage);