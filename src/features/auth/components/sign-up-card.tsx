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
import { signUpSchema } from "../schemas";
import { useRegister } from "../api/use-register";

export const SignUpCard = () => {
  const { mutate, isPending } = useRegister();

  const { register, handleSubmit } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof signUpSchema>) => {
    mutate({ json: values });
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="pb-2 break-words">
        <CardTitle className="text-2xl font-bold break-words">
          Create your account
        </CardTitle>
        <CardDescription>
          Enter your details below to create your account
        </CardDescription>
      </CardHeader>
      <div className="px-6">
        <Separator />
      </div>
      <CardContent className="pt-0 pb-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex flex-col gap-1">
            <Label htmlFor="name" className="mt-1 text-sm font-medium">
              Name
            </Label>
            <Input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              type="text"
              id="name"
              disabled={isPending}
              placeholder="John"
              autoFocus
            />
          </div>
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
              disabled={isPending}
              placeholder="me@example.com"
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
              disabled={isPending}
              placeholder="********"
            />
          </div>
          <Button
            variant={"primary"}
            type="submit"
            disabled={isPending}
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
        <Button
          variant={"outline"}
          disabled={isPending}
          className="w-full rounded-md px-3 py-2"
        >
          <FcGoogle className="mr-1 inline h-4 w-4" />
          Sign in with Google
        </Button>
        <Button
          variant={"outline"}
          disabled={isPending}
          className="w-full rounded-md px-3 py-2"
        >
          <FaGithub className="mr-1 inline h-4 w-4" />
          Sign in with Github
        </Button>
      </CardContent>
      <CardContent>
        <p className="text-muted-foreground text-sm font-medium">
          Already have and account?
          <Link
            href={"/sign-in"}
            className="ml-1 text-blue-600 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
