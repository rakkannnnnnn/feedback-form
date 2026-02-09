"use client";

import Link from "next/link";
import { Sparkle } from "lucide-react";


export default function Navbar() {
    return <nav className="border-b bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-6">
                <Link href="/">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Sparkle className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold">Feedback Fusion</span>
            </div>
          </Link>
          
            </div>
        </div>

    </nav>;
} 