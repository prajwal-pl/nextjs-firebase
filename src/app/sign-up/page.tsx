import { SignUp } from "@/components/component/SignUp";
import React from "react";

type Props = {};

const SignupPage = (props: Props) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default SignupPage;
