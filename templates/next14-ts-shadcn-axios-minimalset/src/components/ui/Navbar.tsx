"use client";

import Link from "next/link";
import React from "react";
import { ModeToggle } from "./DarkModeToggle";
import { Button } from "./button";

const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-between my-10 items-center">
        <div>
          <Link href="/">
            <li className="font-bold text-lg">Home</li>
          </Link>
        </div>

        <div className="flex gap-4">
          <ModeToggle />
          <Button>Login</Button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
