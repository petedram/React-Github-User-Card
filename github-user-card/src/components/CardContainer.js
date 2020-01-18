import React, { Component } from 'react';

import { fetchUsers, fetchFollowers } from '../services/GithubUsers';

class CardContainer extends Component {
    state = {
        login:  '',
        public_repos: '',
        followers: []
    };

    componentDidMount = () => {
        fetchUsers().then(json => {
            console.log('from container', json.data);
            this.setState({ 
                login:json.data.login,
                public_repos: json.data.public_repos
            });
        });

        fetchFollowers().then(json => {
            console.log('from container followers', json.data);
            this.setState({
                followers: json.data
            })
            console.log('state followers', this.state.followers)

        })
    };


    render(){
        return (
            <div>
                <h1>User: {this.state.login}</h1>
                <h1>Public Repos: {this.state.public_repos}</h1>
                
                {this.state.followers.map(item => (
                    <h1>{item.login}</h1> 
                    
                ))}

                {this.state.followers.map(item => (
                    <img src={item.avatar_url} />
                ))}

            </div>
        );
    }

}

export default CardContainer;
