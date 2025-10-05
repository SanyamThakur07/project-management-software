"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const SignInCard = () => {
  const { register, handleSubmit } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="break-words pb-2">
        <CardTitle className="text-2xl font-bold break-words">
          Log in to your account
        </CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <div className="px-6">
        <Separator />
      </div>
      <CardContent className="pt-0 pb-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex flex-col gap-1">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
              type="email"
              id="email"
              placeholder="me@example.com"
              autoFocus
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <Input
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
              type="password"
              id="password"
              placeholder="********"
            />
          </div>
          <Button
            variant={"primary"}
            type="submit"
            className="w-full rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
          >
            Sign In
          </Button>
        </form>
      </CardContent>
      <div className="px-6 pb-2">
        <Separator />
      </div>
      <CardContent className="space-y-2 pt-0">
        <Button variant={"outline"} className="w-full rounded-md px-3 py-2">
          <FcGoogle className="mr-1 inline h-4 w-4" />
          Sign in with Google
        </Button>
        <Button variant={"outline"} className="w-full rounded-md px-3 py-2">
          <FaGithub className="mr-1 inline h-4 w-4" />
          Sign in with Github
        </Button>
      </CardContent>
      <CardContent>
        <p className="text-sm text-muted-foreground font-medium">Don't  have and account?
          <Link  href={"/sign-up"} className="ml-1 text-blue-600 hover:underline">
            Sign Up
          </Link>
           </p>
      </CardContent>
    </Card>
  );
};
