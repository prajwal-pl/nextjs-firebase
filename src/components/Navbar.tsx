import { MenuIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <div className="sticky items-center p-3 flex justify-between w-full border-b dark:border-zinc-300 border-[#00B2FF]">
        <h1 className="text-3xl font-bold">
          LO
          <span className="border p-px rounded-lg border-[#00B2FF] bg-[#00B2FF]">
            GO
          </span>
        </h1>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            className="border text-[#00B2FF] border-[#00B2FF] font-semibold"
            variant={"outline"}
          >
            Sign in
          </Button>
          <MenuIcon className="md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
