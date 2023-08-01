import { experimental_createTRPCNextAppDirServer } from "@trpc/next/app-dir/server";
import type router from "./api/router";
import { unstable_httpBatchStreamLink } from "@trpc/client";
import { headers } from "next/headers";

export const trpc = experimental_createTRPCNextAppDirServer<typeof router>({
  config() {
    return {
      links: [
        unstable_httpBatchStreamLink({
          url: "http://localhost:3000/api/trpc",
          headers() {
            const heads = new Map(headers());
            return Object.fromEntries(heads);
          },
        }),
      ],
    };
  },
});
