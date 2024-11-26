// controller.js
const model = require('../models/model');

// `crawling3` 테이블의 모든 데이터를 조회하는 컨트롤러
const getAllCrawling3Data = async (req, res) => {
  try {
    const data = await model.getAllCrawling3Data(); // 모델에서 데이터 가져오기
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message }); // 에러 발생 시 JSON으로 반환
  }
};

module.exports = {
  getAllCrawling3Data,
};
