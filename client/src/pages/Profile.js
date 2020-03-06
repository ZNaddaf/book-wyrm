
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

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (

    <div className="p-6">
      <div className="m-auto w-3/4 md:w-1/3 shadow-xl border rounded" style={{ backgroundColor: "#313b23", borderColor: "#e2e8f05e" }}>
        <img className="border-gray-100" style={{ borderBottomWidth: "1px", borderRadius: "25px 25px 0px 0px" }} src={banner} alt="profile banner" />
        <h2 className="p-3 align-center text-center text-md-left" >{user.email}'s Saved Books:</h2>
      </div>

      <DeleteBook {...user} />
    </div>

  );
};


export default Profile;
