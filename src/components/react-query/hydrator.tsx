import { type QueryClient, dehydrate } from "@tanstack/query-core";
import React from "react";
import Hydrate from "./hydrate";
const Hydrator = ({
  children,
  client,
}: {
  client: QueryClient;
  children: React.ReactNode | React.ReactNode[];
}) => {
  const dehydratedState = dehydrate(client, {
    shouldDehydrateQuery: () => true,
  });
  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};

export default Hydrator;
