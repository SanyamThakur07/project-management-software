import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
return (
  <Card className="w-full max-w-md">
    <CardHeader>
      <CardTitle> welcome</CardTitle>
      <CardDescription> hey how are you </CardDescription>
    </CardHeader>
  </Card>
)
}
