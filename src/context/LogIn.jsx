import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="container mx-auto">
      <form className="flex flex-col gap-4 max-w-lg mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your Email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="Your Email Address"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            placeholder="Your Password"
            type="password"
            required={true}
          />
        </div>
        <div>
          <p>
            <small>
              Don't have an account?{" "}
              <Link to="/register" className="text-red-500">
                Register
              </Link>
            </small>
          </p>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default LogIn;
