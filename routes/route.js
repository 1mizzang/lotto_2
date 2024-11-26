// routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller'); // 컨트롤러 불러오기

// 모든 데이터를 조회하는 라우트
router.get('/', controller.getAllCrawling3Data);

module.exports = router;
