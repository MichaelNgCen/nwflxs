import axios from "axios";
import { useCallback, useState } from "react";
import Input from "../components/input";
import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("");

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  const toggleVariant = useCallback(() => {
    setVariant(
      (currentVariant) => (currentVariant === "login" ? "register" : "login") // if the current variant is login, then set the variant to register, else set the variant to login
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-norepeat bg-center bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-21 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-auto mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && ( // if the variant is register, then show the username input field
                <Input
                  label="Username"
                  onChange={function (
                    event: React.ChangeEvent<HTMLInputElement> // the event is a change event, which is triggered when the input field is changed
                  ): void {
                    return setName(event.target.value); // event.target.value is the value of the input field that is being changed (in this case, the username input field)
                  }}
                  id="name" // the id of the input field is name
                  type={"text"} // the type of the input field is text, so the username is not validated
                  value={name} // the value of the input field is the value of the name variable
                />
              )}
              <Input
                label="Email"
                onChange={function (
                  event: React.ChangeEvent<HTMLInputElement>
                ): void {
                  return setEmail(event.target.value);
                }}
                id="email" // the id of the input field is email
                type="email" // the type of the input field is email, so the email is validated
                value={email} // the value of the input field is the value of the email variable
              />
              <Input
                label="Password"
                onChange={function (
                  event: React.ChangeEvent<HTMLInputElement>
                ): void {
                  return setPassword(event.target.value); // event.target.value is the value of the input field that is being changed (in this case, the password input field)
                }}
                id="password" // the id of the input field is password
                type={"password"} // the type of the input field is password, so the password is hidden
                value={password} // the value of the input field is the value of the password variable
              />
            </div>
            <button
              onClick={variant === "login" ? login : register}
              className="bg-primary py-3 text-white rounded-md w-full mt-10 hover:brightness-75 transition"
            >
              {variant === "login" ? "Sign In" : "Register"}
            </button>
            <div
              onClick={() => signIn("google", { callbackUrl: "/profiles" })}
              className="flex flex-row items-center gap-4 mt-5 justify-center"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition ">
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={30} />
              </div>
            </div>

            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "Don't have an account?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Sign In"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
