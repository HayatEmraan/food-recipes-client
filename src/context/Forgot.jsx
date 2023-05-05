import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { authContext } from "./Auth";

const Forgot = () => {
  const { forgotPassword } = useContext(authContext);
  const [error, setError] = useState(null);
  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    forgotPassword(email)
      .then((result) => setError("Password reset email sent!"))
      .catch((err) => setError(err.message));
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 max-w-lg mx-auto"
        onSubmit={handleForgotPassword}
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
        <div className="flex justify-between">
          <p>
            <small>
              Don't have an account?{" "}
              <Link to="/register" className="text-red-500 hover:underline">
                Register
              </Link>
            </small>
          </p>
          <div>
            <p>
              <small>
                Navigate to{" "}
                <Link to="/login" className="text-red-500 hover:underline">
                  LogIn
                </Link>
              </small>
            </p>
          </div>
        </div>
        <div>{error && <p className="text-red-600">{error}</p>}</div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Forgot;
