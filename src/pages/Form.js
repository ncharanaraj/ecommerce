import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Form = () => {
  const { isLoginForm, setIsLoginForm, formData, setFormData, setUsers } =
    useAuth();
  const navigate = useNavigate();

  const { fullName, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setUsers(formData);
      navigate("/verify");
      setTimeout(() => {
        alert("OTP to login - 12345678");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

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
        onSubmit={handleSubmit}
      >
        {!isLoginForm && (
          <label className="my-4">
            <p className="leading-[19.36px] text-base font-normal">Name</p>
            <input
              type="text"
              placeholder="Name"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              className="w-[456px] h-12 border rounded-md p-4 mt-[7px]"
            />
          </label>
        )}
        <label className="my-4">
          <p className="leading-[19.36px] text-base font-normal">Email</p>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="w-[456px] h-12 border rounded-md p-4 mt-[7px]"
          />
        </label>
        <label className="my-4">
          <p className="leading-[19.36px] text-base font-normal">Password</p>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
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
