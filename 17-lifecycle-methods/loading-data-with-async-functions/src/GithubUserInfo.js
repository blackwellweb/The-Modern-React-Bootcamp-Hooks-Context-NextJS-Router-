import React, { Component } from 'react';
import axios from 'axios';

class GithubUserInfo extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    async componentDidMount(){
        const url = `https://api.github.com/users/${this.props.username}`
        let response = axios.get(url);
    }

    render(){
        return(
            <div>
                <h1>Github User Info </h1>
            </div>
        )
    }
}

export default GithubUserInfo;