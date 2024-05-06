"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "@/app/config/firebase";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        toast({
          variant: "destructive",
          description: "All fields are neccessary!",
        });
      } else {
        const res = signInWithEmailAndPassword(email, password);
        console.log({ res });
        setEmail("");
        setPassword("");
        router.push("/");
        toast({
          description: "You're now logged in!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoogleAuth = async () => {
    const res = await signInWithGoogle();
    console.log({ res });
    router.push("/");
    toast({
      description: "You're now successfully logged in!",
    });
  };
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
            />
          </div>
          <Button onClick={handleLogin} className="w-full" type="submit">
            Login
          </Button>
          <Button
            onClick={handleGoogleAuth}
            className="w-full"
            variant="outline"
          >
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link className="underline" href="#">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
