import React from "react";
import './card.css'
import PropTypes from 'prop-types'; 

function Card(props){
  return (

<div className="cardConf">
     
      <img src={props.avatar} alt="Avatar"  className="imgs" />

    <h4><b>{props.firstName}</b></h4> 
    <h4><b>{props.lastName}</b></h4> 
    <h4><b>{props.email}</b></h4> 
     </div>
    
    
   
  );
}

Card.propTypes = {
   
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
  
  }
export default Card;
