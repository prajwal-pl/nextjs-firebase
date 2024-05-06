import { Login } from "@/components/component/login";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="w-full grid-rows-2 grid md:grid-cols-2 md:grid-rows-none">
      <div>
        <img
          className="w-full h-full object-cover shrink-0"
          src="/Signin.jpeg"
          alt="image"
        />
      </div>
      <div className="items-center mb-12 flex-col flex">
        <div className="m-24 text-center space-y-3 mb-12">
          <h1 className="text-xl md:text-2xl font-semibold">
            Lo <span className="p-px rounded-lg bg-[#00B2FF]">GO</span>
          </h1>
          <p className="font-normal text-lg md:text-xl">
            Journey to a million miles starts from here...
          </p>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
