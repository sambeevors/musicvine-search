import { useContext } from "react";
import { FavoritesContext } from "~/context/Favorites";
import Result from "./Result";

const FavoritesSection = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <section className="container mx-auto" id="favorites">
      <ul>
        {favorites.length ? (
          favorites.map((hit, index) => (
            <Result
              key={hit.document.id}
              hit={hit}
              pageIndex={0}
              index={index}
              params={{ collection: hit.document.sfx_id ? "sfx" : "tracks" }}
            />
          ))
        ) : (
          <li>
            <p className="text-brand-main-text-search-result text-center text-xl font-black">
              You don&apos;t have any favorites yet. Go find some!
            </p>
          </li>
        )}
      </ul>
    </section>
  );
};

export default FavoritesSection;
