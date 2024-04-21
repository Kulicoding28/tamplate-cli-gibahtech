"use client";

import Link from "next/link";
import React from "react";
import { ModeToggle } from "./DarkModeToggle";
import { Button } from "./button";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between my-10 items-center">
        <Link href="/">
          <p className="font-bold text-lg">Home</p>
        </Link>
        <div className="flex gap-4">
          <ModeToggle />
          <Button>Login</Button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
