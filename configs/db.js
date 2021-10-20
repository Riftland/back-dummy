const slonik = require("slonik");

const SLONIK_URL = process.env.DATABASE_URL;

const db = slonik.createPool(SLONIK_URL);

module.exports = db;
