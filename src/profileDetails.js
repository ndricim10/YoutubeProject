export const photoURL = () => {
    if (myUser) {
      if (isNaN(myUser.photoUrl)) {
        return "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png";
        
      } else {
        return myUser.photoUrl;
      }
    } 
  };

  export const email = () => {
    if (myUser) {
      if (myUser.email) {
        return myUser.email;
      } else {
        return "default email";
      }
    }
  };

  export const fullName = () => {
    if (myUser) {
      if (myUser.fullName) {
        return myUser.fullName;
      } else {
        return "Default Name";
      }
    }
  };