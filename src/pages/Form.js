import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <h2 className="leading-[38.73px] text-[32px] font-semibold my-4">
        {isLoginForm ? "Login" : "Create your account"}
      </h2>
      {isLoginForm && (
        <>
          <h3 className="font-medium text-2xl leading-[29.05px] mb-2">
            Welcome back to ECOMMERCE
          </h3>
          <p className="font-normal text-base leading-[19.36px] mb-2">
            The next gen business marketplace
          </p>
        </>
      )}
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form");
          navigate("/verify");
        }}
      >
        {!isLoginForm && (
          <label className="my-4">
            <p className="leading-[19.36px] text-base font-normal">Name</p>
            <input
              type="text"
              placeholder="Name"
              className="w-[456px] h-12 border rounded-md p-4 mt-[7px]"
            />
          </label>
        )}
        <label className="my-4">
          <p className="leading-[19.36px] text-base font-normal">Email</p>
          <input
            type="email"
            placeholder="email"
            className="w-[456px] h-12 border rounded-md p-4 mt-[7px]"
          />
        </label>
        <label className="my-4">
          <p className="leading-[19.36px] text-base font-normal">Password</p>
          <input
            type="password"
            placeholder="Password"
            className="w-[456px] h-12 border rounded-md p-4 mt-[7px]"
          />
        </label>
        <Button buttonText={isLoginForm ? "Login" : "Create account"} />
      </form>
      <div
        className="flex gap-4 mb-16 my-6 cursor-pointer"
        onClick={() => setIsLoginForm(!isLoginForm)}
      >
        <p className="leading-[19.36px] font-normal text-base">
          {isLoginForm ? "Don’t have an Account?" : "Have an Account?"}
        </p>
        <p className="leading-[19.36px] font-medium text-base tracking-widest uppercase">
          {isLoginForm ? "Sign up" : "Login"}
        </p>
      </div>
    </>
  );
};

export default Form;
