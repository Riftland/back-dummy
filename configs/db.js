const slonik = require("slonik");

const SLONIK_URL = process.env.DB_URL;

const db = slonik.createPool(SLONIK_URL);

module.exports = db;
