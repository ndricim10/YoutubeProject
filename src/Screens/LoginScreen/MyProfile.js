import { MdOutlineAddAPhoto } from "react-icons/md";
import "./loginScreen.scss";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeAuth } from "firebase/auth";
import { useSelector } from "react-redux";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import "../../index.scss";
import { email, fullName, photoURL } from "../../profileDetails";

export default function MyProfile() {
  const { user } = useSelector((state) => state.auth);
  const userEmail = useSelector((state) => state.loginEmail.user);
  const myUser = JSON.parse(localStorage.getItem("yt-user"));
  const { darkMode } = useSelector((state) => state);


  //   function handlePhotoUrl() {
  //     getDownloadURL(ref(storage, myUser.email))
  //       .then((url) => {
  //         const img = document.getElementById("myimg");
  //         img.setAttribute("src", url);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }

  //   const storage = getStorage();
  //   const storageRef = ref(storage, photoURL());

  //   function addImage() {
  //     // 'file' comes from the Blob or File API
  //     uploadBytes(storageRef, file).then((snapshot) => {
  //       console.log("Uploaded a blob or file!");
  //     });
  //   }
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(fullName);

  function handleChange(event) {
    event.preventDefault();
    setName(event.target.value)
  }
  return (
    <div className="myProfile">
      <div className="myProfile_changeImg">
        <img src={photoURL()} className="myImg" />
        <div className="file">
          <input type="file" />
          <MdOutlineAddAPhoto />
        </div>
      </div>

      <div className="myProfile_details">
        <form action="">
          <div className="fullName">
            <label htmlFor="name">Full Name:</label>
            <span>{fullName()}</span>
            <div
              className="edit fullName"
              onClick={() => setEdit((prev) => !prev)}
            >
              <AiFillEdit />
            </div>
          </div>
          {!edit && (
            <div className="fullName">
              <input
                type="text"
                onChange={handleChange}
                className={darkMode ? "input color-light" : "input color-dark"}
              />
              <button>Save</button>
            </div>
          )}
          <div className="fullName">
            <label htmlFor="email">Email:</label>
            <span>{email()}</span>
          </div>
        </form>
      </div>
    </div>
  );
}
