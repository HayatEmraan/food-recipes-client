import { Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";
import { authContext } from "../../context/Auth";
import Loading from "../loading/Loading";
const Header = () => {
  const { user, logOut, loading } = useContext(authContext);
  console.log(user);
  if (loading) {
    return <Loading/>;
  }
  return (
    <div className="container mx-auto">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Recipes
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <div className="flex items-center">
              <img className="w-8 mr-4" src={user.photoURL} alt="Profile" />
              <Link onClick={logOut}>LogOut</Link>
            </div>
          ) : (
            <Link to="/login">
              <Button>LogIn</Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Services</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
