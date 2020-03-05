
import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import DeleteBook from "../components/DeleteBook"
import { Container, Row, Col } from "reactstrap";


const Profile = () => {
  const { loading, user } = useAuth0();


  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (

    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md>
          <h1>Welcome {user.email} to Your Reading List</h1>
        </Col>
      </Row>
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md>
          <h2>{user.email}'s Saved Books </h2>
        </Col>
      </Row>
      <Row className="align-items-center">
        <DeleteBook userEmail={user.email}
        //delete button from list
        />
      </Row>

    </Container>

  );
};


export default Profile;
