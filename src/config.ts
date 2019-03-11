import pf from "petfinder-client";

if (!process.env.API_KEY || !process.env.API_SECRET) {
  throw new Error("no API keys were set");
}

export const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});
