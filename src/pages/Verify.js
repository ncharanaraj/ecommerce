import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="leading-[38.73px] text-[32px] font-semibold my-4">
        Verify your email
      </h2>
      <p className="leading-[19.36px] font-normal text-base w-[334px] text-center my-4">
        Enter the 8 digit code you have received on
        <span className="font-medium"> swa***@gmail.com</span>
      </p>
      <form
        className="mt-[30px]"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("login success");
          navigate("/category");
        }}
      >
        <p className="leading-[19.36px] font-normal text-base">Code</p>
        <div className="flex gap-3 mt-[7px] mb-10">
          <input type="text" className="border w-[46px] h-12 rounded-md" />
          <input type="text" className="border w-[46px] h-12 rounded-md" />
          <input type="text" className="border w-[46px] h-12 rounded-md" />
          <input type="text" className="border w-[46px] h-12 rounded-md" />
          <input type="text" className="border w-[46px] h-12 rounded-md" />
          <input type="text" className="border w-[46px] h-12 rounded-md" />
          <input type="text" className="border w-[46px] h-12 rounded-md" />
          <input type="text" className="border w-[46px] h-12 rounded-md" />
        </div>
        <Button buttonText="verify" />
      </form>
    </>
  );
};

export default Verify;
