"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryClinetPriverImpl from "./types";
import request from "@/utils/request";
import api from "@/api";

export const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const prefetchTodos = async () => {
  // The results of this query will be cached like a normal query
  await queryClient.prefetchQuery({
    queryKey: ["musics", { isPlaylist: false }],
    queryFn: () =>
      request({
        url: api.songs,
      }),
  });
};

prefetchTodos();

const ReactQueryContainer = ({ children }: QueryClinetPriverImpl) => {
  const [qc] = useState(() => queryClient);

  return <QueryClientProvider client={qc}>{children}</QueryClientProvider>;
};

export default ReactQueryContainer;
