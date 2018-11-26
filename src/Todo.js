
import React from 'react';
import { Query } from 'react-apollo';
import GetUser from './Query/GetUser';
import {map} from 'lodash';
import Card from './Card'
import './card.css'
function Todo(props){
  return (
  <Query query={GetUser}>
  {({ loading, error, data }) => {
    if (error) return `Error! ${error.message}`;
    return (
      <div className="cardContainer" >
      <div className="cardCon">
        {map((data.allUsers), (e, k) => ( 
        <Card 
          key={k+'id'}
          id={e.id}
          firstName={e.firstName}
          lastName={e.lastName}
          email={e.email}
          avatar={e.avatar}
        />
        ))}
      </div>
      </div>
    )
  }}

</Query>

  
)};

export default Todo;