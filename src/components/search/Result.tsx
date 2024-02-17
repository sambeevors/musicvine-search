import { StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { FavoritesContext } from "~/context/Favorites";
import { type FeaturedTag, type Hit } from "~/definitions/Response";
import { RESULTS_PER_PAGE } from "~/pages";

const SearchResult = ({
  hit,
  index,
  pageIndex,
  params,
}: {
  hit: Hit;
  index: number;
  pageIndex: number;
  params: {
    collection: string;
  };
}) => {
  const { favouriteIds, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0, transition: { delay: 0 } }}
      transition={{
        duration: 0.3,
        delay: 0.1 * (pageIndex * RESULTS_PER_PAGE + index),
      }}
      className="bg-brand-main-bg rounded-lg"
    >
      <a
        href={
          params.collection === "tracks"
            ? `https://uppbeat.io/track/${hit.document.artist_slug}/${hit.document.slug}`
            : `https://uppbeat.io/sfx/${hit.document.slug}/${hit.document.sfx_id}/${hit.document.id}`
        }
        className="hover:bg-brand-main-bg-hover -mx-4 flex items-center gap-x-3 px-4 py-2 transition duration-75 sm:-mx-8 sm:px-8"
      >
        <Image
          src={hit.document.image}
          alt={hit.document.name}
          width={500}
          height={500}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="text-brand-main-text-search-result flex-1">
          <h3 className="mb-px line-clamp-2 overflow-hidden text-ellipsis leading-5">
            {hit.document.name}
          </h3>
          <span className="border-brand-main-border inline-block max-w-[100px] rounded-lg border px-2 py-px text-xs sm:max-w-max">
            <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
              {hit.document.artist}
            </span>
          </span>
        </div>

        {hit.document.featured_tags && (
          <div>
            <h3 className="sr-only">Tags</h3>
            <ul className="flex flex-wrap justify-end gap-1 sm:flex-nowrap">
              {hit.document.featured_tags.map(({ id, name }: FeaturedTag) => (
                <li
                  key={name + id}
                  className="bg-brand-main-bg-secondary rounded-full px-2 py-1 text-xs"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          onClick={(e) => {
            // Prevent the link from being followed
            e.preventDefault();
            if (favouriteIds.includes(hit.document.id)) {
              removeFavorite(hit.document.id);
            } else {
              addFavorite(hit);
            }
          }}
          className="bg-brand-main-bg-secondary hover:bg-brand-main-bg-hover rounded-full p-1 transition duration-75"
        >
          <span className="sr-only">
            {favouriteIds.includes(hit.document.id) ? "Remove from" : "Add to"}{" "}
            favorites
          </span>
          <StarIcon
            className={`${favouriteIds.includes(hit.document.id) ? "text-brand-main animate-activate" : "text-brand-main-text/25"} h-6 w-6`}
            aria-hidden
          />
        </button>
      </a>
    </motion.li>
  );
};

export default SearchResult;
