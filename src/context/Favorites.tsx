import { createContext, useMemo } from "react";
import { useLocalStorage } from "react-use";
import { type Hit } from "~/definitions/Response";

interface FavoritesContextType {
  favorites: Hit[];
  favouriteIds: string[];
  addFavorite: (hit: Hit) => void;
  removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  favouriteIds: [],
  addFavorite: () => {
    console.error("You forgot to add the FavoritesProvider to your app");
  },
  removeFavorite: () => {
    console.error("You forgot to add the FavoritesProvider to your app");
  },
});

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useLocalStorage<Hit[]>("fav", []);
  const favouriteIds = useMemo(
    () => favorites?.map((hit) => hit.document.id) ?? [],
    [favorites],
  );

  const addFavorite = (hit: Hit) => {
    setFavorites(() => (favorites ? [...favorites, hit] : [hit]));
  };

  const removeFavorite = (id: string) => {
    setFavorites(() =>
      favorites ? favorites.filter((hit) => hit.document.id !== id) : [],
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites: favorites ?? [],
        favouriteIds,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
