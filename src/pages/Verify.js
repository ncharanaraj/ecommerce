import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Verify = () => {
  const navigate = useNavigate();
  const { users } = useAuth();
  const [otp, setOtp] = useState(new Array(8).fill(""));

  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const { email } = users;

  const hiddenEmail = `${email.slice(0, 3)}***${email.slice(
    email.indexOf("@"),
    email.length
  )}`;

  const handleSubmit = (otp) => {
    if (otp.length === 8 && otp === "12345678") {
      console.log("login success");
      navigate("/category");
    }
  };

  const handleChange = (i, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    //allow only one input
    newOtp[i] = value.substring(value.length - 1);
    setOtp(newOtp);

    //submit trigger
    const conmbineOtp = newOtp.join("");
    handleSubmit(conmbineOtp);

    //move to next field if the current field is filled
    if (value && i < 7 && inputRefs.current[i + 1]) {
      inputRefs.current[i + 1].focus();
    }
  };
  const handleClick = (i) => {
    inputRefs.current[i].setSelectionRange(1, 1);
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !otp[i] && i > 0 && inputRefs.current[i - 1]) {
      //Move focus to the previous field on backspace
      inputRefs.current[i - 1].focus();
    }
  };

  return (
    <>
      <h2 className="leading-[38.73px] text-[32px] font-semibold my-4">
        Verify your email
      </h2>
      <p className="leading-[19.36px] font-normal text-base w-[334px] text-center my-4">
        Enter the 8 digit code you have received on
        <span className="font-medium"> {hiddenEmail}</span>
      </p>
      <form className="mt-[30px]" onSubmit={handleSubmit}>
        <p className="leading-[19.36px] font-normal text-base">Code</p>
        <div className="flex gap-3 mt-[7px] mb-10">
          {otp.map((value, i) => (
            <input
              key={i}
              type="text"
              value={value}
              ref={(input) => (inputRefs.current[i] = input)}
              onChange={(e) => handleChange(i, e)}
              onClick={() => handleClick(i)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="border w-[46px] h-12 rounded-md font-medium text-center"
            />
          ))}
        </div>
        <Button buttonText="verify" />
      </form>
    </>
  );
};

export default Verify;
