import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import router from "@/lib/api/router";
import { createContext } from "@/lib/api/context";
import { NextRequest } from "next/server";

async function handler(req: NextRequest) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router,
    createContext,
  });
}

export { handler as GET, handler as POST };
