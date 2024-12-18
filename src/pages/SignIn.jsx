import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { user, setUser, signIn } = useContext(AuthContext);

  let navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Get the Data from Form
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    // Sign in with Data
    signIn(email, pass)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        await navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="flex justify-center items-center h-hero-m-height lg:h-hero-l-height bg-base-100">
      <div className="w-full max-w-md p-6 shadow-lg rounded-lg text-secondary border">
        <h1 className="text-2xl font-bold text-center mb-6 text-primary">
          Sign In
        </h1>
        <form onSubmit={handleSignIn}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-neutral-content"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input text-base-content input-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-neutral-content"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full text-secondary hover:bg-opacity-90"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
