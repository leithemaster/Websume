"use client";

import { useEffect, useState } from "react";
import Terminal from "@/components/terminal";
import BootSequence from "@/components/boot-sequence";

export default function Home() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooting(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply CRT effect
    document.body.classList.add("crt");

    return () => {
      document.body.classList.remove("crt");
    };
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('./background.jpg')", // Ensure this path is correct relative to your public directory
          backgroundPosition: "center 40%",
          filter: "brightness(0.7) contrast(1.1)",
        }}
        aria-hidden="true"
      >
        {/* Overlay for better text readability - removed blur effect */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 py-8 h-screen flex flex-col relative z-10">
        {booting ? <BootSequence /> : <Terminal />}
      </div>
    </main>
  );
}
