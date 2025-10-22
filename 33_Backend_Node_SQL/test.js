// TESTING SQL AND NODE CONNECTION

import { faker } from '@faker-js/faker';
import mysql from 'mysql2/promise';

// Random user generator 
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '123'
});

// First query
let q1 = "SHOW TABLES";

try {
  const [result] = await connection.query(q1);
  console.log(result);
  console.log(result.length);
  console.log(result[0]);
  console.log(result[1]);
} catch (err) {
  console.error(err);
}

// Second query
try {
  const q2 = "INSERT IGNORE INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
  const user_1 = ["123", "123_new_user", "abc@gmail.com", "user_123"];

  const [result] = await connection.query(q2, user_1);
  console.log("Insert result:", result);
} catch (err) {
  console.error("Query error:", err);
}

// Third query
try {
  const q3 = "INSERT IGNORE INTO user (id, username, email, password) VALUES ?";
  const users = [["123b", "123_new_userb", "abcb@gmail.com", "user_123b"],["123c", "123_new_userc", "abcc@gmail.com", "user_123c"]];
  
  const [result] = await connection.query(q3, [users]);
  console.log("Insert result:", result);
} catch (err) {
  console.error("Query error:", err);
}

// Fourth query
try {
  let data = [];
  for(let i=0; i<100; i++){
    data.push(getRandomUser());
  }
  
  const q4 = "INSERT IGNORE INTO user (id, username, email, password) VALUES ?";
  
  const [result] = await connection.query(q4, [data]);
  console.log("Insert result:", result);
} catch (err) {
  console.error("Query error:", err);
}



// Close the connection once after all queries are done
await connection.end();
