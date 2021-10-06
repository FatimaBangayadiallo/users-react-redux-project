import React from 'react';
import {Form,Button} from 'react-bootstrap';

class Edit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: props.userInfo.email,
      password: props.userInfo.password,
      id: props.userInfo.id
    }
  }
  handleChnage = (e) =>{
    e.preventDefault();
    this.setState({
       [e.target.name] : e.target.value
    })
    // console.log(this.state);

  };
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.editUser(this.state.id,this.state);
    this.setState({
      email:'',
      password:''
    });
  this.props.closeModal();

  };
  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
<Form.Group className="mb-3" controlId="formBasicEmail">
 <Form.Label>Email address</Form.Label>
 <Form.Control type="email" placeholder="Enter email" name= 'email' value={this.state.email} onChange={this.handleChnage} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
 <Form.Label>Password</Form.Label>
 <Form.Control type="password" placeholder="Password"  name= 'password' value={this.state.password} onChange={this.handleChnage} />
</Form.Group>

<Button variant="primary" type="submit">
 Submit
</Button>
</Form>
    );
  }
};
export default Edit;
