
import React from "react";
// import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import DeleteBook from "../components/DeleteBook"
import { Container, Row, Col } from "reactstrap";
// import BooksContainer from "../components/BooksContainer";

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
        <DeleteBook {...user}
        //delete button from list
        />
      </Row>
      {/* <Row style={{ display: "none" }}>
        <BooksContainer userEmail={user.email}
        />
      </Row> */}

    </Container>

  );
};

// export const userInfo = { user };
export default Profile;
