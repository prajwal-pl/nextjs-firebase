"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase";
import { useRouter } from "next/navigation";
import { Card, CardHeader } from "@/components/ui/card";
import CardComponent from "@/components/CardComponent";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  if (!user) {
    return (
      <div className="h-screen w-full flex items-center justify-center ">
        <h1 className="text-4xl text-center font-semibold">
          This is a protected page!
          <br />
          <span className="font-bold px-1 bg-[#00B2FF]">Sign in</span> to
          continue
        </h1>
      </div>
    );
  }

  return (
    <div className="my-12">
      <div className="">
        <h1 className="text-center text-2xl font-semibold">
          Popular Topics 🔥
        </h1>
      </div>
      <div className="my-6">
        <CardComponent />
      </div>
    </div>
  );
}
