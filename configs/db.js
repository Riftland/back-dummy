const slonik = require("slonik");

const SLONIK_URL =
  process.env.NODE_ENV === "production"
    ? process.env.DATABASE_URL
    : process.env.LOCAL_URL;

const db = slonik.createPool(SLONIK_URL);

module.exports = db;
