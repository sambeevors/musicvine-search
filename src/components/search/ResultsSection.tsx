import {
  type InfiniteData,
  type UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { type Hit, type Response } from "~/definitions/Response";
import { fadeInOut } from "~/pages";
import SearchResult from "./Result";

interface ResultsSectionProps {
  search: UseInfiniteQueryResult<InfiniteData<Response, unknown>, Error>;
  params: {
    collection: string;
  };
}

const ResultsSection = ({ search, params }: ResultsSectionProps) => {
  return (
    <section className="container mx-auto" id="results">
      <h2 className="sr-only">Results</h2>
      <div className="w-full">
        <AnimatePresence>
          {search.isLoading ? (
            <motion.p
              className="text-brand-main-text-search-result text-center text-xl font-black"
              {...fadeInOut}
            >
              Loading...
            </motion.p>
          ) : search.isError ? (
            <motion.p
              className="text-center text-xl font-black text-red-500"
              {...fadeInOut}
            >
              Something went wrong loading the results, please try again.
            </motion.p>
          ) : search.data ? (
            <>
              <motion.ul className="flex flex-col" {...fadeInOut}>
                <AnimatePresence mode="wait">
                  {search.data.pages.map((page, pageIndex) =>
                    page.hits.map((hit: Hit, index) => (
                      <SearchResult
                        key={hit.document.slug + pageIndex + index}
                        hit={hit}
                        index={index}
                        pageIndex={pageIndex}
                        params={params}
                      />
                    )),
                  )}
                </AnimatePresence>
              </motion.ul>
              {search.hasNextPage ? (
                <motion.button
                  onClick={() => search.fetchNextPage()}
                  className="bg-brand-main-bg-secondary hover:bg-brand-main-bg-hover mt-4 block w-full rounded-lg py-3 text-center text-xl font-black transition"
                  {...fadeInOut}
                >
                  Load more
                </motion.button>
              ) : null}
            </>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ResultsSection;
