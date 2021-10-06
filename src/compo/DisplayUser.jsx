import React from 'react';
import User from './user.jsx';
import {Container,Row} from 'react-bootstrap';
function Display (props){
 return(
   <Container>
          <Row>
           {
             props.date.map((user) =>{
               return <User userInfo={user} key={user.id} deleteUser ={props.deleteUser} editUser = {props.editUser} />
             })
           }

          </Row>

   </Container>


 );

};
export default Display;
