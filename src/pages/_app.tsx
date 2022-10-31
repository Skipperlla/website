import "@assets/styles/globals.css";
import GithubProvider, { GithubContext } from "@utils/context/GithubContext";
// import ExportIcons from "../../scripts/Icons";
import { AppProps } from "next/app";
import MainLayout from "../layout/MainLayout";
import "@utils/font-awesome";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState<boolean>(true);

  useEffect(() => {
    setIsSSR(typeof window === "undefined");
  }, []);
  return (
    <GithubProvider>
      {!isSSR && (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </GithubProvider>
  );
}

export default MyApp;
