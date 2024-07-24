import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "nbvoeb4m48",
  apiKey: process.env.API_KEY,
});
