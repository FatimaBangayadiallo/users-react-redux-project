import React ,{useState} from 'react';
import {Button ,Col,Card,Modal } from 'react-bootstrap';
import Edit from './EditForm.jsx';


const User = (props) =>{
  const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  const  handleDelete = (e) =>{
    e.preventDefault();
    props.deleteUser(props.userInfo.id);


  };
  return(
   <>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Edit
            userInfo={props.userInfo}
            editUser ={props.editUser}
            closeModal= {handleClose} />
        </Modal.Body>

      </Modal>


    <Col md="4" style={{marginBottom: "1rem"}}>
      <h1>login infos:</h1>
      <p>email : {props.userInfo.email}</p>
      <p>password: {props.userInfo.password}</p>
      <Button variant="primary" size="sm" style={{width: "4rem"}} onClick={handleShow}>Edit</Button>
      <Button variant="danger" size="sm"  style={{marginLeft: "2rem"}} onClick={handleDelete}>Delete</Button>
    </Col>
  </>

  );
};
export default User;
