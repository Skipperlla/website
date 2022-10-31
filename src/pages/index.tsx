import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PostCard } from "@components/index";
import { useGithub } from "@utils/context/GithubContext";
import { Author } from "@config/index";

const AVATAR_WIDTH = 460;
const AVATAR_HEIGHT = 460;
const index = () => {
  const { user } = useGithub();
  return (
    <>
      <section className="my-12 flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col sm:flex-row">
          <div
            className={`relative h-64 w-64 sm:h-40 sm:w-40 select-none overflow-hidden rounded-full bg-neutral-700 ring-2 ring-neutral-600 ring-offset-2 ring-offset-neutral-900`}
          >
            <Image
              className="rounded-full object-cover h-64 w-64 sm:h-40 sm:w-40"
              src={user?.avatar_url}
              width={AVATAR_WIDTH}
              height={AVATAR_HEIGHT}
              alt="logo"
            />
          </div>
          <div className="sm:ml-6 mt-4 sm:mt-0">
            <h1 className="text-neutral-200 text-4xl font-light">Skipperlla</h1>
            <span className="text-neutral-400">Full Stack Developer</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="w-full sm:max-w-xl mt-4 text-neutral-400">
            {Author.about}
          </p>
        </div>
      </section>

      <section>
        <div className="flex  items-center justify-between">
          <h1 className="text-3xl text-neutral-200">Recent Posts</h1>
          <Link
            className="transition-all duration-200 bg-no-repeat border-b-0 outline-none text-neutral-400 bg-[length:0px_2px] bg-left-bottom bg-gradient-to-r from-neutral-200 to-neutral-200 hover:outline-none hover:text-neutral-200 hover:bg-[length:100%_2px] focus:outline-none focus:text-neutral-200 focus:bg-[length:100%_2px]"
            href="#"
          >
            <span>See More</span>
          </Link>
        </div>

        <PostCard />
      </section>

      {/* <article>Recent Work</article> */}
    </>
  );
};

export default index;
