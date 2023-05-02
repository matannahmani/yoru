/* eslint-disable @typescript-eslint/no-unsafe-call */
import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;
