"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryClinetPriverImpl from "./types";

const queryClient = () => new QueryClient();

const ReactQueryContainer = ({ children }: QueryClinetPriverImpl) => {
  const [qc] = useState(queryClient);

  return <QueryClientProvider client={qc}>{children}</QueryClientProvider>;
};

export default ReactQueryContainer;
