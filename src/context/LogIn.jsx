import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIncons from "../assets/signUp/GButton.jpg";
import gitubIncons from "../assets/signUp/github.png";
import { useContext } from "react";
import { authContext } from "./Auth";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const LogIn = () => {
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(authContext);
  const location = useLocation();
  const [eyeActive, setEyeActive] = useState(false);
  const from = location?.state?.pathname || '/';
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const handleLogIn = (e) => {
    e.preventDefault();
    const middle = e.target;
    const email = middle.email.value;
    const password = middle.password.value;
    signIn(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(from);
      })
      .catch((error) => setError(error));
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate(from);
      })
      .catch((error) => setError(error));
  };
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        setUser(result.user);
        navigate(from);
      })
      .catch((error) => setError(error));
  };
  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col gap-4 max-w-lg mx-auto"
        onSubmit={handleLogIn}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your Email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            name="email"
            addon="@"
            placeholder="Your Email Address"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <div className="relative">
            <TextInput
              className="absolute w-full"
              id="password2"
              type={eyeActive ? "text" : "password"}
              name="password"
              required={true}
              shadow={true}
            />
            <div
              style={{ top: "10px", right: "10px" }}
              className="absolute right-0 cursor-pointer "
              onClick={() => setEyeActive(!eyeActive)}
            >
              {eyeActive ? (
                <EyeIcon className="w-6 h-6" />
              ) : (
                <EyeSlashIcon className="w-6 h-6" />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-12">
          <p>
            <small>
              Don't have an account?{" "}
              <Link to="/register" className="text-red-500 hover:underline">
                Register
              </Link>
            </small>
          </p>
          <div>
            <p className="hover:underline">
              <small>
                <Link to="/forgot" className="text-red-500">
                  Forgot Password
                </Link>
              </small>
            </p>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <div className="mr-48">
        <div className="flex w-48 gap-2 mx-auto mt-4">
          <img
            onClick={handleGoogleSignIn}
            className="cursor-pointer"
            src={googleIncons}
            alt="google"
          />
          <img
            onClick={handleGithubSignIn}
            className="cursor-pointer"
            src={gitubIncons}
            alt="github"
          />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
