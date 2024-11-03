
export type Root__HomePage__param = {
  readonly data: {
    readonly allFilms: ({
      /**
A list of all of the objects returned in the connection. This is a convenience
field provided for quickly exploring the API; rather than querying for
"{ edges { node } }" when no edge data is needed, this field can be be used
instead. Note that when clients like Relay need to fetch the "cursor" field on
the edge to enable efficient pagination, this shortcut cannot be used, and the
full "{ edges { node } }" version should be used instead.
      */
      readonly films: (ReadonlyArray<({
        /**
The ID of an object
        */
        readonly id: string,
        /**
The title of this film.
        */
        readonly title: (string | null),
        /**
The episode number of this film.
        */
        readonly episodeID: (number | null),
      } | null)> | null),
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
