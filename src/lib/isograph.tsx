"use client";
import { useMemo, Suspense } from "react";
import {
  createIsographEnvironment,
  createIsographStore,
  IsographEnvironmentProvider,
} from "@isograph/react";

function makeNetworkRequest<T>(
  queryText: string,
  variables: unknown
): Promise<T> {
  const promise = fetch(
    "https://swapi-graphql.netlify.app/.netlify/functions/index",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: queryText, variables }),
    }
  ).then(async (response) => {
    const json = await response.json();

    if (response.ok) {
      return json;
    } else {
      throw new Error("NetworkError", {
        cause: json,
      });
    }
  });
  return promise;
}

export function IsographProvider({ children }: { children: React.ReactNode }) {
  const environment = useMemo(
    () =>
      createIsographEnvironment(
        createIsographStore(),
        makeNetworkRequest,
        // Optional missing field handler
        null,
        // Optional logger
        console.log
      ),
    []
  );
  return (
    <IsographEnvironmentProvider environment={environment}>
      <Suspense fallback="loading">{children}</Suspense>
    </IsographEnvironmentProvider>
  );
}
