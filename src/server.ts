import { env } from "@/env";
import { transactionsRoutes } from "@/routes/transactions";
import cookie from "@fastify/cookie";
import fastify from "fastify";

const app = fastify();

app.register(cookie);
app.register(transactionsRoutes, {
  prefix: "transactions",
});

app
  .listen({
    port: env.PORT,
  })
  .then((url) => {
    console.log(`HTTP server running on ${url}`);
  });
