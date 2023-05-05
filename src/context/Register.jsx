import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import googleIncons from "../assets/signUp/GButton.jpg";
import gitubIncons from "../assets/signUp/github.png";
import { authContext } from "./Auth";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const Register = () => {
  const { signInWithGithub, signInWithGoogle, createUser, userUpdateProfile } =
    useContext(authContext);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [eyeActive, setEyeActive] = useState(false);
  const [repeatActive, setRepeatActive] = useState(false);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error));
  };
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error));
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const middle = e.target;
    const email = middle.email.value;
    const password = middle.password.value;
    const password1 = middle.password1.value;
    const photo = middle.photo.value;
    const name = middle.name.value;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setError("Invalid email, Enter your valid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (password !== password1) {
      setError("Passwords do not match");
      return;
    }
    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        userUpdateProfile(result.user, name, photo);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col gap-4 max-w-lg mx-auto p-4 lg:p-0"
        onSubmit={handleSignUp}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <div>
            <TextInput
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required={true}
              shadow={true}
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your Email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            name="email"
            addon="@"
            placeholder="Your Email Address"
            required={true}
            shadow={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="photo" value="Your Photo URL" />
          </div>
          <TextInput
            id="photo"
            type="text"
            name="photo"
            placeholder="Your Photo URL"
            required={true}
            shadow={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
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
        <div>
          <div className="mb-2 block mt-8">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <div className="relative">
            <TextInput
              className="absolute w-full"
              id="repeat-password"
              type={repeatActive ? "text" : "password"}
              name="password1"
              required={true}
              shadow={true}
            />
            <div
              style={{ top: "10px", right: "10px" }}
              className="absolute right-0 cursor-pointer "
              onClick={() => setRepeatActive(!repeatActive)}
            >
              {repeatActive ? (
                <EyeIcon className="w-6 h-6" />
              ) : (
                <EyeSlashIcon className="w-6 h-6" />
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">
            I agree with the{" "}
            <a
              href="/forms"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </Label>
        </div>
        <div>{error && <h2 className="text-red-600">{error}</h2>}</div>
        <div>
          <p>
            <small>
              Already have an account?{" "}
              <Link to="/login" className="text-red-500 hover:underline">
                Login
              </Link>
            </small>
          </p>
        </div>
        <Button type="submit">Register new account</Button>
      </form>
      <div className="mr-48">
        <div className="flex w-44  lg:w-48 gap-2 mx-auto mt-4">
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

export default Register;
