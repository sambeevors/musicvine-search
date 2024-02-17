import { Tab } from "@headlessui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useState } from "react";
import { useDebounce } from "react-use";
import FavoritesSection from "~/components/search/FavoritesSection";
import HeroSection from "~/components/search/HeroSection";
import InputSection from "~/components/search/InputSection";
import ResultsSection from "~/components/search/ResultsSection";
import { type Response } from "~/definitions/Response";

export const RESULTS_PER_PAGE = 5;
export const fadeInOut = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("tracks");
  const [params, setParams] = useState({
    q: searchQuery,
    query_by: "name",
    collection: searchType,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  // Debounce the search query to prevent too many requests
  useDebounce(
    async () => {
      setParams({
        q: searchQuery,
        query_by: "name",
        collection: searchType,
      });
    },
    200,
    [searchQuery, searchType],
  );

  /*
   * The useInfiniteQuery hook is used to fetch paginated data.
   * Data is fetched in pages, and the getNextPageParam function
   * is used to determine if there are more pages to fetch.
   */
  const search = useInfiniteQuery<Response>({
    queryKey: [
      "search",
      {
        q: params.q,
        collection: params.collection,
      },
    ],
    queryFn: async ({ pageParam }) =>
      fetch(
        `https://3feynu8vjgbqkl27p.a1.typesense.net/collections/tracks/documents/search?${new URLSearchParams(
          {
            ...params,
            per_page: RESULTS_PER_PAGE.toString(),
            page: typeof pageParam === "number" ? pageParam.toString() : "1",
          },
        ).toString()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-TYPESENSE-API-KEY": "MqZdBn4VL8k7IqhuMKOSNuBxmU0isNLk",
          },
        },
      ).then((res) => res.json()),
    enabled: params.q.length > 2, // Only run the query if searchQuery is at least 3 characters
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage?.hits?.length === RESULTS_PER_PAGE
        ? lastPage.page + 1
        : undefined, // Return undefined if there are no more pages
  });

  return (
    <>
      <Head>
        <title>Search • Uppbeat</title>
      </Head>
      <HeroSection />
      <Tab.Group>
        <Tab.List className="flex justify-center">
          <Tab className="ui-selected:bg-brand-main ui-selected:text-white ui-not-selected:bg-transparent ui-not-selected:text-white rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-white">
            Search
          </Tab>
          <Tab className="ui-selected:bg-brand-main ui-selected:text-white ui-not-selected:bg-transparent ui-not-selected:text-white rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-white">
            Favorites
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-4">
          <Tab.Panel>
            <InputSection
              handleInputChange={handleInputChange}
              handleSelectChange={handleSelectChange}
              searchType={searchType}
              searchQuery={searchQuery}
            />
            <ResultsSection search={search} params={params} />
          </Tab.Panel>
          <Tab.Panel>
            <FavoritesSection />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
