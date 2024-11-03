import React, { useMemo } from "react";
import { iso } from "@iso";

function nonNullable<T>(value: T): value is NonNullable<T> {
  return value != null;
}

function toSorted<T>(arr: T[], comparator: (a: T, b: T) => number): T[] {
  const sorted = [...arr];
  sorted.sort(comparator);
  return sorted;
}

export const HomePage = iso(`
  field Root.HomePage @component {
    allFilms {
      films {
        id
        title
        episodeID
      }
    }
  }
`)(function HomePageComponent({ data }) {
  const films = useMemo(
    () =>
      toSorted(data.allFilms?.films ?? [], (film1, film2) => {
        if (film1?.episodeID == null || film2?.episodeID == null) {
          throw new Error(
            "This API should not return null films or null episode IDs."
          );
        }
        return film1.episodeID > film2.episodeID ? 1 : -1;
      }).filter(nonNullable),
    [data.allFilms?.films]
  );

  return (
    <>
      <h1>Star Wars Film Archive</h1>
      {films.map((film) => (
        <h2 key={film.id}>
          Episode {film.episodeID}: {film.title}
        </h2>
      ))}
    </>
  );
});

export default HomePage;
