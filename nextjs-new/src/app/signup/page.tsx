"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeftIcon, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const handleGithubSignIn = async () => {
    setIsGithubLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsGithubLoading(false);
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Button
        variant="ghost"
        href="/"
        className="absolute left-4 top-4 md:left-8 md:top-8"
      >
        <ChevronLeftIcon className="mr-2 size-4" />
        Back
      </Button>
      <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome to Svee UI
          </h1>
          <p className="text-sm text-muted-foreground">Sign up for an account</p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button size="sm" className="w-full" disabled={isLoading}>
            {isLoading && <Loader className="mr-2 size-4 animate-spin" />}
            Sign Up with Email
          </Button>
        </form>
        {/* Separator */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button
          onClick={handleGithubSignIn}
          variant="outline"
          disabled={isGithubLoading}
        >
          {isGithubLoading ? (
            <Loader className="mr-2 size-4 animate-spin" />
          ) : (
            <Image
              src="/imgs/github-dark.svg"
              alt="github"
              className="mr-2 size-4"
              width={16}
              height={16}
            />
          )}
          Github
        </Button>
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link href="/signin" className="hover:text-brand underline underline-offset-4">
            Already have an account? Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
