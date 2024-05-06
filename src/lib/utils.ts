import { Description } from "@radix-ui/react-toast";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const data = [
  {
    name: "Javascript",
    src: "/javascript.jpg",
    description:
      "JavaScript is a versatile scripting language used to add interactivity and dynamic functionality to web pages.",
  },
  {
    name: "Typescript",
    src: "/typescript.jpg",
    description:
      "TypeScript is a superset of JavaScript that adds static typing, enhancing code maintainability and reliability.",
  },
  {
    name: "C",
    src: "/c.jpg",
    description:
      "C is a foundational programming language known for its efficiency and low-level control, widely used in system programming.",
  },
  {
    name: "Rust",
    src: "/rust.jpg",
    description:
      "Rust is a modern systems programming language known for its memory safety gaining popularity for high-performance applications",
  },
  {
    name: "Python",
    src: "/python.jpg",
    description:
      "Python is a versatile, high-level programming language known for its extensive libraries, making it popular for various and automation.",
  },
  {
    name: "AI",
    src: "/ai.jpg",
    description:
      "Artificial intelligence (AI) refers to the ability of machines to exhibit human-like intelligence, including problem-solving, and decision-making",
  },
  {
    name: "Tesla",
    src: "/tesla.jpg",
    description:
      "Tesla is an electric vehicle and clean energy company known for its innovative electric cars, solar panels, and battery storage solutions.",
  },
];
