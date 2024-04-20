import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold  text-xl">Hallo from Gibahtech</h1>
      <Button className="font-semibold">
        <Link href="tiktok.com/@gibahtech?_t=8ciX5oVZ1qE&_r=1" target="_blank">
          Tiktok
        </Link>
      </Button>
    </main>
  );
}
