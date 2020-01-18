import React, { Component } from 'react';

import { fetchUsers } from '../services/GithubUsers';

class CardContainer extends Component {
    state = {
        login:  '',
        public_repos: ''
    };

    componentDidMount = () => {
        fetchUsers().then(json => {
            console.log('from container', json.data);
            this.setState({ 
                login:json.data.login,
                public_repos: json.data.public_repos
            });
        });
    };


    render(){
        return (
            <div>
                <h1>User: {this.state.login}</h1>
                <h1>Public Repos: {this.state.public_repos}</h1>

            </div>
        );
    }

}

export default CardContainer;
