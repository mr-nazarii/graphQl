import cors from "cors";
import dotenv from "dotenv";
import { graphql } from "graphql";
import { Schema } from "./schema/schema";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
const app = express();

const port = process.env.PORT || 4000;
dotenv.config({ path: __dirname + "/.env" });
mongoose.connect(process.env.DATABASE_URL as any);

const db = mongoose.connection;

app.use(cors());

db.on("error", (err: any) =>
  console.log("Something went wrong " + err.message)
);

db.once("open", () => console.log("MongoDB succsessfully connected"));

// create a graphql express middleware that will use an exported schema
app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  } as any)
);

app.listen(port, () => console.log("Server listening on port " + port));
