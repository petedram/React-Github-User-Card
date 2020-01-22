import React, { Component } from 'react';
import { fetchUsers, fetchFollowers } from '../services/GithubUsers';
import { Header, Card, Image, Icon } from "semantic-ui-react";

class CardContainer extends Component {
    state = {
        login:  '',
        public_repos: '',
        avatar: '',
        followers: [],
    };

    componentDidMount = () => {
        fetchUsers().then(json => {
            console.log('from container', json.data);
            this.setState({ 
                login:json.data.login,
                public_repos: json.data.public_repos,
                avatar: json.data.avatar_url,
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
            <Card.Group itemsPerRow={4} >

<Card>
    <Image src={this.state.avatar} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{this.state.login}</Card.Header>
      <Card.Meta>
        <span className='date'>Public Repos: {this.state.public_repos}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Followers: {this.state.followers.length}
      </a>
    </Card.Content>
  </Card>

      
            </Card.Group>

            <Card.Group itemsPerRow={4} >

                     
            {this.state.followers.map(item => (
                    <Card fluid> 
                    <Header size='small'>{item.login}</Header> 

                    
                    <Image src={item.avatar_url} size='medium' circular />
                    </Card> 

                    
                ))}
                
                
                
             </Card.Group>
                
              

            </div>
        );
    }

}

export default CardContainer;
