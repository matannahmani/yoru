"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
//import queryClient from "../store";

export default function RQProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
