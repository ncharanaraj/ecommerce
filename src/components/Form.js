import React, { useState } from "react";

const Form = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  return (
    <div className="w-[576px] border rounded-[20px] mt-8 flex flex-col items-center justify-center">
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form");
        }}
      >
        <h2 className="leading-[38.73px] text-[32px] font-semibold my-6">
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
        {!isLoginForm && (
          <label className="mt-4">
            <p className="leading-[19.36px] text-base font-normal">Name</p>
            <input
              type="text"
              placeholder="Name"
              className="w-[456px] h-12 border rounded-md p-4 mt-2"
            />
          </label>
        )}
        <label className="mt-4">
          <p className="leading-[19.36px] text-base font-normal">Email</p>
          <input
            type="email"
            placeholder="email"
            className="w-[456px] h-12 border rounded-md p-4 mt-2"
          />
        </label>
        <label className="mt-4">
          <p className="leading-[19.36px] text-base font-normal">Password</p>
          <input
            type="password"
            placeholder="Password"
            className="w-[456px] h-12 border rounded-md p-4 mt-2"
          />
        </label>
        <button
          type="submit"
          className="w-[456px] h-14 bg-black text-white rounded-md leading-[19.36px] font-medium text-base tracking-widest uppercase my-6 "
        >
          {isLoginForm ? "Login" : "Create account"}
        </button>
      </form>
      <div
        className="flex gap-4 mb-16 mt-4 cursor-pointer"
        onClick={() => setIsLoginForm(!isLoginForm)}
      >
        <p className="leading-[19.36px] font-normal text-base">
          {isLoginForm ? "Don’t have an Account?" : "Have an Account?"}
        </p>
        <p className="leading-[19.36px] font-medium text-base tracking-widest uppercase">
          {isLoginForm ? "Sign up" : "Login"}
        </p>
      </div>
    </div>
  );
};

export default Form;
