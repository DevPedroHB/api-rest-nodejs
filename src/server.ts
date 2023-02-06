import fastify from "fastify";

const app = fastify();

app.get("/hello", () => {
  return "Hello world!";
});

app
  .listen({
    port: 3333,
  })
  .then((url) => {
    console.log(`HTTP server running on ${url}`);
  });
