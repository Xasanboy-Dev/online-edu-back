import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginAuth } from "../TypeScript/Auth";
const LoginUser = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      password &&
      phoneNumber &&
      password.length >= 6 &&
      phoneNumber.length == 12 &&
      phoneNumber.includes("9989")
    ) {
      setError(!true);
      const token = await LoginAuth(phoneNumber, password);
      setMessage(token);
      navigate("/");
    } else {
      setError(true);
    }
  };
  return (
    <div className="flex flex-col justify-start max-sm:pt-10 items-center h-screen w-full bg-cover bg-center bg-[url(/public\bg1.png)] text-white/80 font-semibold">
      <div className="flex flex-col justify-center items-center mb-6">
        <img src="public/pngwing.com(2).png" alt="" className="w-[250px] " />
        <h1 className="text-white/80 text-xl font-semibold">
          Financi Education
        </h1>
      </div>
      <div className="sm:w-[400px] h-[500px] bg-transparet border-4  border-blue-600 max-sm:w-[280px] h-min rounded-xl text-md px-2">
        <h1 className="flex justify-center pb-1 mx-3 mt-3.5 border-b border-white-1">
          Registratsyadan o'tish
        </h1>
        <form
          onSubmit={(e) => onSubmit(e)}
          className=" w-full h-min rounded-b-xl px-2 pt-3 pb-1 flex flex-col gap-2 items-center"
        >
          <div className="w-full">
            <h1>Telefon Raqam:</h1>
            <input
              className="w-full rounded max-sm:h-8 h-12 p-2 bg-transparent border border-white outline-none"
              type="number"
              placeholder="+998 XX XXX XX XX"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="w-full">
            <h1>Parolni kiriting:</h1>
            <input
              className="w-full rounded max-sm:h-8 h-12 p-2 bg-transparent border border-white outline-none"
              type="password"
              placeholder="Sizining parolingiz"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex">
            <span
              style={{ display: error ? "block" : "none" }}
              className="text-red-700"
            >
              Your phone <span className="text-white">number</span> must be
              valid and <span className="text-white">password</span> must be
              longer than 6
            </span>
            <span style={{ display: message ? "block" : "none" }}>
              {message}
            </span>
          </div>
          <button className="w-2/3 rounded-2xl my-2 bg-blue-700 py-3 px-4">
            Yuborish
          </button>
          <span className="underline decoration-1">
            <NavLink to={"/register"}>Registratsiyadan otish!</NavLink>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
