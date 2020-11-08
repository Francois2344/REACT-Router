import React from 'react'

function UserProfile(props) {
  // Get the URL parameters
  const params = props.match.params;
  return (
    <div>
      <p>userProfile: <em>{params.githubLogin}</em></p>
    </div>
  );
}

export default UserProfile;