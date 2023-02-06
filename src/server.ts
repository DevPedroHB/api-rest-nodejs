import { randomUUID } from "crypto";
import fastify from "fastify";
import { knex } from "./database";

const app = fastify();

app.get("/new", async () => {
  const transaction = await knex("transactions")
    .insert({
      id: randomUUID(),
      title: "Transação teste",
      amount: 1000,
    })
    .returning("*");

  return transaction;
});

app.get("/transactions", async () => {
  const transactions = await knex("transactions")
    .where("amount", 1000)
    .select("*");

  return transactions;
});

app
  .listen({
    port: 3333,
  })
  .then((url) => {
    console.log(`HTTP server running on ${url}`);
  });
