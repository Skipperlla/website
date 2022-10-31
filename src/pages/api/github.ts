import { URLSearchParams } from "url";
import type { NextApiRequest, NextApiResponse } from "next";

const END_POINT = "https://api.github.com";

const getUserInfo = async () => {
  const response = await fetch(`${END_POINT}/users/skipperlla`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

interface IArtist {
  name: string;
  external_urls: { spotify: string };
  id: string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_: any, res: NextApiResponse) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );
  const {
    avatar_url: avatar,
    html_url: url,
    name,
    company,
    blog,
    location,
    twitter_username: twitter,
    public_repos: publicRepos,
    followers,
    following,
  } = await getUserInfo();

  return res.status(200).json({
    avatar,
    url,
    name,
    company,
    blog,
    location,
    twitter,
    publicRepos,
    followers,
    following,
  });
};
