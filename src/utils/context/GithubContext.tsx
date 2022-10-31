import React, {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import axios from "axios";
interface GithubContextProps {
  user: IUser;
}

export const GithubContext = createContext<GithubContextProps>(
  {} as GithubContextProps
);
interface IUser {
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
}
const END_POINT = "https://api.github.com";

const GithubProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const getUserInfo = async () => {
    try {
      const { data } = await axios.get<IUser>(`${END_POINT}/users/skipperlla`);
      const {
        avatar_url,
        html_url,
        name,
        company,
        blog,
        location,
        twitter_username,
        public_repos,
        followers,
        following,
      } = data;
      setUser({
        avatar_url,
        html_url,
        name,
        company,
        blog,
        location,
        twitter_username,
        public_repos,
        followers,
        following,
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  const GithubContextValues = useMemo(() => ({ user }), [user]);
  return (
    <GithubContext.Provider value={GithubContextValues}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;

export const useGithub = () => useContext(GithubContext);
