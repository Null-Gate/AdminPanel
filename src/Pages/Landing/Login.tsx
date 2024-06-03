import { useState } from "react";
import { TextInput, Button } from "@mantine/core";
import classes from "./Login.module.css";
import { useFloatingLabel } from "../../utils/FloatingInput";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const emailFloating = useFloatingLabel(loginData.email);
  const passwordFloating = useFloatingLabel(loginData.password);

  // Handle input changes
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const nav = useNavigate();

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
    if (loginData.password) {
      Cookies.set("token", "Bluuuute");
    }
    nav("/dashboard");
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form
        className="w-3/5 border shadow-lg rounded p-10 gap-5 flex flex-col"
        onSubmit={handleSubmit}
      >
        <TextInput
          label="Enter your email"
          labelProps={{ "data-floating": emailFloating.floating }}
          classNames={{
            root: classes.root,
            input: classes.input,
            label: classes.label,
          }}
          onFocus={emailFloating.onFocus}
          onBlur={emailFloating.onBlur}
          value={loginData.email}
          name="email"
          onChange={handleInput}
          required
        />
        <TextInput
          label="Enter your password"
          labelProps={{ "data-floating": passwordFloating.floating }}
          classNames={{
            root: classes.root,
            input: classes.input,
            label: classes.label,
          }}
          onFocus={passwordFloating.onFocus}
          onBlur={passwordFloating.onBlur}
          value={loginData.password}
          name="password"
          onChange={handleInput}
          required
        />
        <Button color="green" type="submit" variant="filled">
          Login
        </Button>
        <span className="text-[12px] text-gray-400 self-end">
          If you don't have account report to admin
        </span>
      </form>
    </div>
  );
};

export default Login;
