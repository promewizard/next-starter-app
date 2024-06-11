"use client"
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { signOut } from "next-auth/react";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConnectButton />
      <button className="bg-black text-white p-3 rounded2" onClick={() => signOut()}>Sign Out</button>
    </main>
  );
}
