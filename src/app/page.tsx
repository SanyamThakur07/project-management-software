import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen items-center justify-center">
      <Button>Hello World</Button>
      <Button variant={"secondary"}>Hello World</Button>
    </div>
  );
}
