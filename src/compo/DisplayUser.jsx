import React from "react";
import User from "./user.jsx";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";

function Display(props) {
  console.log(props);
  return (
    <Container>
      <Row>
        {props.utilisateur.map((user) => {
          return (
            <User
              userInfo={user}
              key={user.id}
              deleteUser={props.deleteUser}
              editUser={props.editUser}
            />
          );
        })}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    utilisateur: state.utilisateur,
  };
};

export default connect(mapStateToProps)(Display);
