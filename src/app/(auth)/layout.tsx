"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  
  const pathName = usePathname();

  return (
    <main className="min-h-screen bg-neutral-100">
      <div className="mx-auto max-w-screen-2xl">
      <nav className="flex items-center justify-between border-2 px-5 py-2">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="logo" height={35} width={35} />
          <span className="ml-2 text-xl font-bold">PlanStack</span>
        </div>
        <Button asChild variant={"outline"} className="rounded-md border-2 px-3 py-2">
          <Link href={pathName === "/sign-in" ? "/sign-up" : "/sign-in"}>
          {pathName === "/sign-in" ? "Sign Up" : "Sign In"}
          </Link>
        </Button>
      </nav>
      </div>
      <div>
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
