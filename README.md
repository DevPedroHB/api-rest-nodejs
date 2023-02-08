<h1 align="center">API de Transações</h1>

<p align="center">
  This repository contains an implementation of a REST API for managing financial transactions.
</p>

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-services">Services</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-packages">Packages</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-features">Features</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-links">Links</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-versioning">Versioning</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

## 🚀 Technologies

Here are the technologies used in this project.

- TypeScript 4.9.5
- NodeJS 18.13.0
- Fastify 4.12.0
- Vitest 0.28.4

## 📋 Services

Here are the services used in this project.

- [GitHub](https://github.com/)

## 📦 Packages

Here are the packages used in this project.

- <b>eslint</b> -> Used to link JavaScript code. Linting is the process of checking code for coding issues such as syntax errors, style issues and best practices, among others.
- <b>supertest</b> -> Used to test HTTP APIs. It allows you to send HTTP requests to your application and verify that the response is correct, facilitating your application's integration testing.
- <b>tsx</b> -> Used to compile and convert your TypeScript code to JavaScript.
- <b>dotenv</b> -> Used to load environment variables from an .env file to process.env in Node.js.
- <b>knex</b> -> Used to allow you to write concise and maintainable SQL queries using a JavaScript API.
- <b>zod</b> -> Used to validate and manipulate structured data with JavaScript.
- <b>tsup</b> -> Used for building TypeScript code to JavaScript.

## 🔥 Features

Here are the main features of the project.

- Functional Requirements:
  - [x] The user must be able to create a new transaction;
  - [x] The user must be able to obtain a summary of his account;
  - [x] The user must be able to list all transactions that have already occurred;
  - [x] User must be able to view a single transaction;
- Business Rules:
  - [x] The transaction can be of the credit type that will add to the total amount, or debit type that will subtract;
  - [x] It must be possible to identify the user among the requests;
  - [x] User can only view transactions which he created;
- Endpoints:
  - GET /transactions: Returns all transactions.
  - POST /transactions: Adds a new transaction.
  - GET /transactions/:id: Returns a specific transaction.
  - GET /transactions/summary: Returns the summary of all transactions.

## 📎 Links

- Deploy on [](): Em breve
- Repository: https://github.com/DevPedroHB/api-rest-nodejs

## 🔰 Versioning

Here are the versions of the parts of the project.

- API -> 1.0.0

## :memo: License

This project is licensed under the MIT license.

---

Made with ♥ by Pedro Henrique 🚀 [Never stop learning!](https://github.com/DevPedroHB)
