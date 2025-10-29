import { treaty } from "@elysiajs/eden";
import type { App } from "@railway-test/contracts";

const API_URL = process.env.API_URL || "http://localhost:3000";

export const api = treaty<App>(API_URL, {
  fetch: {
    credentials: "include",
  },
});
