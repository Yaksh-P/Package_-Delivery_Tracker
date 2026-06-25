import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Yaksh@1206",
  database: "package_delivery_tracker",
});

export default pool;
