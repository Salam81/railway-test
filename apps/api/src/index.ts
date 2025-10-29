import { cors } from "@elysiajs/cors";
import { Elysia } from "elysia";

const app = new Elysia()
  .use(cors())
  .get("/todos", () => [
    {
      id: 1,
      title: "Buy chocolate",
      completed: false,
    },
    {
      id: 2,
      title: "Buy milk",
      completed: true,
    },
  ])
  .listen({ port: Number(Bun.env.PORT ?? 3000), hostname: "0.0.0.0" });

export type App = typeof app;

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
