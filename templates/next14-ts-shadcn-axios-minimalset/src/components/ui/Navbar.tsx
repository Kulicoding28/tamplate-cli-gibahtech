"use client";

import Link from "next/link";
import React from "react";
import { ModeToggle } from "./DarkModeToggle";
import { Button } from "./button";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between my-10 items-center">
        <h1 className="font-bold text-lg">
          <Link href="/">Gibahtech</Link>
        </h1>
        <div className="flex gap-4">
          <ModeToggle />
          <Button>Login</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
