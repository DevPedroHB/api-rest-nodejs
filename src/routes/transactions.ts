import { knex } from "@/database";
import { randomUUID } from "crypto";
import { FastifyInstance } from "fastify";

export async function transactionsRoutes(app: FastifyInstance) {
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
}
