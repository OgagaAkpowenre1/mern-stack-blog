import "./topbar.css";
import profilePic from "../../assets/profilePic.jpg";
import { Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
   const {user, dispatch} = useContext(Context)
   const PF = "https://5000-ogagaakpowe-mernstackbl-96nf2ga4bi6.ws-eu117.gitpod.io/images/"

   const handleLogout = () => {
    dispatch({type: "LOGOUT"})
   }

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square" />
        <i className="topIcon fab fa-twitter-square" />
        <i className="topIcon fab fa-pinterest-square" />
        <i className="topIcon fab fa-instagram-square" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/"}>
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/"}>
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/write"}>
              Write
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>{user && "Logout"}</li>
        </ul>
      </div> 
      <div className="topRight">
        {user ? (
          <Link to={"/settings"}><img className="topImg" src={PF+user.profilePic} alt="" /></Link>
          
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to={"/login"}>
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to={"/register"}>
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search" />
      </div>
    </div>
  );
}
