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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/app/config/firebase";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

export function SignUp() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      if (!email || !password) {
        toast({
          variant: "destructive",
          description: "All fields are neccessary!",
        });
      } else {
        const res = await createUserWithEmailAndPassword(email, password);
        console.log({ res });
        setEmail("");
        setPassword("");
        router.push("/");
        toast({
          description: "Successfully signed up!",
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
      description: "Successfully logged in!",
    });
  };
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <Button onClick={handleSignUp} className="w-full" type="submit">
            Create an account
          </Button>
          <Button
            onClick={handleGoogleAuth}
            className="w-full"
            variant="outline"
          >
            Sign up with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link className="underline" href="/login">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
