import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import googleIncons from "../assets/signUp/GButton.jpg";
import gitubIncons from "../assets/signUp/github.png";
import { authContext } from "./Auth";

const Register = () => {
  const { signInWithGithub, signInWithGoogle, createUser } =
    useContext(authContext);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

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
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setError("Invalid email, Enter your valid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    createUser(email, password)
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error));
  };
  console.log(user);
  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col gap-4 max-w-lg mx-auto"
        onSubmit={handleSignUp}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your Email" />
          </div>
          <TextInput
            id="email2"
            type="email" name="email"
            placeholder="Your Email Address"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            type="password" name="password"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            required={true}
            shadow={true}
          />
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
              <Link to="/login" className="text-red-500">
                Login
              </Link>
            </small>
          </p>
        </div>
        <Button type="submit">Register new account</Button>
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

export default Register;
