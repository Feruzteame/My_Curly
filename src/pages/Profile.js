import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from '../components/Logout';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user)

const timeFormat = (update_time) => {
  const date = new Date(update_time);
  const time = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric' });
  return time
}

  return (
    isAuthenticated && ( 
     <div id='profile'>
        <img id='img' src={ user.picture } alt={ user.name } />
        <h4>
          { user.name }
        </h4>
        <p>{ user.email }</p>
        <p>{timeFormat(user.updated_at)}</p>
        <Logout/>
      </div>
    )
  );
};

export default Profile;