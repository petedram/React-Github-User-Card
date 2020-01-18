import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { fetchUsers } from '../services/GithubUsers';

class CardContainer extends Component {
    state = {
        users: []
    };

    componentDidMount = () => {
        fetchUsers().then(json => {
            console;
            this.setState({ users: json.features });
        });
    };


    render(){
        return (
            <div>
                <h1>{this.state.users}</h1>
            </div>
        );
    }

}