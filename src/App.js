import logo from './logo.svg';
import React from 'react';
import './App.css';
import Add from './compo/AddUserForm.jsx';
import Display from './compo/DisplayUser.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Image} from 'react-bootstrap';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      utilisateur:[
        {
          email:'banagaya@gmail.com',
          password: '346765df',
          id:'675096gfdsasasd789568'
        },
        {
          email:'sali@gmail.com',
          password:'sali4656tr',
          id:'58965945dfhfgjk091243'

        },


        {
          email:'sali@gmail.com',
          password:'sali4656tr',
          id:'12233dfgggh090'
        }


      ]
    }
  }
  addNewUser = (user) =>{
    user.id = Math.random().toString();
    this.setState({
        utilisateur:[... this.state.utilisateur,user]
    })
  };
  deleteUser = (id) =>{
    let nonSuprimeUti = this.state.utilisateur.filter(user => user.id !== id);
    this.setState({
      utilisateur:nonSuprimeUti
    })

  };
  editUser = (id,updatedUser) =>{
     this.setState({
       utilisateur:this.state.utilisateur.map(user => user.id === id ? updatedUser : user)
     })
  };
render(){
  return(
    <>
    <Container fluid style={{marginTop:"2rem",fontSize:"1rem"}}>
         <Row>
             <Col md= "4">
              <h4 style={{backgroundColor: "grenn"}} >Add Users</h4>
              <Add  nouvoUti = {this.addNewUser}/>

             </Col>

             <h4 style={{backgroundColor: "grenn"}}>Display Edit and Delete users</h4>

             <Col style={{backgroundColor:"#aaa"}}>

             <Display  date = {this.state.utilisateur }  deleteUser ={this.deleteUser} editUser ={this.editUser}  />
             </Col>
         </Row>
    </Container>



    </>
  );
}
}

export default App;
