/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
import superjson from "superjson";

import { createTRPCProxyClient, httpLink, loggerLink } from "@trpc/client";
import type { AppRouter } from "~/server/api/root";

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export const api = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    // loggerLink({
    //   enabled: (opts) =>
    //     process.env.NODE_ENV === "development" ||
    //     (opts.direction === "down" && opts.result instanceof Error),
    // }),
    // this is for ServerSide disable batching
    httpLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});
