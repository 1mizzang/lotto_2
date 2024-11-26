// model.js
const db = require('../db'); // db.js에서 MySQL 연결 가져오기

// `crawling3` 테이블의 모든 데이터를 조회하는 함수
const getAllCrawling3Data = async () => {
  try {
    const [rows] = await db.query('SELECT * FROM crawling3'); // 쿼리 실행
    return rows; // 결과 반환
  } catch (err) {
    throw new Error(`Error retrieving data: ${err.message}`); // 에러 던지기
  }
};

module.exports = {
  getAllCrawling3Data,
};

