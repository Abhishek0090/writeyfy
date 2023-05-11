import mysql2, { Connection, createConnection } from "mysql2";

const dbname: any = process.env.DBNAME;

const db: Connection = mysql2.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "writeyfy",
  port: 3306,
});

export default db;
