"use client";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/config/firebase";
import { signOut } from "firebase/auth";
import { useToast } from "./ui/use-toast";

type Props = {};

const Navbar = (props: Props) => {
  const [user] = useAuthState(auth);
  const { toast } = useToast();

  const handleLogOut = async () => {
    await signOut(auth);
    toast({
      variant: "destructive",
      description: "You logged out!",
    });
  };
  return (
    <div className="sticky">
      <div className="items-center p-3 flex justify-between w-full border-b dark:border-zinc-300 border-[#00B2FF]">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            LO
            <span className="border p-px rounded-lg border-[#00B2FF] bg-[#00B2FF]">
              GO
            </span>
          </h1>
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
          {!user ? (
            <Link href="/sign-up">
              <Button
                className="border text-[#00B2FF] border-[#00B2FF] font-semibold"
                variant={"outline"}
              >
                Register
              </Button>
            </Link>
          ) : (
            <Button
              className="border text-[#00B2FF] border-[#00B2FF] font-semibold"
              variant={"outline"}
              onClick={handleLogOut}
            >
              Log out
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
