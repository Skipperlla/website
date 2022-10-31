import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Screens, Author } from "@config/index";
const AVATAR_WIDTH = 48;
const AVATAR_HEIGHT = 48;
const Nav = () => {
  return (
    <nav className="mt-4 top-4 flex items-center justify-center w-full rounded bg-neutral-800/50 px-4 py-2 shadow-lg backdrop-blur backdrop-filter">
      <div className="flex-1 flex items-center">
        <Link
          href="/"
          passHref
          className="transition-all duration-200 relative select-none overflow-hidden rounded-full bg-neutral-700 hover:ring-2 ring-neutral-600 ring-offset-2 ring-offset-neutral-900  flex items-center justify-center"
        >
          <Image
            className="rounded-full object-cover"
            src={Author.avatar}
            width={AVATAR_WIDTH}
            height={AVATAR_HEIGHT}
            alt="avatar"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between text-lg tracking-wide font-extralight">
        {Screens.map((screen, index) => {
          return (
            <Link
              href={screen.href}
              key={index}
              className={`${
                index === 0 ? "ml-0" : "ml-6"
              } transition-all duration-200 bg-no-repeat border-b-0 outline-none text-neutral-400 bg-[length:0px_2px] bg-left-bottom bg-gradient-to-r from-neutral-200 to-neutral-200 hover:outline-none hover:text-neutral-200 hover:bg-[length:100%_2px] focus:outline-none focus:text-neutral-200 focus:bg-[length:100%_2px]`}
            >
              {screen.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
