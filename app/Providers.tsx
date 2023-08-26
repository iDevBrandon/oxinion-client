"use client";

import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import StyledComponentsRegistry from "@/lib/registry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Providers = (props: React.PropsWithChildren) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </StyledComponentsRegistry>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Providers;
