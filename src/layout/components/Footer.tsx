import React from "react";
import useSWR from "swr";
import Link from "next/link";
import { baseApiUrl } from "@utils/index";
import { SpotifyCard } from "@components/index";
import type { IconName } from "@fortawesome/fontawesome-svg-core";
import { Author, Screens } from "@config/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Footer = () => {
  const { data } = useSWR(`${baseApiUrl}/api/spotify-now-playing`, fetcher);
  return (
    <>
      <hr className="border-1 border-neutral-700 my-10" />
      <footer className="mx-auto px-4">
        <SpotifyCard
          isPlaying={data?.isPlaying}
          album={data?.album}
          href={data?.href}
          title={data?.title}
          artists={data?.artists}
        />
        <div className="flex mt-4 sm:space-y-0 space-y-6 sm:justify-between text-center sm:text-left flex-col sm:flex-row">
          {/* // * Left */}
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl text-neutral-200">{Author.username}</h1>
            <h1 className=" text-neutral-400 text-lg">{Author.job}</h1>
            <div className="flex space-x-4  sm:justify-start justify-center">
              {Author.socials.map((social, index) => {
                return (
                  <Link
                    key={index}
                    href={social.href}
                    style={{ color: social.color }}
                    className={`text-xl transition duration-200 hover:scale-125 hover:outline-none`}
                  >
                    <FontAwesomeIcon icon={["fab", social.icon as IconName]} />
                  </Link>
                );
              })}
            </div>
          </div>
          {/* // * Rigth */}
          <div className="text-red-500">
            <h1 className="text-2xl text-neutral-200 mb-2">Navigation</h1>
            <ul className="sm:text-right space-y-2">
              {Screens.map((screen, index) => {
                return (
                  <li key={index} className="text-lg">
                    <Link
                      href={screen.href}
                      className={`transition-all duration-200 bg-no-repeat border-b-0 outline-none text-neutral-400 bg-[length:0px_2px] bg-left-bottom bg-gradient-to-r from-neutral-200 to-neutral-200 hover:outline-none hover:text-neutral-200 hover:bg-[length:100%_2px] focus:outline-none focus:text-neutral-200 focus:bg-[length:100%_2px]`}
                    >
                      {screen.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
