import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type AppType } from "next/dist/shared/lib/utils";
import { FavoritesProvider } from "~/context/Favorites";

import "~/styles/globals.css";

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <Component {...pageProps} />
      </FavoritesProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
