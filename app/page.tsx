"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="min-h-screen">
      <h1>Hello {session?.user?.name}</h1>
    </div>
  );
}
