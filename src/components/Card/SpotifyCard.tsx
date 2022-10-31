import Image from "next/image";
import React, { FC } from "react";
import Link from "next/link";
import { Audio } from "react-loader-spinner";
interface IArtists {
  name: string;
  href: string;
  id: string;
}
interface IAlbum {
  name: string;
  href: string;
  image: {
    height: number;
    href: string;
    width: number;
  };
}
interface ISpotifyCard {
  title: string;
  isPlaying: boolean;
  href: string;
  artists: IArtists[];
  album: IAlbum;
}
const IMAGE_WIDTH = 60;
const IMAGE_HEIGHT = 60;
const SpotifyCard: FC<ISpotifyCard> = ({
  isPlaying,
  album,
  href,
  title,
  artists,
}) => {
  return (
    <div className="mx-auto mt-4 max-w-sm">
      {isPlaying ? (
        <div className="bg-neutral-800 rounded-xl flex hover:ring-2 transition-all p-2">
          <div className="inline-flex w-full items-center  bg-neutral-800 h-full rounded-xl ">
            {album?.image?.href && (
              <Link className="overflow-hidden rounded-xl flex" href="#">
                <Image
                  className="aspect-square"
                  src={album?.image?.href}
                  alt={"spotify_image_card"}
                  width={IMAGE_WIDTH}
                  height={IMAGE_HEIGHT}
                />
              </Link>
            )}

            <div className="flex flex-col ml-4 flex-1 truncate">
              <div className="flex items-center ">
                <Audio
                  height={15}
                  width={15}
                  color="grey"
                  ariaLabel="loading-indicator"
                />
                <span className="ml-2 text-neutral-400 text-sm">
                  Recently Played
                </span>
              </div>
              <Link className="truncate" href={href}>
                <span className="font-semibold transition-all duration-200 bg-no-repeat border-b-0 outline-none text-neutral-200 bg-[length:0px_2px] bg-left-bottom bg-gradient-to-r from-neutral-200 to-neutral-200 hover:outline-none  hover:bg-[length:100%_2px] focus:outline-none focus:text-neutral-200 focus:bg-[length:100%_2px]">
                  {title}
                </span>
              </Link>
              <div className="flex items-center">
                {artists?.map((a, index) => {
                  return (
                    <Link
                      key={index}
                      href={a.href}
                      className="truncate text-neutral-400 text-sm transition-all duration-200 bg-no-repeat border-b-0 outline-none hover:text-neutral-200 bg-[length:0px_2px] bg-left-bottom bg-gradient-to-r from-neutral-200 to-neutral-200 hover:outline-none  hover:bg-[length:100%_2px] focus:outline-none focus:text-neutral-200 focus:bg-[length:100%_2px]"
                    >
                      {index !== 0 && ","} <span>{a?.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10" />
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded" />
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2" />
                  <div className="h-2 bg-slate-700 rounded col-span-1" />
                </div>
                <div className="h-2 bg-slate-700 rounded" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotifyCard;
