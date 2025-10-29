import { treaty } from "@elysiajs/eden";
import type { App } from "@railway-test/contracts";

export const api = treaty<App>("http://localhost:3000/", {
    fetch: {
        credentials: "include",
    },
});
