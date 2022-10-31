import { URLSearchParams } from "url";
import type { NextApiResponse } from "next";

if (
  !process.env.SPOTIFY_CLIENT_ID ||
  !process.env.SPOTIFY_CLIENT_SECRET ||
  !process.env.SPOTIFY_REFRESH_TOKEN
) {
  throw new Error("Missing Spotify environment variables");
}

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const BASIC = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
).toString("base64");
const TOP_ITEMS_ENDPOINT = `https://api.spotify.com/v1/me/top`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token?`;

const getAccessToken = async () => {
  const TOKEN_URL =
    TOKEN_ENDPOINT +
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    });
  const response = await fetch(TOKEN_URL, {
    headers: {
      Authorization: `Basic ${BASIC}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });

  return response.json();
};

export const getTopArtists = async () => {
  const { access_token } = await getAccessToken();

  return fetch(`${TOP_ITEMS_ENDPOINT}/artists`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(`${TOP_ITEMS_ENDPOINT}/tracks`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
interface ITopArtists {
  external_urls: { spotify: string };
  genres: string[];
  id: string;
  images: { height: number; url: string; width: number }[];
  name: string;
  popularity: number;
}
// eslint-disable-next-line import/no-anonymous-default-export
export default async (_: any, res: NextApiResponse) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );
  const responseTopArtists = await getTopArtists();
  const responseTopArtistsJson = await responseTopArtists.json();
  const artists = responseTopArtistsJson.items.map((item: ITopArtists) => {
    return {
      url: item.external_urls.spotify,
      genres: item.genres,
      id: item.id,
      images: {
        height: item.images[0].height,
        url: item.images[0].url,
        width: item.images[0].width,
      },
      name: item.name,
      popularity: item.popularity,
    };
  });
  const responseTopTracks = await getTopTracks();

  return res.status(200).json({
    artists,
  });
};
