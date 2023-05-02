import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  country: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      console.log("im called, Date:", new Date());
      // https://restcountries.com/v3.1/alpha/jpn
      const req = await fetch(
        `https://restcountries.com/v3.1/alpha/${input.name}`
      );
      const data = await req.json();
      return data;
    }),
});
