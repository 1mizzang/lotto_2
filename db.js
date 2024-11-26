// db.js
const mysql = require('mysql2/promise'); // MySQL 연결을 위해 'mysql2/promise' 사용

// MySQL 연결 설정
const dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: '1234',
  database: 'test',
  charset: 'utf8mb4',
  collation: 'utf8mb4_general_ci', // 호환 가능한 정렬 설정
};

// MySQL 연결 객체 반환
const db = mysql.createPool(dbConfig); // 커넥션 풀 생성

module.exports = db;
