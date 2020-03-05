
import React from "react";
/////////////////////////////////////
// auth0 functionality (loading, user) imported from Auth0SPA
/////////////////////////////////////
import { useAuth0 } from "../react-auth0-spa";

/////////////////////////////////////
// Delete book componenent 
// AKA.. **profile reading list**
/////////////////////////////////////
import DeleteBook from "../components/DeleteBook"

/////////////////////////////////////
// ability to use profile banner image
/////////////////////////////////////
import banner from "../assets/profile_banner.png";
import { Container, Row, Col } from "reactstrap";


const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (

    <Container className="mb-5">
      <Row>
        <img className="mb-3 app-banner" src={banner} alt="profile banner" />
      </Row>
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
        />
      </Row>


    </Container>

  );
};


export default Profile;
