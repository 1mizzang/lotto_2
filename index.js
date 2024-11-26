// index.js
const express = require('express');
const cors = require('cors'); // cors 모듈 불러오기
const app = express();
const PORT = 3000;

app.use(cors()); // 모든 도메인 허용
const route = require('./routes/route');

app.use(express.json());
app.use('/crawling3', route);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
